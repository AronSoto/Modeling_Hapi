# Modeling Hapi

Sitio web moderno para Hapi 2.0 - Empresa de compra y venta de acciones y criptomonedas.

## 🚀 Tecnologías

- **Nuxt 3** - Framework Vue.js moderno
- **Vue 3** - Framework JavaScript reactivo
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **SCSS** - Preprocesador CSS
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

## 📋 Requisitos

- Node.js 20 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar sitio estático
npm run generate

# Vista previa del build
npm run preview
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run generate` - Genera un sitio estático
- `npm run preview` - Vista previa del build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Ejecuta ESLint y corrige automáticamente
- `npm run format` - Formatea el código con Prettier

## 🌐 Deployment en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama `master`.

### Configuración en GitHub:

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source** (Origen), selecciona **GitHub Actions**
5. Guarda los cambios

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) se encargará automáticamente de:
- Instalar dependencias
- Generar el sitio estático
- Desplegarlo en GitHub Pages

Tu sitio estará disponible en: `https://aronsoto.github.io/Modeling_Hapi/`

## 📁 Estructura del Proyecto

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuración de GitHub Actions
├── assets/
│   └── scss/
│       └── _variables.scss     # Variables SCSS
├── components/
│   ├── Header.vue              # Componente de encabezado
│   └── Footer.vue              # Componente de pie de página
├── pages/
│   └── index.vue               # Página principal
├── public/
│   └── Logo_Happi.png          # Logo de la aplicación
├── app.vue                     # Componente raíz
├── nuxt.config.ts              # Configuración de Nuxt
├── eslint.config.mjs           # Configuración de ESLint
├── .prettierrc                 # Configuración de Prettier
├── tsconfig.json               # Configuración de TypeScript
└── package.json                # Dependencias y scripts
```

## 🎨 Personalización

### Colores principales:
- Primario: `#4c57ed`
- Secundario: `#2be0ee`
- Fondo: `#C6C6C6`
- Footer: `rgb(20, 11, 68)`

Estos colores están definidos en `assets/scss/_variables.scss`.

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints en:
- Mobile: `< 768px`
- Tablet: `>= 768px`
- Desktop: `>= 1024px`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

<hr>

> [!NOTE]
> Contributions are welcome! If you find any issues or have suggestions for improvements.
>
> Feel free to open an issue or submit a pull request.

## <img src="https://i.pinimg.com/originals/9d/d1/a0/9dd1a0c90caa865e3718947e2b91d35e.gif" width="35" align="left">About Me

You can find more of my projects on [GitHub](https://github.com/AronSoto).
<img src="https://media.tenor.com/Pzq_B1qdoocAAAAi/salmon-minecraft.gif" align = "right" width="100">

I'm AronSoto and thank you for checking out my project!
