# 🏠 Kremas Real State — Entrega

Proyecto desarrollado en **React + Vite** como parte de una entrega académica o prototipo para un portal inmobiliario moderno.

## 📋 Descripción

Kremas Real State es una aplicación web enfocada en la visualización y gestión de propiedades.  
Permite explorar listados, ver detalles individuales, y gestionar una lista de favoritos.  
Cuenta con una interfaz limpia, componentes reutilizables y un flujo de navegación optimizado mediante **React Router**.

---

## 🚀 Tecnologías principales

- ⚛️ **React** — Librería base para la interfaz.
- ⚡ **Vite** — Herramienta de desarrollo y bundler ultra rápido.
- 🧭 **React Router DOM** — Enrutamiento entre páginas.
- 🎨 **CSS nativo** — Estilos organizados por componente/página.
- 🔧 **ESLint** — Reglas de linting para mantener código limpio.
- 🧩 **React Icons** — Iconografía vectorial moderna.

---

## 📁 Estructura del proyecto

```bash
Kremas-Real-State---Entrega/
├── src/
│   ├── components/
│   │   ├── FAQ.jsx
│   │   ├── FavouriteToggle.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── InmSearch.jsx
│   │   ├── Layout.jsx
│   │   ├── NavLocal.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── Rating.jsx
│   │   └── scrollArriba.jsx
│   ├── context/
│   │   └── favoritos.jsx
│   ├── data/
│   │   └── properties.js
│   ├── hooks/
│   │   ├── useProperties.js
│   │   └── useSearchForm.js
│   ├── pages/
│   │   ├── ContactPage.jsx
│   │   ├── FavoritosPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ListPage.jsx
│   │   └── PropiedadPage.jsx
│   ├── reducers/
│   │   └── propertiesReducer.js
│   ├── styles/
│   │   ├── ContactPage.css
│   │   ├── FAQ.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── Layout.css
│   │   ├── ListPage.css
│   │   ├── PropertyCard.css
│   │   ├── PropertyPage.css
│   │   ├── favoritos.css
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── index.html
└── vite.config.js

```



### ⚙️ Instalación y uso
1. Clonar Repositorio
   
```bash
git clone https://github.com/MSS1410/Kremas-Real-State---Entrega.git
cd Kremas-Real-State---Entrega

```
2.Instalar Dependencias
```bash
npm install
```

3.Iniciar entorno de desarrollo
```bash
npm un dev
```
- Esto iniciará el servidor de Vite en http://localhost:5173

4.Crear un built de producción

```bash
npm run build
```


### 🧠 Hooks personalizados

. Hooks:
  - useProperties.js - Gestión de Propiedades
  - useSearchForm.js - Control del Formulario de búsqueda.

### 🧱 Componentes Principales

- Property Card
- FAQ
- Header
- Footer


### 🎨 Estilos

Cada página y componente principal tiene su propio archivo CSS dentro de src/styles/.
El archivo global.css define estilos generales y resets.


### 🧰 Dependencias principales
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "react-icons": "^4.x",
  "vite": "^5.x"
}
```
Dependencias desarrollo:

```json

{
  "@vitejs/plugin-react": "^4.x",
  "eslint": "^9.x",
  "@eslint/js": "^9.x"
}

```
   
