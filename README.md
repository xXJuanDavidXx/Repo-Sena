# Proyecto Web - Blog Temático con Portafolio Integrado

## Informe Técnico de Desarrollo

### Información del Proyecto
- **Nombre del Proyecto**: Portal Web con Blog Temático
- **Desarrollador**: David Jaramillo
- **Institución**: SENA (Servicio Nacional de Aprendizaje)
- **Fecha**: 2025
- **Repositorio**: [github.com/xXJuanDavidXx/Repo-Sena](https://github.com/xXJuanDavidXx/Repo-Sena.git)

---

## 1. Descripción General

Este proyecto consiste en el desarrollo de una aplicación web frontend que integra un portafolio personal con un sistema de blog temático especializado en contenido sobre ocultismo y temas esotéricos. La aplicación está construida utilizando tecnologías web estándar y siguiendo las mejores prácticas de desarrollo frontend.

## 2. Objetivos del Proyecto

### 2.1 Objetivo Principal
Desarrollar una plataforma web que permita la publicación y visualización de contenido blog especializado, integrado con un portafolio profesional.

### 2.2 Objetivos Específicos
- Implementar una interfaz de usuario responsiva y moderna
- Crear un sistema de navegación intuitivo entre secciones
- Desarrollar un sistema de autenticación básico
- Optimizar el rendimiento y la experiencia de usuario
- Demostrar competencias en desarrollo web frontend

## 3. Análisis Técnico

### 3.1 Arquitectura del Sistema

```
┌─────────────────────────────────────────┐
│              Frontend Layer             │
├─────────────────────────────────────────┤
│  index.html  │  blog.html  │ login.html │
├─────────────────────────────────────────┤
│          Static Resources               │
├─────────────────────────────────────────┤
│    CSS       │   JavaScript │   Images  │
└─────────────────────────────────────────┘
```

### 3.2 Stack Tecnológico

| Componente | Tecnología | Versión | Propósito |
|------------|------------|---------|-----------|
| **Markup** | HTML5 | - | Estructura semántica |
| **Estilos** | CSS3 | - | Presentación visual |
| **Framework CSS** | Bootstrap | 5.1.3 | Sistema de grid y componentes |
| **JavaScript** | Vanilla JS | ES6+ | Interactividad |
| **Iconografía** | Font Awesome | 5.15.4 | Sistema de iconos |
| **Sintaxis** | Prism.js | 1.29.0 | Resaltado de código |
| **Tipografía** | Google Fonts | - | Fira Code |

### 3.3 Estructura de Archivos

```
proyecto/
├── index.html              # Página principal (portafolio)
├── blog.html               # Sistema de blog
├── login.html              # Panel de autenticación
├── static/                 # Recursos estáticos
│   ├── main.css           # Estilos principales
│   ├── blog.css           # Estilos del blog
│   ├── login.css          # Estilos del login
│   ├── scripts.js         # Lógica JavaScript
│   ├── favicon.ico        # Icono del sitio
│   ├── blog/              # Imágenes del blog
│   │   ├── lucifer.jpg
│   │   ├── baphomet.jpg
│   │   ├── HECATE.png
│   │   └── ...
│   └── portfolio/         # Recursos del portafolio
│       ├── bg.webp
│       ├── yo.webp
│       └── cv.pdf
└── media/                 # Archivos multimedia adicionales
    ├── blog/images/
    └── portfolio/images/
```

## 4. Especificaciones Técnicas

### 4.1 Páginas Principales

#### 4.1.1 index.html - Portafolio Personal
- **Propósito**: Presentación profesional del desarrollador
- **Secciones**:
  - Hero Section con información personal
  - Habilidades técnicas (Backend, Ciberseguridad, SysAdmin)
  - Proyectos destacados con enlaces a GitHub
  - Formulario de contacto
- **Características técnicas**:
  - Diseño responsivo con Bootstrap Grid System
  - Navegación fixed con smooth scrolling
  - Optimización de imágenes (WebP)
  - Integración con redes sociales

#### 4.1.2 blog.html - Sistema de Blog
- **Propósito**: Plataforma para publicación de contenido temático
- **Funcionalidades**:
  - Grid de posts con preview
  - Sistema modal para lectura completa
  - Navegación entre el portafolio y blog
- **Posts implementados**:
  1. "Lucifer" - Contenido poético/filosófico
  2. "Left Hand Path" - Artículo sobre filosofía esotérica
  3. "Liber Noctis Hekatae" - Contenido sobre mitología
- **Características técnicas**:
  - Bootstrap Modals para expansión de contenido
  - Diseño card-based
  - Responsive images
  - CSS Grid para layout

#### 4.1.3 login.html - Sistema de Autenticación
- **Propósito**: Panel de acceso para administración
- **Características**:
  - Formulario de login simple
  - Validación client-side
  - Diseño minimalista centrado
  - Manejo de errores básico

### 4.2 Componentes CSS

#### 4.2.1 Sistema de Colores
```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --dark-bg: #000000;
  --light-text: #ffffff;
}
```

#### 4.2.2 Breakpoints Responsivos
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1200px
- **Large Desktop**: >1200px

### 4.3 Optimizaciones Implementadas

#### 4.3.1 Performance
- Imágenes optimizadas en formato WebP
- CDN para librerías externas
- CSS y JavaScript minificados
- Lazy loading implícito

#### 4.3.2 SEO
- Estructura HTML5 semántica
- Meta tags descriptivos
- Alt texts en imágenes
- Título único por página

#### 4.3.3 Accesibilidad
- Contraste adecuado de colores
- Navegación por teclado
- ARIA labels donde corresponde
- Texto alternativo en imágenes

## 5. Funcionalidades Implementadas

### 5.1 Sistema de Navegación
- Navbar responsive con Bootstrap
- Enlaces entre páginas
- Smooth scrolling en página principal
- Toggle menu para dispositivos móviles

### 5.2 Sistema Modal (Blog)
```javascript
// Implementación básica de modales Bootstrap
$('#postModal').modal('show');
```

### 5.3 Formularios
- Formulario de contacto (frontend only)
- Formulario de login con validación básica
- Campos requeridos y validación HTML5

## 6. Configuración

### 6.1 Servidor Web Recomendado
```nginx
python -m http.server
```


### 7 Pruebas Realizadas

**Pendiente...**