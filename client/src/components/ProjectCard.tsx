import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-surface border border-text-secondary/10"
    >
      {project.image && (
        <div className="h-48 overflow-hidden bg-secondary/20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="font-heading font-semibold text-lg text-text-primary">
          {project.title}
        </h3>
        <p className="font-body text-sm text-text-secondary flex-1">
          {project.description}
        </p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-body px-2 py-0.5 rounded-full bg-secondary/30 text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
