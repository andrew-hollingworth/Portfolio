import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-center text-text-primary mb-10">
        My Work
      </h1>
      {projects.length === 0 ? (
        <div className="text-center mt-16 text-text-secondary font-body">
          <p className="text-xl">Projects coming soon.</p>
          {/* EMPTY STATE: remove once src/data/projects.ts array is populated */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
