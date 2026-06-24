import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import GrainOverlay from '../components/GrainOverlay'
import Header from '../components/Header'
import SimpleFooter from '../components/SimpleFooter'

const CARDS = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD81RwDgKOfv4W2DhiBuFqNciw32Vdsp5RSR4wbn54qptNZzZTaCZRM069eQbbQhfv0LmNqTDPCdIRSzGLt2SoxQE7imm0cGD9YK-Y01BiZ0i5i3rnKtyEsf7yM2aeolLoVSwvrkbmnbCu2V_gwVQOxFSy5cRDmm_n1x2E2lpE4ZyVRF1MnRguwBc-Eq1hspdW_BeFVAY1wtP8__eJ4N7zJ-P1UcGplTf3YlzxP62mtBpZWzz-EhkpR0f4rjCPFJZeVo4aR4hf9Y1o',
    caption: 'The 100th screening milestone.',
    showTouch: true,
    className: '-rotate-[1deg] translate-y-2',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD81RwDgKOfv4W2DhiBuFqNciw32Vdsp5RSR4wbn54qptNZzZTaCZRM069eQbbQhfv0LmNqTDPCdIRSzGLt2SoxQE7imm0cGD9YK-Y01BiZ0i3rnKtyEsf7yM2aeolLoVSwvrkbmnbCu2V_gwVQOxFSy5cRDmm_n1x2E2lpE4ZyVRF1MnRguwBc-Eq1hspdW_BeFVAY1wtP8__eJ4N7zJ-P1UcGplTf3YlzxP62mtBpZWzz-EhkpR0f4rjCPFJZeVo4aR4hf9Y1o',
    caption: 'Screening process in action.',
    className: 'rotate-[4deg] -translate-x-2 translate-y-4',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHFjcnNmf0pZIPvScISKFJfqvUFRCtPxOcEdG8AR8OlvclnZjtvRTawLmhTF3N_WRPeDyIhyN3CZgQw3EtwHb9vSRFMh2mYpncNb4z3dPSvB51Mjt3jkoPNbtgXNJeXohSGFmUfluKv4-BpWsvWwF9zycoxfjgGFL_W_LPFxic2UiPNRUHbxxZSeDeBYG9xCdcRS_o9U4Irh8J-u_CLffdeHLKKaeF8PQSopzzUsT4WrhPWGKIEtYI-6CHP6mBm3danHlqLxy7dYo',
    caption: 'A moment of patient education.',
    className: '-rotate-[3deg] translate-x-2 translate-y-2',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBo39ubPxK3l19PfwvSxXIuDybNOO3hhUNe9k_1y-SD-tWc2EYpiWq_NgnMXAC83vKW69Lfn1pKXjcRv5D6WVwQFoBhbNXXWq1BrnXtfAZLggitjnaV7jH6hNFGUdFBCkP2M4TmPG1FG3PPEMgaB7xSMgvIzViQucbNRyd4nhx0apEMH5JkOR9Z0dOBxHXM1dnWtlevtkftQGyZKJhJJCt0dnu-EXQMwvFg_Qh4hTcVIFsyQ6-GkYMdqIYOrZtLICUfwIc2mI8Ix4',
    caption: 'Ending the day with the team.',
    className: 'rotate-[2deg]',
  },
]

const Z_LAYERS = [40, 30, 20, 10]

export default function BlogPostPage() {
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [animatingId, setAnimatingId] = useState(null)
  const [customTransforms, setCustomTransforms] = useState({})

  const advanceStack = useCallback(() => {
    const topId = order[0]
    setAnimatingId(topId)

    setTimeout(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev
        return [...rest, first]
      })
      const rot = (Math.random() * 10 - 5).toFixed(1)
      const tx = (Math.random() * 20 - 10).toFixed(1)
      const ty = (Math.random() * 20 - 10).toFixed(1)
      setCustomTransforms((prev) => ({
        ...prev,
        [topId]: `rotate(${rot}deg) translate(${tx}px, ${ty}px)`,
      }))
      setAnimatingId(null)
    }, 600)
  }, [order])

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <GrainOverlay />
      <Header />

      <main className="relative">
        <section className="pt-20 px-margin-mobile md:px-margin-desktop bg-surface-bright pb-12">
          <div className="max-w-container-max mx-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-primary mb-8 hover:gap-3 transition-all"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to News
            </Link>
            <div className="max-w-[800px]">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label-sm text-label-sm">
                  Community Milestone
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md">
                  October 5, 2024
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] text-on-surface mb-8 tracking-tight">
                Over 100 Screenings Completed in Northside
              </h1>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">
                    edit_note
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface">
                  By Project Pulse Editorial
                </p>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-[720px]">
                Last Saturday, the Northside community center buzzed with a
                different kind of energy. Amidst the usual weekend rhythms, our
                student-led team hit a landmark achievement, providing vital health
                diagnostics to our neighbors who need them most.
              </p>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-12">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <article className="lg:col-span-7 space-y-12">
              <div className="prose prose-stone max-w-none">
                <p className="font-body-lg text-body-lg text-on-surface mb-8 leading-loose">
                  Last Saturday, Project Pulse reached a major milestone: our 100th
                  community health screening. At the Northside Community Center, we
                  transformed a simple morning into a life-changing event for dozens
                  of our neighbors.
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6">
                  Key Outcomes
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    '42 individuals received comprehensive health diagnostics in a single day.',
                    'Identified three critical cases of asymptomatic hypertension.',
                    'Connected high-risk patients directly with local primary care follow-ups.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  By bringing healthcare directly to the neighborhood, we&apos;re not
                  just collecting data—we&apos;re saving lives through connection and
                  education.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-5 relative h-[600px] flex items-center justify-center overflow-hidden">
              <div
                className="relative w-full h-full max-w-[400px] cursor-pointer"
                onClick={advanceStack}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') advanceStack()
                }}
                role="button"
                tabIndex={0}
                aria-label="Cycle photo gallery"
              >
                {order.map((cardIndex, stackPosition) => {
                  const card = CARDS[cardIndex]
                  const zIndex = Z_LAYERS[stackPosition]
                  const isAnimating = animatingId === cardIndex
                  const style = customTransforms[cardIndex]
                    ? { zIndex, transform: customTransforms[cardIndex] }
                    : { zIndex }

                  return (
                    <div
                      key={cardIndex}
                      className={`messy-card absolute inset-0 bg-white p-4 shadow-xl rounded-xl border border-surface-container-high ${card.className} ${isAnimating ? 'sending-to-back' : ''}`}
                      style={style}
                    >
                      <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                        <img
                          alt=""
                          className="w-full h-full object-cover"
                          src={card.image}
                        />
                      </div>
                      <div
                        className={
                          card.showTouch
                            ? 'flex justify-between items-center'
                            : undefined
                        }
                      >
                        <p className="font-label-md text-label-md text-secondary italic">
                          {card.caption}
                        </p>
                        {card.showTouch && (
                          <span className="material-symbols-outlined text-primary-container">
                            touch_app
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                <button
                  type="button"
                  className="p-3 rounded-full bg-primary text-on-primary shadow-lg hover:scale-105 active:scale-95 transition-all"
                  onClick={advanceStack}
                  aria-label="Next photo"
                >
                  <span className="material-symbols-outlined">refresh</span>
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-24 bg-secondary-container">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-6">
              Stay informed on Richmond health.
            </h2>
            <p className="font-body-md text-body-md text-on-secondary-fixed-variant mb-10 max-w-[500px] mx-auto">
              Join our monthly newsletter for clinic dates, volunteer stories, and
              health tips from our editorial team.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-on-background text-background px-12 py-4 rounded-2xl font-label-md text-label-md hover:bg-secondary transition-colors inline-block"
              >
                Sign Up for Our Newsletter
              </a>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </div>
  )
}
