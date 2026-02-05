import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Technologies and tools I use to design, build, and deploy full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Frontend Category */}
          <div className="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Frontend
            </h3>
            <p className="text-dark/70 mb-4 text-sm leading-relaxed">
              Building responsive, interactive user interfaces with modern JavaScript and component-based architectures.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Category */}
          <div className="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Backend
            </h3>
            <p className="text-dark/70 mb-4 text-sm leading-relaxed">
              Designing RESTful APIs, handling business logic, and integrating with databases and external services.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full hover:bg-secondary/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database Category */}
          <div className="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Database
            </h3>
            <p className="text-dark/70 mb-4 text-sm leading-relaxed">
              Structuring and querying data using document-based databases optimized for modern web apps.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full hover:bg-accent/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Category */}
          <div className="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Tools & Workflow
            </h3>
            <p className="text-dark/70 mb-4 text-sm leading-relaxed">
              Essential development tools for version control, testing APIs, and writing efficient code.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-dark/10 text-dark text-sm font-medium rounded-full hover:bg-dark/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
