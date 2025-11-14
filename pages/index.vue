<script setup lang="ts">
const categorias = [
  {
    id: 'sucesos',
    nombre: 'Sucesos',
    descripcion:
      'Cobertura de emergencias, incidentes relevantes y acontecimientos que afectan la vida cotidiana en el país.'
  },
  {
    id: 'deportes',
    nombre: 'Deportes',
    descripcion:
      'Resultados, análisis y contexto de las principales competencias deportivas a nivel nacional e internacional.'
  },
  {
    id: 'espectaculos',
    nombre: 'Espectáculos',
    descripcion:
      'Noticias sobre cine, música, teatro y el día a día de las figuras del entretenimiento.'
  }
]
</script>

<template>
  <section>
    <header>
      <h1>Blog de noticias nacionales</h1>
      <p>
        Este blog reúne noticias nacionales organizadas en tres categorías principales: sucesos, deportes y
        espectáculos. Cada nota incluye su autor, fecha de publicación y al menos una fotografía relacionada.
      </p>
    </header>

    <section>
      <h2>Categorías de noticias</h2>
      <ul>
        <li v-for="categoria in categorias" :key="categoria.id">
          <h3>{{ categoria.nombre }}</h3>
          <p>{{ categoria.descripcion }}</p>
          <NuxtLink :to="`/categoria/${categoria.id}`">Ver noticias</NuxtLink>
        </li>
      </ul>
    </section>
  </section>
</template>
