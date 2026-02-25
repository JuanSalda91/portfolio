function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 dark:bg-dark dark:shadow-primary">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Placeholder if no image
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-dark dark:text-light mb-3">{project.title}</h3>

        {/* Project Description */}
        <p className="text-dark/70 mb-4 dark:text-light leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-center"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-dark dark:bg-light dark:text-dark dark:hover:bg-blue-200 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-center"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
