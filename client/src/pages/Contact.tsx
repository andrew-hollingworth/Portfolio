import { useState } from 'react'
import { Icon } from '@iconify/react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...values }).toString(),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClass =
    'w-full font-body text-sm text-text-primary bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors placeholder:text-placeholder'

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto px-6 py-12 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-text-primary mb-6">
          Sent!
        </h1>
        <p className="font-body text-base text-text-secondary">
          Thanks for reaching out — I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-center text-text-primary mb-10">
        Get in Touch!
      </h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className={inputClass}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
        />
        <div className="flex items-center justify-end gap-4">
          {status === 'error' && (
            <p className="font-body text-sm text-secondary">Something went wrong — please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex items-center gap-2 bg-btn-bg hover:bg-primary-dark text-btn-text font-body font-medium px-6 py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send'}
            <Icon icon="ph:paper-plane-right" width={18} />
          </button>
        </div>
      </form>
    </div>
  )
}
