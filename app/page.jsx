export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4 transition-transform transform hover:scale-105">Gonzalo Pérez Reich</h1>
          <h2 className="text-3xl text-gray-800">Próximo a ser Ingeniero Civil en Ciencias de la Computación</h2>
          <p className="text-xl text-gray-600 mt-2">Bienvenido a mi página personal, así es, ¡ya soy parte del internet!</p>
        </header>

        {/* Acerca de mí */}
        <section id="about" className="mb-10 bg-blue-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-blue-800 mb-4">Acerca de mí</h2>
          <p className="text-gray-700 leading-relaxed">
            Soy un entusiasta de la tecnología y el emprendimiento, próximo a obtener mi título de Ingeniero Civil en Ciencias de la Computación.
            Me apasiona el desarrollo de software y la innovación, y siempre busco aprender cosas nuevas.
          </p>
        </section>

        {/* Experiencia */}
        <section id="experience" className="mb-10 bg-green-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-green-800 mb-4">Experiencia</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700">Ledge - De practicante a Full Stack Developer</h3>
              <span className="text-gray-500">Ene 2024 - Actualidad</span>
              <p className="text-gray-700 mt-2">
                He tenido la oportunidad de trabajar a muchos kilómetros de distancia en Ledge, una startup alemana que busca revolucionar la forma en que las personas interactúan con la publicidad.
                En este tiempo, he participado en diversos proyectos, destacando las aplicaciones web y móviles desarrolladas en React Native y Nuxt.js.
                Estoy muy contento de formar parte de este equipo y siempre busco nuevos desafíos que me ayuden a crecer tanto profesional como personalmente.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700">Accenture - Desarrollador Full Stack</h3>
              <span className="text-gray-500">Ene 2023 - Mar 2023</span>
              <p className="text-gray-700 mt-2">
                Durante este periodo, me enfoqué en modelar soluciones a problemas de la industria minera, aprendiendo sobre su relación con la computación,
                especialmente en Data Mining, Machine Learning e Inteligencia Artificial.
                Además, desarrollé mis habilidades blandas al colaborar eficazmente con diferentes equipos en diversos proyectos,
                y aproveché la oportunidad de capacitarme en las tecnologías más modernas de desarrollo en la nube de AWS.
              </p>
            </div>
          </div>
        </section>

        {/* Educación */}
        <section id="education" className="mb-10 bg-yellow-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-yellow-800 mb-4">Educación</h2>
          <div>
            <h3 className="text-xl font-bold text-yellow-700">Ingeniería Civil mención ciencias de la computación - Universidad de Chile</h3>
            <span className="text-gray-500">2018 - Actualidad</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-700">Colegio SSCC Manquehue</h3>
            <span className="text-gray-500">Egresado el 2018</span>
          </div>
        </section>

        {/* Tecnologías */}
        <section id="skills" className="mb-10 bg-purple-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-purple-800 mb-4">Tecnologías</h2>
          <div className="grid grid-cols-2 gap-4">
            <span className="text-purple-700 font-semibold">Vue.js</span>
            <span className="text-purple-700 font-semibold">React.js</span>
            <span className="text-purple-700 font-semibold">Node.js</span>
            <span className="text-purple-700 font-semibold">Django</span>
            <span className="text-purple-700 font-semibold">React Native</span>
            <span className="text-purple-700 font-semibold">Python</span>
            <span className="text-purple-700 font-semibold">Express</span>
            <span className="text-purple-700 font-semibold">SQL y NOSQL</span>
            <span className="text-purple-700 font-semibold">Git & GitHub</span>
            <span className="text-purple-700 font-semibold">Gestión de Proyectos</span>
          </div>
        </section>

        {/* Habilidades  */}
        <section id="soft-skills" className="mb-10 bg-red-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-red-800 mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 gap-4">
            <span className="text-red-700 font-semibold">Gestión de Proyectos</span>
            <span className="text-red-700 font-semibold">Habilidades expositivas en Español e Inglés</span>
            <span className="text-red-700 font-semibold">Rápido aprendizaje</span>
            <span className="text-red-700 font-semibold">Genero buenos espacios de trabajo</span>
            <span className="text-red-700 font-semibold">Motivación para aprender</span>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="mb-10 bg-red-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-red-800 mb-4">Proyectos personales</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Aplicación de Control de Inventario:</strong>
              Estoy desarrollando un software de control de inventario para pequeñas y medianas empresas/organizaciones que buscan una solución a medida para la gestión de sus productos.
              Se encuentra en fase de desarrollo y espero poder lanzar la primera versión en los próximos meses.
              Ya me encuentro asociado a mi Universidad y un colegio, así que si te gustaría poder controlar tu inventario de una forma más eficiente y fácil (y de paso ayudarme a mejorar mi software), no dudes en contactarme.
            </li>
          </ul>
        </section>

        {/* Contacto */}
        <footer className="text-center mt-10">
          <p className="text-gray-600">
            <a
              href="https://www.linkedin.com/in/gonzalo-p%C3%A9rez-reich-89757a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline transition-colors duration-300"
            >
              LinkedIn
            </a> |
            <a
              href="mailto:gonzaloperezreich@gmail.com"
              className="text-blue-500 hover:underline transition-colors duration-300 ml-2"
            >
              Contacto
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
