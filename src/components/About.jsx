function About() {
    // ===== TOGGLE THIS TO SHOW/HIDE PHOTO =====
    const showPhoto = false; // Change to true when you want to use photo
    // ==========================================
  
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
  
          {/* Content Grid - Changes based on showPhoto */}
          <div className={`grid ${showPhoto ? 'md:grid-cols-3' : 'md:grid-cols-1'} gap-12 items-center`}>
            
            {/* Profile Image - Only renders if showPhoto is true */}
            {showPhoto && (
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    {/* Option 1: Use actual photo */}
                    {/* <img 
                      src="/profile.jpg" 
                      alt="Your Name" 
                      className="w-full h-full rounded-full object-cover"
                    /> */}
                    
                    {/* Option 2: Use placeholder emoji (comment out img above, uncomment this) */}
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
  
            {/* Text Content - Takes full width when no photo */}
            <div className={`${showPhoto ? 'md:col-span-2' : 'md:col-span-1'} space-y-6 ${!showPhoto && 'max-w-4xl mx-auto'}`}>
              
              {/* Paragraph 1 - Introduction */}
              <p className="text-lg text-dark/80 leading-relaxed">
                I'm a Full Stack Developer passionate about creating web applications 
                that make a difference. Currently honing my skills in the MERN stack 
                (MongoDB, Express.js, React, Node.js), I love the challenge of bringing 
                ideas to life through code.
              </p>
  
              {/* Paragraph 2 - Development Philosophy */}
              <p className="text-lg text-dark/80 leading-relaxed">
                My approach focuses on writing clean, maintainable code and creating 
                intuitive user experiences. From designing responsive frontends to 
                building robust backend APIs, I enjoy working across the full stack 
                to deliver complete solutions.
              </p>
  
              {/* Paragraph 3 - What Makes You Different */}
              <p className="text-lg text-dark/80 leading-relaxed">
                What drives me is the intersection of problem-solving and creativity. 
                I believe great applications aren't just functional—they're thoughtfully 
                designed, performant, and a joy to use. I'm always learning new 
                technologies and best practices to level up my craft.
              </p>
  
              {/* Skills Highlight */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-dark mb-4">
                  Quick Highlights:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-dark/80">Full Stack MERN Development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-dark/80">Responsive UI/UX Design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-dark/80">RESTful API Development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-dark/80">Database Design & Management</span>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;
  