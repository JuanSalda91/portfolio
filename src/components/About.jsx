// function to start component
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Profile Image - Left Side */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="md:col-span-2 space-y-6">
            {/* Content will go here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
