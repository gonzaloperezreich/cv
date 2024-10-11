import React from 'react'
import Image from 'next/image';
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/circuito.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="container mx-auto max-w-4xl bg-white/90 p-8 rounded-lg shadow-lg">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4 transition-transform transform hover:scale-105">Gonzalo Pérez Reich</h1>
          <h2 className="text-3xl text-gray-800 mt-4">Próximo a ser Ingeniero Civil en Ciencias de la Computación</h2>
          <p className="text-xl text-gray-600 mt-2">Bienvenido a mi página personal, así es, ¡ya soy parte del internet!</p>
        </header>

        {/* Acerca de mí */}
        <section id="about" className="mb-10 bg-blue-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
            <h2 className="text-4xl font-semibold text-blue-800 mb-4">Acerca de mí</h2>
            <p className="text-gray-700 leading-relaxed">
              ¡Hola! Soy un apasionado de la tecnología y el emprendimiento, y estoy a un paso de obtener mi título de Ingeniero Civil en Ciencias de la Computación. 
              Me encanta lo que hago y siento que estoy en el camino correcto, utilizando mis habilidades para crear software y aplicaciones que realmente puedan hacer la vida más fácil para las personas. 
              Además, estoy en un constante proceso de crecimiento, tanto personal como profesional.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Siempre he soñado con emprender y creo que la tecnología es el mejor camino para lograrlo. Si sigues bajando, verás que estoy trabajando en un emocionante proyecto y tengo planes de incursionar en el área de la salud en un futuro cercano.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Tal vez mi descripción en LinkedIn sea un poco breve, pero hoy en día creo que cada profesión se está volviendo cada vez más especializada. En mi campo, muchas personas se enfocan únicamente en el desarrollo de software o en el análisis de datos. 
              Sin embargo, yo tengo una visión diferente: creo que podemos aprovechar lo mejor de ambos mundos. 
              El desarrollo de software, combinado con la ciencia de datos y la inteligencia artificial, no solo rompe barreras, sino que también puede ofrecer grandes contribuciones a la sociedad. 
              ¡Estoy emocionado por lo que viene!
            </p>
          </section>



        {/* Experiencia */}
        <section
          id="experience"
          className="mb-10 bg-green-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
        >
          <h2 className="text-4xl font-semibold text-green-800 mb-4">Experiencia</h2>
          <div className="space-y-8">
            {/* Ledge Experience */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-row-reverse items-center space-x-6 space-x-reverse">
              <Image 
                  src="/assets/ledge-experience.jpeg" 
                  width={150} 
                  height={150} 
                  alt="Ledge Experience" 
                  className="rounded-lg object-cover border-2 border-gray-300 rotate"
                />
              <div>
                <h3 className="text-xl font-bold text-green-700">Ledge - De practicante a Full Stack Developer</h3>
                <span className="text-gray-500">Ene 2024 - Actualidad</span>
                <p className="text-gray-700 mt-2">
                  He tenido la oportunidad de trabajar a muchos kilómetros de distancia en Ledge, una startup alemana que busca revolucionar la forma en que las personas interactúan con la publicidad.
                  En este tiempo, he participado en diversos proyectos, destacando las aplicaciones web y móviles desarrolladas en React Native y Nuxt.js.
                  Estoy muy contento de formar parte de este equipo y siempre busco nuevos desafíos que me ayuden a crecer tanto profesional como personalmente.
                </p>
                <a className='text-blue-500' href='https://www.ledge.eu' target="_blank" rel="noopener noreferrer">Ledge webpage</a>

              </div>
            </div>


            {/* Accenture Experience */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-6">
              <Image 
                src="/assets/accenture-experience.jpg" 
                width={150} 
                height={150} 
                alt="Accenture Experience" 
                className="rounded-lg object-cover border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-bold text-green-700">Accenture - Data Scientist</h3>
                <span className="text-gray-500">Ene 2023 - Mar 2023</span>
                <p className="text-gray-700 mt-2">
                  Durante este periodo, me enfoqué en modelar soluciones a problemas de la industria minera, aprendiendo sobre su relación con la computación,
                  especialmente en Data Mining, Machine Learning e Inteligencia Artificial.
                  Además, desarrollé mis habilidades blandas al colaborar eficazmente con diferentes equipos en diversos proyectos,
                  y aproveché la oportunidad de capacitarme en las tecnologías más modernas de desarrollo en la nube de AWS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educación */}
        <section id="education" className="mb-10 bg-yellow-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-yellow-800 mb-4">Educación</h2>
          <div className="space-y-8">
            {/* Universidad */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-6">
              <Image 
                src="/assets/injeniero.jpeg" 
                width={150} 
                height={150} 
                alt="Ingeniería Civil" 
                className="rounded-lg object-cover border-2 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-700">Ingeniería Civil mención ciencias de la computación - Universidad de Chile</h3>
                <span className="text-gray-500">2018 - Actualidad</span>
                <p className="text-gray-700 mt-2">
                  Estudiante de Ingeniería Civil con enfoque en Ciencias de la Computación, con diploma de alumno destacado año 2020,
                  2022 y 2023.
                </p>
              </div>
            </div>

            {/* Colegio */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-700">Colegio SSCC Manquehue</h3>
                <span className="text-gray-500">Egresado el 2018</span>
                <p className="text-gray-700 mt-2">
                  Egresado del Colegio SSCC Manquehue, donde desarrollé una sólida base en diversas áreas académicas y habilidades interpersonales.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/manquehue.jpg" 
                  width={150} 
                  height={150} 
                  alt="Colegio SSCC Manquehue" 
                  className="rounded-lg object-cover border-2 border-gray-300"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Habilidades  */}
        <section id="soft-skills" className="mb-10 bg-red-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-red-800 mb-4">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Gestión de Proyectos', 'Habilidades expositivas en Español e Inglés', 'Rápido aprendizaje', 'Genero buenos espacios de trabajo', 'Motivación para aprender', 'Aprobado curso de francés elemental'].map((skill, index) => (
              <span key={index} className="text-red-700 font-semibold bg-white p-2 rounded-lg shadow-sm">{skill}</span>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="mb-10 bg-indigo-50 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Proyectos personales</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Aplicación de Control de Inventario</h3>
            <p className="text-gray-700">
              Estoy desarrollando un software de control de inventario para pequeñas y medianas empresas/organizaciones que buscan una solución a medida para la gestión de sus productos.
              Se encuentra en fase de desarrollo y espero poder lanzar la primera versión en los próximos meses.
              Ya me encuentro asociado a mi Universidad y un colegio, así que si te gustaría poder controlar tu inventario de una forma más eficiente y fácil (y de paso ayudarme a mejorar mi software), no dudes en contactarme.
            </p>
          </div>
        </section>

        {/* Contacto */}
        <footer className="text-center mt-10">
          <div className="space-x-4">
            <a
              href="https://www.linkedin.com/in/gonzalo-p%C3%A9rez-reich-89757a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gonzaloperezreich@gmail.com"
              className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Contacto
            </a>
            <a
              href="https://open.spotify.com/playlist/2Oko7kAggxmyZPLZ78owae?si=b9248a5ea0fa484b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Una buena playlist
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}