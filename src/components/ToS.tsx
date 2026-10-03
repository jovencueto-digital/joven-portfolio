import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service - PLACEHOLDER. Legal text has to fit YOUR business, so
 * none is supplied. Paste your own terms into the sections below.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 3, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is provided for information about Joven Cueto and his services. You may browse it freely for personal, non-commercial use.</p>

          <h2>Work and payment</h2>
          <p>Any project is scoped, priced and agreed in writing before work starts. The written agreement governs that engagement.</p>

          <h2>Ownership</h2>
          <p>The text, photos and case studies on this site belong to Joven Cueto. Third-party logos are trademarks of their owners and are shown to identify tools used.</p>

          <h2>Liability</h2>
          <p>Results shown are past results for specific clients and are not a guarantee of future performance. The site is provided as is.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
