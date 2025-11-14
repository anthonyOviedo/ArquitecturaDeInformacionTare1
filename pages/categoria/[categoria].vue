<script setup lang="ts">
const route = useRoute()
const categoria = computed(() => route.params.categoria as string)

const { data: articulos } = await useAsyncData(`categoria-${categoria.value}`, () =>
  queryContent(categoria.value).sort({ date: -1 }).find()
)

const nombreCategoria = computed(() => {
  switch (categoria.value) {
    case 'sucesos':
      return 'Sucesos'
    case 'deportes':
      return 'Deportes'
    case 'espectaculos':
      return 'Espectáculos'
    default:
      return categoria.value
  }
})
</script>

<template>
  <section>
    <header>
      <h1>{{ nombreCategoria }}</h1>
      <p>
        Noticias de la categoría <strong>{{ nombreCategoria }}</strong
        >. Seleccione una nota para leerla completa.
      </p>
    </header>

    <div v-if="articulos?.length">
      <article v-for="articulo in articulos" :key="articulo._path">
        <h2>
          <NuxtLink :to="articulo._path">
            {{ articulo.title }}
          </NuxtLink>
        </h2>
        <p>
          {{ articulo.author }} · {{ articulo.date }}
        </p>
        <p>
          {{ articulo.description }}
        </p>
        <NuxtLink :to="articulo._path">
          Leer noticia completa
        </NuxtLink>
        <hr />
      </article>
    </div>
    <p v-else>
      No se encontraron noticias para esta categoría.
    </p>
  </section>
</template>
