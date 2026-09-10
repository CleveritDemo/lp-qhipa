# Qhipa Landing Page

Landing page para **Qhipa by Credicorp** — orquestación del ciclo completo de entrega de software con agentes especializados.

## Upstream sync

Port desde `github.com/CleveritDemo/sanborn-ai-lp` (clon local `~/Sources/sandborn-landing/sanborn-ai-lp`).

| Campo | Valor |
|-------|-------|
| Upstream commit | `0889498` (`feat: rebrand Rimay to Khipa + mobile optimizations`) |
| Platform release | `v1.4.0` (descargas en `Downloads.tsx`) |
| Deltas permanentes | `siteUrl` credicorp-internal, `package.json` name `rimay-landing`, `WhyRimay.tsx`, sin `deploy.yml` del origen |

Sin commits nuevos en upstream desde el último sync: el port valida paridad de diseño y deja descargas alineadas con la release publicada.

## Demo

[https://animated-bassoon-l6ooglq.pages.github.io/](https://animated-bassoon-l6ooglq.pages.github.io/)

## Tech Stack

- **Framework:** Next.js 16.3.1
- **UI:** React 19 + Tailwind CSS 4
- **Lenguaje:** TypeScript
- **Deploy:** GitHub Pages (Static Export)

## Caracteristicas

- Diseno light mode con paleta de colores personalizada (#10BDB3)
- Fuente Roboto
- Animaciones fade-in al hacer scroll (Intersection Observer)
- Terminal animada con efecto de escritura
- Cards con aparicion secuencial animada
- Totalmente responsive
- Exportacion estatica para GitHub Pages

## Secciones

| Componente | Descripcion |
|------------|-------------|
| `Navbar` | Navegacion sticky con logo |
| `Hero` | Seccion principal con CTA |
| `Infrastructure` | Infraestructura de la plataforma |
| `Features` | Caracteristicas principales con terminal animada |
| `GravityClient` | Cliente Gravity |
| `UnifiedContext` | Contexto unificado |
| `Observability` | Observabilidad y monitoreo |
| `OpenArchitecture` | Arquitectura abierta con iconos |
| `HowItWorks` | Como funciona |
| `UseCases` | Casos de uso |
| `Scale` | Escalabilidad |
| `Teams` | Equipos |
| `WhyRimay` | Por que Qhipa |
| `QhipaDemo` | Demo interactivo del cliente |
| `Downloads` | Instaladores macOS, Windows y Linux |
| `Architecture` | Arquitectura tecnica |
| `ClosingCTA` | Call to action final |
| `Footer` | Pie de pagina con logo |

## Instalacion

```bash
# Clonar repositorio
git clone https://github.com/credicorp-internal/brd-rimay-platform.git
cd brd-rimay-platform/apps/rimay-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de produccion (genera /out)
npm run start    # Servidor de produccion
npm run lint     # Linter
```

## Deploy

El proyecto esta configurado para deploy automatico en GitHub Pages mediante GitHub Actions.

El workflow vive en la raiz del monorepo, en `.github/workflows/pages-landing.yml`, y se dispara en cada push a `main` que toque `apps/rimay-landing/**`. El workflow:
1. Instala dependencias
2. Genera build estatico
3. Despliega a GitHub Pages

### Configuracion manual de GitHub Pages

Estos pasos los debe hacer una persona con permisos de admin del repo; sin ellos el workflow falla al desplegar.

1. Ir a Settings > Pages
2. En "Build and deployment", elegir "GitHub Actions" como source
3. Al ser un repo internal, GitHub asigna una URL privada aleatoria en `*.pages.github.io` y sirve el sitio en la raiz. No hay subruta de project page, asi que `PAGES_BASE_PATH` va vacio.

## Estructura del Proyecto

```
apps/rimay-landing/
├── public/
│   └── images/
│       ├── logotipo-qhipa.svg
│       └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globales y paleta de colores
│   │   ├── layout.tsx      # Layout principal con Roboto font
│   │   └── page.tsx        # Pagina principal
│   └── components/
│       ├── FadeIn.tsx      # Componente de animacion
│       └── ...             # Secciones de la landing
├── next.config.ts          # Configuracion de Next.js
└── package.json
```

## Paleta de Colores

```css
--color-primary-50: #ECFDFB
--color-primary-100: #CFF9F5
--color-primary-200: #A0F1EA
--color-primary-300: #63E4DB
--color-primary-400: #2FD0C5  /* Color principal */
--color-primary-500: #10BDB3
--color-primary-600: #0E9E96
--color-primary-700: #0E7671
--color-primary-800: #0F5F5B
--color-primary-900: #10504D
```

## Licencia

Proyecto privado - Credicorp / Cleverit

## Despliegue

El sitio se publica en la URL privada `https://animated-bassoon-l6ooglq.pages.github.io/` con el workflow `.github/workflows/pages-landing.yml` (raiz del monorepo), en cada push a `main` que toque `apps/rimay-landing/**`, usando el export estatico de Next (`output: "export"`).

El sitio se sirve en la raiz del dominio, asi que `PAGES_BASE_PATH` va vacio y el build local es directo:

```bash
npm run build
```

Solo hay que setear `PAGES_BASE_PATH=/brd-rimay-platform` si el repo pasa a publico y se publica como project page bajo esa subruta.

`public/.nojekyll` es obligatorio: sin el, Jekyll descarta el directorio `_next/` por empezar con guion bajo y el sitio queda sin CSS ni JS.

Los assets absolutos siguen pasando por el helper `asset()` de `src/lib/basePath.ts`: con `PAGES_BASE_PATH` vacio no agrega prefijo, y deja el sitio listo para mudarse a una subruta sin tocar componentes. Los enlaces internos son ancla (`#seccion`) por la misma razon.

Si algun dia se pasa a dominio propio, hay que volver a crear `public/CNAME` y dejar `PAGES_BASE_PATH` vacio.
