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
      </div>
    </section>
  );
}

export default Hero;
