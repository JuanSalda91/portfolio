import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-light">
      {/* Navbar will go here */}
      <Navbar />

      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center py-20 text-primary">
              Hero Section - Coming Soon
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center py-20 text-dark">
              About Section - Coming Soon
            </h2>
          </div>
        </section>

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