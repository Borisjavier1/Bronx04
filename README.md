# Bronx 04 - Freestyle Championships

Una aplicación React moderna para mostrar la información sobre las competencias de Freestyle "Bronx 04" de Heredia.

## Características

- **Diseño elegante**: Fondo negro con colores dorados y blancos
- **Secciones expandibles**: Cada temporada tiene su propia sección desplegable
- **Información organizada**: Descripción de cada temporada y lista de campeones
- **Responsive**: Adaptable a diferentes dispositivos

## Temporadas

- **Temporada Piloto**: Los inicios de la competencia
- **Temporada 1-4**: Temporadas oficiales con evolución del evento
- **Eventos Especiales**: Competencias extraordinarias

## Instalación

```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

## Build para Producción

```bash
npm run build
```

## Deploy para gh pages

```bash
npm run deploy
```
Esto generará los archivos optimizados en la carpeta `dist/`.

## Hosting Gratuito

Puedes hostear esta aplicación gratis en:

- **Vercel**: https://vercel.com
  - Conecta tu repositorio de GitHub
  - Se despliega automáticamente en cada push

- **Netlify**: https://netlify.com
  - Drag & drop o conecta con GitHub
  - Build y deploy automático

- **GitHub Pages**: Usando el comando:
  ```bash
  npm install --save-dev gh-pages
  ```

## Estructura del Proyecto

```
src/
├── App.jsx                 # Componente principal
├── App.css                 # Estilos principales
├── components/
│   ├── SeasonSection.jsx   # Componente de sección de temporada
│   └── SeasonSection.css   # Estilos del componente
├── index.css              # Estilos globales
└── main.jsx               # Punto de entrada
```

## Tecnologías Utilizadas

- **React 18**: Librería de UI
- **Vite**: Build tool rápido y moderno
- **CSS3**: Estilos con animaciones y gradientes

## Personalización

Puedes editar el contenido de las temporadas en el archivo `src/App.jsx`:

```javascript
const seasons = [
  {
    id: 'season1',
    title: 'Temporada 1',
    description: 'Tu descripción aquí',
    champions: ['Campeón 1', 'Campeón 2', 'Campeón 3']
  },
  // ... más temporadas
]
```

## Licencia

© 2026 Bronx 04 Freestyle Championships. All rights reserved.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
