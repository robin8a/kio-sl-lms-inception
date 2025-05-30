<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Sostenible Estratégico | BIOGINTEC (Dark Mode)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Apply Inter font globally */
        body {
            font-family: 'Inter', sans-serif;
            /* Color de fondo base - Dark Gray */
            background-color: #1f2937; /* Tailwind gray-800 */
            /* Color de texto principal - Light Gray */
            color: #d1d5db; /* Tailwind gray-300 */
        }
        /* Simple scroll animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0; /* Start hidden */
        }
        /* Custom styles for emphasis - Usando el color dorado (contrasta bien) */
        .highlight {
            color: #B8860B; /* DarkGoldenrod */
        }
        /* Estilo botón principal - Verde Oliva (contrasta bien), texto blanco */
        .cta-button {
            @apply inline-block bg-[#6B8E23] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#55701C]; /* OliveDrab y más oscuro en hover */
        }
         /* Estilo botón secundario - Gris medio con texto Oliva */
         .cta-button-secondary {
            @apply inline-block bg-gray-600 text-gray-100 font-semibold py-3 px-8 rounded-lg shadow-sm hover:bg-gray-500 transition duration-300 ease-in-out; /* Ajustado para dark mode */
        }
        /* Color de fondo alternativo para secciones - Gris más oscuro */
        .section-bg-darker {
             background-color: #111827; /* Tailwind gray-900 */
        }
         /* Color de fondo para tarjetas/contenedores internos - Gris medio */
        .container-bg-medium {
             background-color: #374151; /* Tailwind gray-700 */
        }
        /* Color de texto principal (Claro) */
        .text-main {
            color: #f3f4f6; /* Tailwind gray-100 */
        }
         /* Color de texto secundario (Gris claro) */
        .text-secondary {
            color: #9ca3af; /* Tailwind gray-400 */
        }
         /* Color primario (Oliva) para texto - usar con cuidado sobre fondos oscuros */
        .text-primary {
             color: #A3CC4F; /* Oliva aclarado para mejor contraste */
             /* Alternativa: Usar dorado #B8860B si el oliva no contrasta bien */
        }
         /* Color de acento (Dorado) para texto e iconos */
        .text-accent {
            color: #B8860B; /* DarkGoldenrod */
        }
         /* Borde de acento (Dorado) */
        .border-accent {
            border-color: #B8860B; /* DarkGoldenrod */
        }
        /* Fondo primario (Oliva) - Usado en CTA final */
        .bg-primary {
            background-color: #6B8E23; /* OliveDrab */
        }
         /* Fondo de cita (Gris medio) */
        .bg-quote {
             background-color: #374151; /* Tailwind gray-700 */
        }
         /* Texto de cita (Claro) */
        .text-quote {
             color: #e5e7eb; /* gray-200 */
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/lucide-static@latest/dist/lucide.min.js"></script>
</head>
<body class="text-gray-300"> {/* Default text color set */}

    {/* Header - Fondo gris oscuro */}
    <header class="bg-[#1f2937] shadow-md sticky top-0 z-50 border-b border-gray-700">
        <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
            {/* Logo de la empresa */}
            <div>
                {/* Placeholder - Asegurarse que el texto sea visible o usar logo con fondo transparente */}
                <img src="https://placehold.co/200x50/FFFFFF/1F2937?text=BIOGINTEC+Logo"
                     alt="Logo de BIOGINTEC - Soluciones Ambientales"
                     class="h-10 md:h-12 w-auto rounded">
                     {/* IMPORTANTE: Reemplaza la URL de arriba (src) con la URL real de tu logo (preferiblemente SVG o PNG transparente) */}
            </div>
            {/* Botón de contacto (Oliva) */}
            <div>
                <a href="#contacto" class="cta-button text-sm">Contactar</a>
            </div>
        </nav>
    </header>

    <main>
        {/* Hero Section - Fondo gris más oscuro */}
        <section class="section-bg-darker pt-20 md:pt-32 pb-20 md:pb-32 text-center">
            <div class="container mx-auto px-6">
                 {/* Título principal claro */}
                 <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Desarrollo Sostenible Estratégico
                </h1>
                 {/* Subtítulo secundario claro con highlight dorado */}
                 <p class="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
                    Convirtiendo <span class="highlight font-semibold">Retos</span> Ambientales y Sociales en <span class="highlight font-semibold">Oportunidades Medibles</span> para tu Negocio.
                </p>
                 {/* Botón CTA principal (Oliva) */}
                 <a href="#diagnostico" class="cta-button text-lg">Impulsa tu Sostenibilidad</a>
            </div>
        </section>

        {/* Section 1: ¿Por qué actuar ahora? - Fondo gris base (body) */}
        <section id="porque" class="py-16 md:py-24 fade-in-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    {/* Título claro */}
                    <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">¿Por Qué Actuar Ahora?</h2>
                    {/* Texto secundario con resalte primario (Oliva aclarado) */}
                    <p class="text-lg text-secondary max-w-2xl mx-auto">La Sostenibilidad como <span class="font-semibold text-primary">Eje Central</span> de tu Estrategia.</p>
                </div>
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         {/* Título claro */}
                        <h3 class="text-2xl font-semibold text-main mb-4">Objetivo Central: Integración y Valor</h3>
                         {/* Párrafos secundarios claros con highlight dorado */}
                        <p class="text-secondary mb-4 leading-relaxed">
                            En un mundo que demanda responsabilidad, operar sin una estrategia de sostenibilidad clara es actuar <span class="font-semibold">"a ciegas"</span> ante riesgos y oportunidades cruciales. Nuestro objetivo es integrar la sostenibilidad en tu núcleo para generar <span class="highlight font-semibold">valor medible</span> y resiliencia a largo plazo.
                        </p>
                        <p class="text-secondary italic mb-4">
                            "Si no puedes medirlo, no puedes mejorarlo." – La sostenibilidad no es la excepción.
                        </p>
                         {/* Cita con fondo gris medio, borde dorado y texto claro */}
                         <blockquote class="border-l-4 border-accent pl-4 py-2 my-4 bg-quote text-quote">
                           ¿Gestionarías tu negocio sin indicadores financieros? ¿Por qué hacerlo sin KPIs de sostenibilidad?
                        </blockquote>
                    </div>
                    <div class="text-center">
                        {/* SVG - ajustado color para visibilidad */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 md:h-64 md:w-64 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243 4.243" />
                           <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                        <p class="mt-4 text-sm text-gray-500">[Imagen ilustrativa: Gráfico de crecimiento sostenible]</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Nuestras Soluciones - Fondo gris más oscuro */}
        <section id="soluciones" class="py-16 md:py-24 section-bg-darker fade-in-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                     {/* Título claro */}
                    <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">Nuestras Soluciones</h2>
                     {/* Texto secundario con resalte primario (Oliva aclarado) */}
                    <p class="text-lg text-secondary max-w-2xl mx-auto">De la Estrategia a la <span class="font-semibold text-primary">Acción Medible</span>.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Tarjeta de Solución - Fondo gris medio */}
                    <div class="container-bg-medium p-6 rounded-lg shadow-lg border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                         {/* Icono dorado */}
                         <i data-lucide="clipboard-list" class="w-10 h-10 text-accent mb-4"></i>
                         {/* Título claro */}
                        <h3 class="text-xl font-semibold text-main mb-2">Diagnóstico y Estrategia</h3>
                         {/* Texto secundario */}
                        <p class="text-secondary text-sm">Identificamos áreas clave y definimos una hoja de ruta alineada con tus objetivos.</p>
                    </div>
                     {/* Repetir estructura para otras tarjetas */}
                    <div class="container-bg-medium p-6 rounded-lg shadow-lg border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                         <i data-lucide="settings-2" class="w-10 h-10 text-accent mb-4"></i>
                         <h3 class="text-xl font-semibold text-main mb-2">Implementación Práctica</h3>
                         <p class="text-secondary text-sm">Adoptamos soluciones eficientes en energía, agua, residuos y cadena de valor.</p>
                    </div>
                    <div class="container-bg-medium p-6 rounded-lg shadow-lg border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                         <i data-lucide="bar-chart-3" class="w-10 h-10 text-accent mb-4"></i>
                         <h3 class="text-xl font-semibold text-main mb-2">Medición y KPIs</h3>
                         <p class="text-secondary text-sm">Establecemos KPIs de sostenibilidad para seguimiento riguroso y transparente.</p>
                    </div>
                    <div class="container-bg-medium p-6 rounded-lg shadow-lg border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                         <i data-lucide="trending-up" class="w-10 h-10 text-accent mb-4"></i>
                         <h3 class="text-xl font-semibold text-main mb-2">Optimización Continua</h3>
                         <p class="text-secondary text-sm">Analizamos datos para identificar mejoras y asegurar un impacto creciente.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: Metodología SMART - Fondo gris base (body) */}
        <section id="metodologia" class="py-16 md:py-24 fade-in-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                     {/* Título claro */}
                    <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">Nuestra Metodología</h2>
                     {/* Texto secundario con resalte primario (Oliva aclarado) */}
                    <p class="text-lg text-secondary max-w-2xl mx-auto">Enfoque <span class="font-semibold text-primary">SMART</span> para la Sostenibilidad.</p>
                </div>
                 {/* Contenedor SMART - Fondo gris medio */}
                <div class="max-w-4xl mx-auto container-bg-medium p-8 rounded-lg shadow-lg border border-gray-600">
                     {/* Texto secundario */}
                    <p class="text-center text-secondary mb-8">Aplicamos una metodología rigurosa para asegurar que tus esfuerzos en sostenibilidad sean efectivos y generen resultados tangibles. Tus objetivos serán:</p>
                    <ul class="space-y-4">
                        {/* Item SMART */}
                        <li class="flex items-start">
                             {/* Icono check con color primario (Oliva aclarado) */}
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"></i>
                             {/* Texto secundario con strong primario (Oliva aclarado) */}
                            <div class="text-secondary"><strong class="text-primary">Específicos:</strong> Claramente definidos y enfocados.</div>
                        </li>
                         {/* Repetir para otros items */}
                        <li class="flex items-start">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"></i>
                            <div class="text-secondary"><strong class="text-primary">Medibles:</strong> Con datos cuantificables y KPIs claros.</div>
                        </li>
                        <li class="flex items-start">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"></i>
                            <div class="text-secondary"><strong class="text-primary">Alcanzables:</strong> Realistas con los recursos disponibles.</div>
                        </li>
                        <li class="flex items-start">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"></i>
                            <div class="text-secondary"><strong class="text-primary">Relevantes:</strong> Alineados a tus objetivos estratégicos y de impacto.</div>
                        </li>
                        <li class="flex items-start">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"></i>
                            <div class="text-secondary"><strong class="text-primary">Temporales:</strong> Con plazos definidos para asegurar la ejecución.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

         {/* Section 4: Why Us? - Fondo gris más oscuro */}
        <section id="porque-nosotros" class="py-16 md:py-24 section-bg-darker fade-in-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                     {/* Título claro */}
                    <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">¿Por Qué Elegirnos?</h2>
                      {/* Texto secundario */}
                     <p class="text-lg text-secondary max-w-2xl mx-auto">Tu Socio Estratégico en Sostenibilidad.</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {/* Feature */}
                    <div class="p-6">
                          {/* Icono dorado */}
                         <i data-lucide="target" class="w-12 h-12 text-accent mb-4 mx-auto"></i>
                          {/* Título claro */}
                        <h3 class="text-xl font-semibold text-main mb-2">Resultados Tangibles</h3>
                          {/* Texto secundario */}
                        <p class="text-secondary text-sm">Nos enfocamos en métricas y valor cuantificable.</p>
                    </div>
                    {/* Repetir para otros features */}
                     <div class="p-6">
                          <i data-lucide="brain-circuit" class="w-12 h-12 text-accent mb-4 mx-auto"></i>
                          <h3 class="text-xl font-semibold text-main mb-2">Visión Estratégica</h3>
                          <p class="text-secondary text-sm">Integramos sostenibilidad y negocio para un crecimiento resiliente.</p>
                    </div>
                     <div class="p-6">
                           <i data-lucide="verified" class="w-12 h-12 text-accent mb-4 mx-auto"></i>
                           <h3 class="text-xl font-semibold text-main mb-2">Metodología Comprobada</h3>
                           <p class="text-secondary text-sm">Usamos enfoques basados en datos (KPIs, SMART).</p>
                    </div>
                     <div class="p-6">
                           <i data-lucide="users" class="w-12 h-12 text-accent mb-4 mx-auto"></i>
                           <h3 class="text-xl font-semibold text-main mb-2">Expertise Adaptado</h3>
                           <p class="text-secondary text-sm">Soluciones a medida para las particularidades de tu sector.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5: Final CTA - Fondo Primario (Oliva) */}
        <section id="diagnostico" class="py-20 md:py-32 bg-primary text-white text-center fade-in-section">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">¡Manos a la Obra!</h2>
                 {/* Texto blanco */}
                <p class="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                    Convierte tus objetivos de sostenibilidad en una <span class="font-semibold">ventaja competitiva medible</span>. Deja de actuar "a ciegas".
                </p>
                 {/* Botón CTA invertido (fondo gris claro, texto oliva oscuro) */}
                <a href="#contacto" class="cta-button bg-gray-200 text-[#55701C] hover:bg-gray-300 text-lg font-semibold">Solicita tu Diagnóstico Inicial</a>
            </div>
        </section>

        {/* Contact Section Placeholder - Fondo gris base (body) */}
        <section id="contacto" class="py-16 md:py-24 fade-in-section">
             <div class="container mx-auto px-6">
                 <div class="text-center mb-12">
                     {/* Título claro */}
                    <h2 class="text-3xl md:text-4xl font-bold text-main mb-4">Contáctanos</h2>
                     {/* Texto secundario */}
                    <p class="text-lg text-secondary max-w-2xl mx-auto">Estamos listos para ayudarte a impulsar tu estrategia de sostenibilidad.</p>
                </div>
                 {/* Contenedor de contacto - Fondo gris medio */}
                <div class="max-w-xl mx-auto container-bg-medium p-8 rounded-lg shadow-lg border border-gray-600">
                     {/* Texto secundario */}
                    <p class="text-secondary mb-4">Puedes contactarnos a través de:</p>
                     {/* Enlaces con color primario (Oliva aclarado) */}
                    <p class="mb-2"><strong>Email:</strong> <a href="mailto:info@biogintec.com" class="text-primary hover:underline">info@biogintec.com</a></p>
                    <p class="mb-4"><strong>Teléfono:</strong> <a href="tel:+123456789" class="text-primary hover:underline">+12 345 6789</a></p>
                    <p class="text-sm text-gray-500">O completa nuestro formulario de contacto (próximamente).</p>
                </div>
             </div>
        </section>

    </main>

    {/* Footer - Fondo gris oscuro (igual que header) */}
    <footer class="bg-[#1f2937] text-gray-400 py-12 mt-16 border-t border-gray-700">
        <div class="container mx-auto px-6 text-center">
             {/* Texto claro */}
            <p class="font-bold text-lg mb-2 text-gray-200">BIOGINTEC - Soluciones Ambientales</p>
            <p class="text-sm mb-4">&copy; 2025 BIOGINTEC. Todos los derechos reservados.</p>
            <div class="flex justify-center space-x-4">
                 {/* Enlaces del footer */}
                <a href="#" class="text-gray-400 hover:text-gray-200 transition duration-300">Política de Privacidad</a>
                <a href="#" class="text-gray-400 hover:text-gray-200 transition duration-300">Términos de Uso</a>
                </div>
        </div>
    </footer>

    <script>
        lucide.createIcons();

        // Simple Intersection Observer for fade-in effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    // Optional: stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    </script>

</body>
</html>
