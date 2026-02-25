import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark dark:bg-dark dark:text-gray-100">
      {/* Navbar will go here */}
      <Navbar />

      {/* Main content sections */}
      <main>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Footer will go here */}
      </main>
    </div>
  );
}

export default App;