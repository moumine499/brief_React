

function Hero () {
    return (
        <section className="bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-3 py-6">
    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">New Feature</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Une appli. Un trajet. Zéro souci.
          </h1>
          <p className="text-lg text-gray-600">
            Réservez vos billets de bus en toute simplicité, où que vous soyez, quand vous le voulez.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <a href="#" className="px-6 py-3 bg-cyan-700 text-white font-medium rounded-lg hover:bg-cyan-800 transition duration-300 text-center">
            Commencer
          </a>
          <a href="#" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Explorer les trajets
          </a>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-500">Nos grands trajets depart le Tchad</p>
          <div className="flex flex-wrap items-center space-x-6">
            <div className="text-gray-400 font-medium">Abéché</div>
            <div className="text-gray-400 font-medium">N'djaména</div>
            <div className="text-gray-400 font-medium">Moundou</div>
            <div className="text-gray-400 font-medium">Sarh</div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="src/assets/bus.png" 
            alt="Team working on platform" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Hero