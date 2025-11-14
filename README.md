# Arquitectura de la Información - Tarea 1

Este proyecto corresponde a la **Tarea 1 - Introducción al uso de Nuxt.js**. Se trata de un blog de noticias nacionales desarrollado con **Nuxt 3** y **@nuxt/content**, que organiza las entradas en tres categorías:

- Sucesos  
- Deportes  
- Espectáculos  

Cada noticia está escrita en archivos Markdown dentro del directorio `content/`, incluye autor, fecha de publicación y al menos una fotografía relacionada.

## Requisitos previos

- Node.js 18 o superior
- npm o pnpm instalado

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Luego abra el navegador en `http://localhost:3000`.

## Generar sitio estático

```bash
npm run generate
```

El sitio estático se genera en `.output/public`, que puede usarse como carpeta de publicación en cualquier servicio de hosting estático.

## Despliegue

Puede desplegar el contenido de `.output/public` en el servicio de hosting estático de su preferencia (por ejemplo, GitHub Pages o Vercel), siguiendo las instrucciones propias de esa plataforma.

## Enlace al sitio publicado

Agregue aquí la URL en donde publicó el sitio:

- Sitio publicado: `https://blognoticiero.netlify.app`
