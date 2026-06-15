import { useState } from 'react'
import { Icon } from '@iconify/react'
import { CONTACT_EMAIL } from '../config'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleChange = (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues(v => ({ ...v, [field]: e.target.value }))

  const sendMail = () => {
    const link =
      'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(values.name + ' Wants to Get in Touch!') +
      '&body=' + encodeURIComponent(values.message)
    window.location.href = link
  }

  const inputClass =
    'w-full font-body text-sm text-text-primary bg-surface border border-text-secondary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors placeholder:text-text-secondary/60'

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-center text-text-primary mb-10">
        Get in Touch!
      </h1>
      <form noValidate autoComplete="on" className="flex flex-col gap-4">
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange('name')}
          className={inputClass}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange('email')}
          className={inputClass}
        />
        <textarea
          id="message"
          placeholder="Message"
          value={values.message}
          onChange={handleChange('message')}
          rows={5}
          className={inputClass + ' resize-none'}
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={sendMail}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Send
            <Icon icon="ph:paper-plane-right" width={18} />
          </button>
        </div>
      </form>
    </div>
  )
}
