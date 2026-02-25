import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-white to-blue-50 dark:from-[#020617] dark:via-[#020617] dark:to-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-dark/70 dark:text-light max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;