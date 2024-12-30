// === Modal Interactivity Mejorada ===

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('course-detail');
    const courseTitle = document.getElementById('course-title');
    const courseDescription = document.getElementById('course-description');
    
    if (!modal || !courseTitle || !courseDescription) {
        console.error('Error: No se encontraron los elementos necesarios del modal en el DOM.');
        return;
    }

    // Base de datos de cursos con descripciones
    const courseDetails = {
        'Introducción a la Robótica con Tinkercad': 'Aprende los fundamentos de la robótica utilizando Tinkercad para crear y simular circuitos.',
        'Robótica Educativa Sin Arduino': 'Descubre cómo enseñar robótica sin depender de microcontroladores como Arduino.',
        'Fundamentos de Arduino para Profesores': 'Domina los conceptos básicos de Arduino para llevar la robótica a tus clases.',
        'Robótica para Nivel Primario': 'Crea proyectos simples y entretenidos para estudiantes de primaria.',
        'Robótica de Competencia': 'Prepara proyectos para competencias y desarrolla habilidades avanzadas.',
        'Diseño de Placas Educativas (PCBs)': 'Aprende a diseñar y fabricar tus propias placas PCB educativas.',
        'Diseño 3D Enfocado a la Robótica': 'Diseña componentes 3D personalizados para tus robots.',
        'Micro:bit para Profesores': 'Incorpora Micro:bit en tus clases para proyectos interactivos.',
        'Robótica Interactiva': 'Aprende a crear juegos y gráficos controlados con Arduino.',
        'Domótica': 'Automatiza el hogar con sistemas robóticos y Arduino.',
        'Internet de las Cosas (IoT)': 'Conecta dispositivos usando placas ESP para IoT.',
        'Inteligencia Artificial Aplicada a la Robótica Educativa': 'Integra IA en tus proyectos de robótica para llevarlos al siguiente nivel.'
    };

    // Función para mostrar los detalles del curso
    window.showDetail = function(course) {
        if (!courseDetails[course]) {
            console.warn('El curso no tiene detalles disponibles:', course);
        }
        courseTitle.textContent = course;
        courseDescription.textContent = courseDetails[course] || 'Descripción no disponible.';
        modal.classList.add('active'); // Agregar clase activa
        modal.classList.remove('hidden'); // Mostrar modal
    };

    // Función para cerrar el modal
    window.closeDetail = function() {
        modal.classList.remove('active'); // Quitar clase activa
        setTimeout(() => {
            modal.classList.add('hidden'); // Ocultar después de la animación
        }, 300); // Tiempo igual al de la animación CSS
    };

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDetail();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetail();
        }
    });
});

// === Configuración de Partículas ===
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, // Cantidad de partículas
                density: {
                    enable: true,
                    value_area: 800 // Densidad de distribución
                }
            },
            color: {
                value: '#53AC59' // Color de las partículas
            },
            shape: {
                type: 'circle', // Forma: circle, edge, triangle, polygon, star
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 20,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#53AC59',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse' // Opciones: grab, bubble, repulse
                },
                onclick: {
                    enable: true,
                    mode: 'push' // Opciones: push, remove, bubble, repulse
                }
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// === Efecto 3D en las Tarjetas ===

// Seleccionar todas las tarjetas de curso
const cards = document.querySelectorAll('.course');

// Añadir el efecto al mover el mouse sobre las tarjetas
cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // Rango -0.5 a 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5; // Rango -0.5 a 0.5

        card.style.transform = `
            rotateY(${x * 15}deg) 
            rotateX(${-y * 15}deg) 
            scale(1.05)
        `;
    });

    // Reiniciar el efecto al salir el mouse
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });

    // Agregar clase para evitar animaciones bruscas
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});
