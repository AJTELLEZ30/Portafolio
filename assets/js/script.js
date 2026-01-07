// Datos de tus proyectos
const projects = [
    {
        title: "Bot Automatizado",
        description: "Bot multifuncional desarrollado para automatización de tareas y respuestas interactivas.",
        tech: ["JavaScript", "Node.js"],
        link: "https://github.com/AJTELLEZ30/Bot" 
    },
    {
        title: "Food Web",
        description: "Plataforma web moderna para la visualización de menús y servicios de comida.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com/AJTELLEZ30/Food-Web"
    },
    {
        title: "Marvel Explorer",
        description: "Aplicación interactiva que consume la API de Marvel para explorar personajes y cómics.",
        tech: ["React", "API REST", "Axios"],
        link: "https://github.com/AJTELLEZ30/WebSite-Marvel"
    },
    {
        title: "Coffee Shop",
        description: "Landing page estética y responsive diseñada para una tienda de café de especialidad.",
        tech: ["HTML", "CSS", "UI Design"],
        link: "https://github.com/AJTELLEZ30/WebSite-Coffee"
    },
    {
        title: "Netflix Clone",
        description: "Réplica de la interfaz de usuario de Netflix, implementando carruseles y diseño adaptativo.",
        tech: ["React", "CSS", "Frontend"],
        link: "https://github.com/AJTELLEZ30/clon-netflix"
    },
    {
        title: "API Sistema de Ventas",
        description: "Backend robusto desarrollado para la gestión segura de ventas, usuarios e inventario.",
        tech: ["C#", ".NET Core", "SQL Server"],
        link: "https://github.com/AJTELLEZ30/APISistemaVenta"
    },
    {
        title: "Sistema de Inventario Web",
        description: "Interfaz administrativa web para el control, monitoreo y manejo eficiente de stock.",
        tech: ["React", "Dashboard", "Gestión"],
        link: "https://github.com/AJTELLEZ30/WEB_Invetario"
    }
];

// Función para renderizar proyectos
const projectsContainer = document.getElementById('projects-container');

// Limpiamos el contenedor por si acaso
projectsContainer.innerHTML = '';

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    // Crear etiquetas de tecnología con un estilo sutil
    const techTags = project.tech.map(t => 
        `<span style="font-size:0.75rem; margin-right:8px; padding: 2px 8px; background: rgba(148, 163, 184, 0.1); border-radius: 4px; color:#94a3b8;">${t}</span>`
    ).join('');

    card.innerHTML = `
        <h4 style="margin-bottom: 0.5rem; color: #e2e8f0;">${project.title}</h4>
        <p style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; flex-grow: 1;">${project.description}</p>
        <div style="margin-bottom: 1.5rem;">${techTags}</div>
        <a href="${project.link}" target="_blank" class="card-link" style="display: inline-flex; align-items: center; gap: 5px;">
            Ver Código <i class="fas fa-code-branch"></i>
        </a>
    `;
    
    // Añadimos estilos inline para asegurar que las tarjetas tengan la misma altura si el texto varía
    card.style.display = "flex";
    card.style.flexDirection = "column";
    
    projectsContainer.appendChild(card);
});

// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});