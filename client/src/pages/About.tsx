import { RESUME_URL } from '../config'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-text-primary mb-8">
        Hey, I'm Andrew.
      </h1>
      <p className="font-body text-base sm:text-lg text-text-primary leading-relaxed mb-6">
        I'm a web developer with a passion for making things, storytelling, and
        learning. My experiences working in advertising and film production have
        taught me to plan my code three steps ahead and stay organized. My
        passion for storytelling has helped me articulate my ideas to others on
        my team accurately and effectively. And my love of learning means I'm
        always looking for new challenges.
      </p>
      <p className="font-body text-base sm:text-lg mb-10">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-text-secondary hover:text-secondary transition-colors underline underline-offset-4"
        >
          Take a look at my resumé!
        </a>
      </p>
      <img
        src="/images/profile.png"
        alt="Andrew Hollingworth"
        className="block mx-auto max-w-xs sm:max-w-sm w-full"
      />
    </div>
  )
}
