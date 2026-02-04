import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div className="min-h-screen bg-light">
      {/* Navbar will go here */}
      <Navbar />

      {/* Main content sections */}
      <main>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center py-20 text-dark">
              Projects Section - Coming Soon
            </h2>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center py-20 text-dark">
              Skills Section - Coming Soon
            </h2>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center py-20 text-dark">
              Contact Section - Coming Soon
            </h2>
          </div>
        </section>

        {/* Footer will go here */}
      </main>
    </div>
  );
}

export default App;