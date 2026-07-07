# Pixel 360

Sitio web oficial de **Pixel 360**, agencia de marketing digital 360°. Impulsamos negocios con estrategia, tecnología e inteligencia artificial: desarrollo web, campañas publicitarias, redes sociales, diseño gráfico, video marketing y agentes de IA.

## Sobre la agencia

- **Marca:** Pixel 360
- **Tagline:** Agencia de marketing digital 360°. Impulsamos tu negocio con estrategia, tecnología e IA.
- **Ubicación:** Miami, FL · Atención LATAM
- **Teléfono:** +1 (786) 818 0611
- **Email:** csanchez@pixel360.media
- **Facebook:** [facebook.com](https://www.facebook.com/)

### Identidad visual

| Token | Valor |
|---|---|
| Azul marino (primario) | `#1C3E79` |
| Cian (secundario / acento) | `#3DBFEF` |
| Tipografía de titulares | Chakra Petch |
| Tipografía de cuerpo | Poppins |

La marca, colores y tipografías se definen en un único archivo: [`src/config/theme.mjs`](src/config/theme.mjs).

## Servicios

| Ruta | Servicio |
|---|---|
| `/servicios/desarrollo-web` | Desarrollo Web |
| `/servicios/agentes-ia` | Agentes de IA |
| `/servicios/diseno-grafico` | Diseño Gráfico |
| `/servicios/redes-sociales` | Gestión de Redes |
| `/servicios/campanas-publicitarias` | Campañas de Ads |
| `/servicios/videomarketing` | Video Marketing |
| `/servicios/embudos-venta` | Embudos de Venta |
| `/servicios/creadores-ugc` | Creadores UGC |
| `/servicios/creacion-contenido` | Creación de Contenido |

Los precios y planes de cada servicio (en USD, según catálogo oficial) viven en [`src/content/settings/plans.json`](src/content/settings/plans.json).

## Stack

- **[Astro](https://astro.build)** v5 — Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v3 — Utility-first CSS
- **[PostCSS](https://postcss.org)** + Autoprefixer
- **[Cloudflare Pages](https://pages.cloudflare.com)** — Hosting + Workers
- **GSAP** (CDN) — Animaciones avanzadas
- **Material Symbols** — Iconografía

## Estructura

```
├── src/
│   ├── config/
│   │   └── theme.mjs               # Colores, tipografías y logo — fuente única de marca
│   ├── content/
│   │   ├── pages/                  # Copys de Inicio, Nosotros, Contacto (JSON)
│   │   └── settings/
│   │       ├── site.json           # Marca, nav, contacto, footer
│   │       └── plans.json          # Servicios, planes y precios
│   ├── layouts/
│   │   └── Layout.astro            # Layout global (header, footer)
│   ├── pages/
│   │   ├── index.astro             # Landing page
│   │   ├── nosotros.astro          # Sobre nosotros
│   │   ├── contacto.astro          # Contacto
│   │   ├── producto.astro          # Vista de producto/plan con enlace a WhatsApp
│   │   └── servicios/              # Una página por servicio (ver tabla arriba)
│   └── styles/
│       └── global.css              # CSS global (usa las variables de theme.mjs)
├── public/                         # Logo, favicon e imágenes del sitio
├── html/                           # Versión standalone (Tailwind CDN, sin build)
├── tailwind.config.mjs
├── astro.config.mjs
└── postcss.config.mjs
```

## Empezar

```bash
npm install
npm run dev       # → localhost:4321
npm run build     # → dist/
npm run preview   # → preview local del build
```

## Editar contenido

- **Marca / colores / tipografías:** [`src/config/theme.mjs`](src/config/theme.mjs)
- **Datos de contacto, nav y footer:** [`src/content/settings/site.json`](src/content/settings/site.json)
- **Servicios, planes y precios:** [`src/content/settings/plans.json`](src/content/settings/plans.json)
- **Textos de Inicio / Nosotros / Contacto:** [`src/content/pages/`](src/content/pages/)
- **Cada página de servicio** tiene su propio `.astro` en `src/pages/servicios/`.

## Versión HTML standalone

La carpeta `html/` contiene versiones HTML puras (Tailwind CDN + CSS inline) sin dependencias ni build. Útiles para entregas rápidas o clientes que solo necesitan archivos estáticos.

## Deploy

Push a `main` → Cloudflare Pages build automático.

```bash
git push
```
