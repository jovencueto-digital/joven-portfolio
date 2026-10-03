import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy - PLACEHOLDER. Legal text has to describe YOUR site and what
 * it collects, so none is supplied. Write it (or have a lawyer or a policy
 * generator write it) and paste it into the sections below.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 3, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This site is the personal portfolio of Joven Cueto. This policy covers this site only.</p>

          <h2>What is collected</h2>
          <p>The contact form asks for your name, email address and message. It does not use tracking cookies or third-party analytics.</p>

          <h2>How it is used</h2>
          <p>Your details are used only to reply to your enquiry. They are not sold or shared with anyone else.</p>

          <h2>How long it is kept</h2>
          <p>Messages are kept only as long as needed to respond and follow up. To have your details deleted, email joveninabox@gmail.com.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
