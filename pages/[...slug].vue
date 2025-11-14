<script setup lang="ts">
const route = useRoute()
const path = computed(() => '/' + (route.params.slug as string[]).join('/'))

const { data: articulo } = await useAsyncData(`articulo-${path.value}`, () =>
  queryContent().where({ _path: path.value }).findOne()
)

const { data: surround } = await useAsyncData(`surround-${path.value}`, () => {
  if (!articulo.value?.category) {
    return queryContent().only(['_path', 'title']).findSurround(path.value)
  }

  return queryContent()
    .where({ category: articulo.value.category })
    .only(['_path', 'title'])
    .findSurround(path.value)
})

const anterior = computed(() => surround.value?.[0] || null)
const siguiente = computed(() => surround.value?.[1] || null)
</script>

<template>
  <article v-if="articulo">
    <header>
      <p>{{ articulo.category }}</p>
      <h1>{{ articulo.title }}</h1>
      <p>
        Por <strong>{{ articulo.author }}</strong> · {{ articulo.date }}
      </p>
    </header>

    <section>
      <div v-if="articulo.image">
        <img :src="articulo.image" :alt="articulo.title" class="article-image" />
      </div>
      <p v-if="articulo.description">
        {{ articulo.description }}
      </p>
      <ContentRenderer :value="articulo" />
    </section>

    <nav>
      <div>
        <NuxtLink v-if="anterior" :to="anterior._path">
          ← {{ anterior.title }}
        </NuxtLink>
      </div>
      <div>
        <NuxtLink v-if="siguiente" :to="siguiente._path">
          {{ siguiente.title }} →
        </NuxtLink>
      </div>
    </nav>
  </article>

  <p v-else>
    La noticia que busca no existe o fue movida.
  </p>
</template>

<style scoped>
.article-image {
  float: right;
  width: 300px;
  max-width: 45%;
  margin: 0 0 10px 15px;
}
</style>
