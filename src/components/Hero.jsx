function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-white to-blue-50"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Content will go here */}

        {/* Greetings */}
        <p className="text-lg md:text-xl text-dark/70 font-medium mb-4">
          Hi, I'm
        </p>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Juan Saldarriaga
          </span>
        </h1>

        {/* Professional Title*/}
        <h2 className="text-2xl md:text-4xl font-semibold text-dark mb-6">
          Full Stack Developer
        </h2>

        {/* Tagline/Description */}
        <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building modern web applications with the MERN stack. From frontend
          interactions to backend APIs, I create scalable, user-focused
          solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row dap-4 justify-center items-center">
            {/* Primary CTA - View Projects */}
            <a href="#projects" className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Veiw My Work
            </a>
            {/* Secondary CTA - Contact */}
            <a href="#contact" className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg border-2 border-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Get In Touch
            </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
