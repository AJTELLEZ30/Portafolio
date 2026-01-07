// Datos de tus proyectos
const projects = [
    {
        title: "Bot de Automatización",
        description: "Asistente virtual programado para automatizar tareas repetitivas y gestionar comandos de usuario en tiempo real con lógica condicional.",
        tech: ["JavaScript", "Node.js", "Automation"],
        link: "https://github.com/AJTELLEZ30/Bot",
        demo: null // No tiene demo visual web
    },
    {
        title: "Food Delivery UI",
        description: "Landing page moderna para servicios gastronómicos. Enfocada en un diseño visual atractivo (UI) y navegación intuitiva para el usuario.",
        tech: ["HTML5", "CSS3", "Responsive Design"],
        link: "https://github.com/AJTELLEZ30/Food-Web",
        demo: "https://ornate-arithmetic-0fb911.netlify.app/blogdetails" // Pon aquí el link si tienes uno
    },
    {
        title: "Marvel Explorer",
        description: "Aplicación SPA que consume la API oficial de Marvel. Implementa búsqueda dinámica, paginación y renderizado asíncrono de personajes.",
        tech: ["React", "REST API", "Axios", "Hooks"],
        link: "https://github.com/AJTELLEZ30/WebSite-Marvel",
        demo: "https://grand-pony-15914b.netlify.app/"
    },
    {
        title: "Coffee Brand Site",
        description: "Sitio web corporativo para cafetería de especialidad. Maquetación 'Mobile First' utilizando CSS Grid y Flexbox para una estructura adaptable.",
        tech: ["HTML", "CSS", "Frontend"],
        link: "https://github.com/AJTELLEZ30/WebSite-Coffee",
        demo: "https://joyful-babka-0a2cc6.netlify.app/" // Link agregado
    },
    {
        title: "Netflix Clone UI",
        description: "Réplica pixel-perfect de la interfaz de Netflix. Demuestra dominio avanzado de maquetación en React, componentes reutilizables y manejo de estado.",
        tech: ["React", "CSS Modules", "UI/UX"],
        link: "https://github.com/AJTELLEZ30/clon-netflix",
        demo: "https://thriving-tapioca-bd8837.netlify.app/" // Link agregado
    },
    {
        title: "API Sistema de Ventas",
        description: "Backend robusto RESTful desarrollado en .NET. Gestiona autenticación, transacciones complejas y lógica de negocio con SQL Server.",
        tech: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
        link: "https://github.com/AJTELLEZ30/APISistemaVenta",
        demo: null
    },
    {
        title: "Dashboard de Inventario",
        description: "Panel administrativo Frontend para gestión de stock. Permite realizar operaciones CRUD completas y visualizar métricas de productos.",
        tech: ["React", "State Management", "Admin UI"],
        link: "https://github.com/AJTELLEZ30/WEB_Invetario",
        demo: null
    }
];

// Función para renderizar proyectos
const projectsContainer = document.getElementById('projects-container');

projectsContainer.innerHTML = '';

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    // Generar tags de tecnología
    const techTags = project.tech.map(t => 
        `<span style="font-size:0.75rem; margin-right:6px; margin-bottom: 6px; display:inline-block; padding: 4px 10px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 15px; color:#38bdf8;">${t}</span>`
    ).join('');

    // Lógica para mostrar botón de Demo solo si existe el link
    const demoButton = project.demo 
        ? `<a href="${project.demo}" target="_blank" class="btn-card btn-demo">
             <i class="fas fa-eye"></i> Demo Live
           </a>` 
        : '';

    card.innerHTML = `
        <h4 style="margin-bottom: 0.8rem; color: #f1f5f9; font-size: 1.3rem;">${project.title}</h4>
        <p style="font-size: 0.95rem; color: #94a3b8; margin-bottom: 1.2rem; flex-grow: 1; line-height: 1.5;">${project.description}</p>
        <div style="margin-bottom: 1.5rem;">${techTags}</div>
        
        <div class="card-actions">
            <a href="${project.link}" target="_blank" class="btn-card btn-code">
                <i class="fas fa-code-branch"></i> Código
            </a>
            ${demoButton}
        </div>
    `;
    
    // Asegurar estilos de tarjeta flexible
    card.style.display = "flex";
    card.style.flexDirection = "column";
    
    projectsContainer.appendChild(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});