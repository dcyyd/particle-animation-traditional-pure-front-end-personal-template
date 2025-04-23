<div align="center">
    <h1>🚀 Personal Homepage</h1>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS"></a>
    <a href="https://greensock.com/gsap/"><img src="https://img.shields.io/badge/-GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP"></a>
    <!-- Add MIT License icon -->
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License"></a>
</div>

> A lightweight, responsive personal homepage based on a pure front - end technology stack, integrating traditional design aesthetics with dynamic particle interaction effects. It is suitable for online portfolios/resume displays of designers, developers, or freelancers.

## Features

- 🎨 **Theme Switching**: Supports one - click switching between dark and light themes, with smooth transitions implemented using CSS variables.
- 📱 **Responsive Design**: Adopts a mobile - first strategy and is perfectly adaptable to various screen sizes.
- ✨ **Visual Effects**: Includes interactive elements such as particle background animations, 3D card flips, and typewriter effects.
- 📊 **Data Visualization**: Dynamically displays professional skill levels through skill progress bars.
- 🎯 **Project Showcase**: Features 3D project card displays with category filtering.
- 📝 **Form Validation**: Provides complete front - end validation for the contact form.
- ⚡ **PWA Support**: Can be installed as a Progressive Web App.

## Technology Stack

### Core Frameworks
- **HTML5**: Semantic tags for structured content.
- **CSS3**: CSS variables, Flexbox/Grid layouts, and animation transitions.
- **JavaScript**: ES6+ syntax and modular development.

### Main Libraries/Tools
- **Tailwind CSS**: A utility - first CSS framework.
- **GSAP**: A high - performance animation library (ScrollTrigger/ScrollToPlugin).
- **Particles.js**: Particle background effects.
- **Typed.js**: Typewriter animation effects.
- **Three.js**: A 3D rendering engine (for advanced visual effects).

### Build and Optimization
- **PWA Architecture**: Offline caching and add - to - home - screen functionality.
- **SEO Optimization**: Complete meta - tags and structured data.
- **Performance Optimization**: Lazy loading and resource compression.

## Theme System

The project uses CSS variables to manage theme styles. The main variables include:

```css
:root {
    /* Primary colors */
    --primary: #6366f1;
    --secondary: #8b5cf6;
    
    /* Background colors */
    --bg-dark: #0f172a;
    --bg-light: #f8fafc;
    
    /* Text colors */
    --text-dark: #e2e8f0;
    --text-light: #1e293b;
    
    /* Special effects */
    --glass: rgba(255, 255, 255, 0.1);
    --backdrop-blur: 10px;
}
```

## File Structure

```markdown
particle-animation-traditional-pure-front-end-personal-template/
├── README.md           # Project description file
├── copyright.html      # Copyright statement page
├── index.html          # Project homepage
├── particles.json      # Particle effect configuration file
├── privacy-policy.html # Privacy policy page
├── rss.xml             # RSS feed file
├── sitemap.xml         # Website sitemap file
└── assets/             # Static resource directory
    ├── css/            # Stores CSS style files
    ├── fonts/          # Stores font files
    ├── images/         # Stores image resources
    └── js/             # Stores JavaScript scripts
```

## Development Guide

### Local Run
```bash
# Clone the repository
git clone https://gitee.com/fy_group/particle-animation-traditional-pure-front-end-personal-template.git
# Enter the project directory
cd home
# No need to build, just open index.html
start index.html
```

### Customize the Theme
1. Modify the CSS variable values in `styles.css`.
2. Adjust the configuration in `particles.json` to change the particle effects.
3. Update the PWA metadata in `manifest.json`.

### Add New Features
1. **Add a Page**: Create a new HTML file and update the navigation menu.
2. **Expand Multi - language Support**: Add language packs in JS and implement the switching logic.
3. **Add Animations**: Use GSAP or Three.js to create new effects.

## License
This project follows the open and permissive MIT License. This license gives you great freedom to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this project. You only need to include the copyright notice and the license notice in all copies or substantial portions.

To view the full license text, please click the [LICENSE](LICENSE) file.

## Best Practices
- Use semantic HTML5 tags.
- Follow the BEM naming convention.
- Adopt a mobile - first responsive design.
- Provide a progressively enhanced user experience.
- Support accessible access.