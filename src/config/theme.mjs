/* ============================================================
   TEMA DEL SITIO — única fuente de marca (Pixel 360 · Corporate Blue)
   ------------------------------------------------------------
   Esto es LO ÚNICO que cambias al crear un sitio nuevo:
   colores, tipografías y logo. No toques el markup ni global.css.
   Colores oficiales (manual de identidad): navy #1C3E79, cian #3DBFEF.
   ============================================================ */

// --- Colores (hex). Las claves son los nombres de clase Tailwind:
//     bg-primary, text-on-surface, bg-surface-container-high, etc.
export const colors = {
  surface:                    '#ffffff',
  'surface-dim':              '#f5f8fc',
  'surface-container-lowest': '#ffffff',
  'surface-container-low':    '#f5f8fc',
  'surface-container':        '#eaf2fb',
  'surface-container-high':   '#dbe9f7',
  'surface-container-highest':'#c3ddf3',
  'on-surface':               '#0d1f38',
  'on-surface-variant':       '#475569',
  outline:                    '#dbe4ef',
  'outline-variant':          '#dbe4ef',
  primary:                    '#1C3E79',
  'on-primary':               '#ffffff',
  'primary-container':        '#1C3E79',
  'on-primary-container':     '#ffffff',
  'primary-fixed':            '#dbeafc',
  'on-primary-fixed':         '#0a1e40',
  'primary-fixed-dim':        '#bcd8f5',
  'inverse-primary':          '#7db8e8',
  secondary:                  '#3DBFEF',
  'on-secondary':             '#ffffff',
  background:                 '#ffffff',
  'on-background':            '#0d1f38',
  'body-text':                '#334155',
};

// --- Tipografías. Cambia las familias y el enlace de Google Fonts juntos.
export const fonts = {
  display:    'Chakra Petch, sans-serif',  // titulares (tipografía corporativa)
  body:       'Poppins, sans-serif',       // cuerpo (tipografía secundaria)
  googleHref: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap',
};

// --- Logo. Imagotipo completo de Pixel 360 (archivo en /public).
//     Si `image` tiene una ruta, se muestra la imagen en el header en lugar
//     del texto de marca. El nombre de marca se edita en settings/site.json.
export const logo = {
  image: '/isotipo.png',
  alt:   'Pixel 360',
};
