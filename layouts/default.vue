<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Blog de Noticias</NuxtLink>
        |
        <NuxtLink to="/categoria/sucesos">Sucesos</NuxtLink>
        |
        <NuxtLink to="/categoria/deportes">Deportes</NuxtLink>
        |
        <NuxtLink to="/categoria/espectaculos">Espectáculos</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>Arquitectura de la Información - Tarea 1</p>
      <p>Desarrollado con Nuxt 3 y @nuxt/content</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav a {
  color: white;
  margin-right: 8px;
  text-decoration: none;
}

main {
  padding: 16px;
}

footer {
  margin-top: 24px;
  padding: 10px;
  background-color: #f0f0f0;
  font-size: 12px;
  text-align: center;
}
</style>
