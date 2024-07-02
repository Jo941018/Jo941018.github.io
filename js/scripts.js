document.addEventListener('DOMContentLoaded', function() {
    const langSwitch = document.getElementById('toggle-lang-btn');
    const themeButton = document.getElementById('toggle-theme-btn');
    let isSpanish = true;

    langSwitch.addEventListener('change', function() {
        const langElements = document.querySelectorAll('[data-lang]');
        langElements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (langSwitch.checked) {
                element.textContent = langEN[key];
            } else {
                element.textContent = langES[key];
            }
        });
    });

    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

const langES = {
    profileDesc: 'Manejo de base de datos. Gran rendimiento bajo presión.',
    expDesc: `Química Marél / Jefe de ERP y Desarrollo
Enero 2021 - Actualmente
- Encargado de implementación Odoo ERP
- Control de procesos
- Encargado de analizar y autorizar desarrollos
- Implementación de tableros inteligentes para análisis de datos
- Desarrollo e implementación de sistema administrativo a la medida
- Revisión de procesos en la empresa para su desarrollo en el software
- Capacitación de personal en software
- Manejo de datos y creación de queries para distintas áreas
Química Marél / Encargado de Soporte Técnico
Junio 2018 - Enero 2021
- Encargado de mantenimiento preventivo y correctivo de equipos de la empresa locales y foráneos.
- Seguimiento de reportes por asignación
- Cotización de equipos de computo y hardware
- Procedimientos ISO 9000:2015
- Apoyo en inventario Mensual
- Soporte a los usuarios de la planta
- Reparación de equipos
- Cableado estructurado e Instalación de CCTV
- Capacitación a usuarios`,
    eduDesc: `Data Scientist / Ingeniería en Ciencia de Datos
Ingenieria (Universidad del Valle de México)
- Master En Coding - Fullstack DEV.F (Diploma)
- Curso PHP (Diploma)
- Curso Básico de Seguridad Informática para Empresas. (Diploma)
- Curso Básico de Manejo de Datos en Laravel con Eloquent ORM. (Diploma)
- Certificación Gaming Systems por Intel (certificado)`,
    skillsDesc: `Manejo de bases de datos
Desarrollo web con PHP, JavaScript, Ajax, Python
Soporte técnico y al usuario
Diseño web`,
    languages: 'Idiomas',
    toggleLang: 'EN - ES',
    toggleTheme: 'Cambiar Tema'
};

const langEN = {
    profileDesc: 'Database management. High performance under pressure.',
    expDesc: `Química Marél / ERP Manager and Development Lead
January 2021 - Present
- Responsible for Odoo ERP implementation
- Process control
- Responsible for analyzing and authorizing developments
- Implementation of smart boards for data analysis
- Development and implementation of customized administrative system
- Review of processes in the company for software development
- Software training for personnel
- Data handling and query creation for various areas
Química Marél / Technical Support Manager
June 2018 - January 2021
- Responsible for preventive and corrective maintenance of local and foreign company equipment.
- Follow-up of reports by assignment
- Quotation of computer equipment and hardware
- ISO 9000:2015 Procedures
- Monthly inventory support
- Support for plant users
- Equipment repair
- Structured cabling and CCTV installation
- User training`,
    eduDesc: `Data Scientist / Data Science Engineering
Currently pursuing at UVM (Universidad del Valle de México)
- Master's Degree in Coding - Fullstack DEV.F (Diploma)
- PHP Course (Diploma)
- Basic Course in IT Security for Companies (Diploma)
- Basic Course in Data Management in Laravel with Eloquent ORM (Diploma)
- Gaming Systems Certification by Intel (Certificate)`,
    skillsDesc: `Database management
Web development with PHP, JavaScript, Ajax, Python
Technical support and user support
Web design`,
    languages: 'Languages',
    toggleLang: 'ES - EN',
    toggleTheme: 'Change Theme'
};
