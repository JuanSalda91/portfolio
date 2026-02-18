function Contact() {
    return (
      <section id="contact" className="py-20 bg-light">
        <div className="container mx-auto px-4 max-w-4xl">
  
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-dark/70 max-w-xl mx-auto leading-relaxed">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a project in mind, a question, or just want 
              to say hello — my inbox is always open!
            </p>
          </div>
  
          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
  
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10">
  
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    Let's Work Together
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    I'm actively looking for Full Stack Developer roles and 
                    freelance opportunities. If you think we'd be a great fit, 
                    let's connect!
                  </p>
                </div>
  
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark/50 uppercase tracking-wide">Email</p>
                    <a
                      href="mailto:juansalda9131@gmail.com"
                      className="text-dark font-medium hover:text-primary transition-colors"
                    >
                      juansalda9131@gmail.com
                    </a>
                  </div>
                </div>
  
                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark/50 uppercase tracking-wide">Location</p>
                    <p className="text-dark font-medium">Atlanta, Georgia, US</p>
                  </div>
                </div>
  
                {/* Availability Status */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark/50 uppercase tracking-wide">Status</p>
                    <p className="text-accent font-medium">Available for Opportunities</p>
                  </div>
                </div>
  
              </div>
  
              {/* Right Column - Social Links */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    Find Me Online
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    Follow my work and connect with me on these platforms.
                  </p>
                </div>
  
                {/* GitHub */}
                <a
                  href="https://github.com/JuanSalda91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-light hover:bg-dark hover:text-white group transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-dark group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dark group-hover:text-white transition-colors">GitHub</p>
                    <p className="text-sm text-dark/60 group-hover:text-white/70 transition-colors">@JuanSalda91</p>
                  </div>
                </a>
  
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/juansalda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-light hover:bg-[#0077B5] hover:text-white group transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#0077B5] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dark group-hover:text-white transition-colors">LinkedIn</p>
                    <p className="text-sm text-dark/60 group-hover:text-white/70 transition-colors">Juan Saldarriaga</p>
                  </div>
                </a>
  
              </div>
            </div>
  
            {/* Email CTA Button - Bottom */}
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <p className="text-dark/70 mb-6">
                Prefer a more direct approach? Send me an email directly.
              </p>
              <a
                href="mailto:youremail@gmail.com"
                className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Me An Email
              </a>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Contact;
  