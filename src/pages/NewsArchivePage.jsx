import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import GrainOverlay from '../components/GrainOverlay'
import Header from '../components/Header'
import SimpleFooter from '../components/SimpleFooter'

const STORIES = [
  {
    slug: 'over-100-screenings',
    category: 'Milestone',
    date: 'October 12, 2024',
    title: 'Northside Screening Success',
    excerpt:
      "Last weekend's health screening at the Northside Community Center saw over 200 residents receiving preventative checkups and wellness education.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCSgxaM0sv8HzXZHDieR3JIEkzrLuoj2FZ5pbyo0uPvgDI2VkvfueSW1mhxJPhuUyQPgTD6i7Blnw41ONzBj7vp-_JunZiBQxNjh_V5sacRcKiv6C7lBsJUPIpbozdzDIfhHmAp2MqMy-xaroUTDwZUFs7JbBbEKTZlZF1f5CfZHIFlKS7gJJuxD1jiQW_89y1oiGRRc1JyerdYg-f0b58aJ3pM4eIt_5GhLIWuCfZOMURKKvVD8QRjJEsjwX2tq4LLl9e4db4kEs',
  },
  {
    slug: null,
    category: 'Community',
    date: 'September 28, 2024',
    title: 'New Leadership Team',
    excerpt:
      'Introducing the next generation of Project Pulse leaders. Meet the medical and public health students driving our mission forward this academic year.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaysmRY3bQwpwgLgsLyhpZsD0Js8P9H0pADz4BluTbzt7ZIwmNXFz4tM1dkgU45zpX-gbvCDKkAeoQwX0xYIuIM--ozcV2Y5MrIu9UIdEyscC_gP0iiP0-Q3AyP3bOi20bHoHl6YiEu4iBq7eM191aWMan7oKCIprgac0t1nZImSR5Mu01388Ae8eUt6YmxzyMBKrn0jTN5F3uwkqeK9IQoQA1JCr0xo7GdmBHtaa_KluYXp3LZAlpnw6kqGZoKIjwc2WON8bejHg',
  },
  {
    slug: null,
    category: 'Clinic Update',
    date: 'August 15, 2024',
    title: 'Impact in Richmond',
    excerpt:
      'A deep dive into our annual data. Learn how our decentralized clinic model is reducing healthcare disparities in under-resourced Richmond neighborhoods.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3eQpyiAST-IhnK5qizvUjdI-UOQ7ussvL6O2Glw7uV4x8TQqV0021OSQsvk4aGwEnZnZ3tKYFqYjTd7jw1ATO3QRLmyeVthXj9chIIcYMEdzVTX9IjqNaJ3kT3G8w0YgabUyYsuaSf3WNAod6UdI4f6GeVHZ8RwVob1g2YWhd-uAQ0mXhvysKeGcav9QUmpXJ9Itwldz7k1mIkEGJU4VPpXwczFE8SxT6Dl6LKsMyrjG0LCe3N3ZTIgXVIE9A4OAhvbBCJchLXaw',
  },
  {
    slug: null,
    category: 'Community',
    date: 'July 30, 2024',
    title: 'The Volunteer Spirit',
    excerpt:
      'Spotlighting the dedicated volunteers who make our clinics possible, from registration desks to language interpretation and clinical support.',
    icon: 'volunteer_activism',
  },
  {
    slug: null,
    category: 'Clinic Update',
    date: 'June 22, 2024',
    title: 'Expanded Lab Services',
    excerpt:
      'Project Pulse is proud to announce the integration of on-site rapid blood glucose and cholesterol testing at all upcoming weekend clinics.',
    icon: 'medical_services',
  },
]

function StoryCard({ story }) {
  const linkTo = story.slug ? `/news/${story.slug}` : '/news'

  return (
    <article className="group bg-surface-container-low rounded-card overflow-hidden card-shadow transition-transform duration-500 hover:-translate-y-2 flex flex-col">
      <div className="h-72 overflow-hidden relative">
        {story.image ? (
          <img
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={story.image}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center p-8 ${story.icon === 'volunteer_activism' ? 'bg-sage/10' : 'bg-tertiary-fixed/30'}`}
          >
            <div className="text-center opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">
                {story.icon}
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-label-sm text-label-sm text-espresso">
            {story.category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-label-sm font-label-sm text-on-surface-variant/60 mb-4 uppercase tracking-tighter">
          {story.date}
        </span>
        <h3 className="font-headline-md text-headline-md text-espresso mb-4 leading-snug group-hover:text-primary transition-colors">
          {story.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
          {story.excerpt}
        </p>
        <div className="mt-auto">
          <Link
            className="inline-flex items-center gap-2 font-label-md text-label-md text-espresso group-hover:gap-4 transition-all"
            to={linkTo}
          >
            Read Story
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function NewsArchivePage() {
  useEffect(() => {
    const articles = document.querySelectorAll('[data-archive-card]')
    articles.forEach((el) => {
      el.classList.add('fade-in-sm-hidden', 'transition-all', 'duration-700')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-sm-visible')
            entry.target.classList.remove('fade-in-sm-hidden')
          }
        })
      },
      { threshold: 0.1 },
    )

    articles.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md bg-background">
      <GrainOverlay />
      <Header />

      <main>
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="max-w-[720px] mx-auto px-margin-mobile md:px-0 text-center">
            <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[1.1] text-espresso mb-8">
              Latest News & Stories
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mx-auto">
              A chronicle of our journey across Richmond. Explore the milestones,
              community heartbeats, and clinic updates from our student-led health
              initiatives.
            </p>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-[80px]" />
        </section>

        <section className="pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES.map((story) => (
              <div key={story.title} data-archive-card>
                <StoryCard story={story} />
              </div>
            ))}

            <article
              data-archive-card
              className="lg:col-span-1 bg-espresso rounded-card overflow-hidden p-8 flex flex-col justify-center text-background"
            >
              <h3 className="font-headline-md text-headline-md mb-4">Stay Informed</h3>
              <p className="font-body-md text-body-md opacity-80 mb-8">
                Join 1,200+ neighbors receiving our monthly health dispatch and
                clinic schedule.
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full bg-sage text-espresso py-3 rounded-full font-label-md text-label-md font-bold transition-all hover:bg-white active:scale-95"
                >
                  Join Our Mailing List
                  <span className="material-symbols-outlined ml-2 text-sm">
                    open_in_new
                  </span>
                </a>
              </div>
            </article>
          </div>

          <div className="mt-24 flex justify-center items-center gap-4">
            <button
              type="button"
              className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="font-label-md text-label-md">
              1 <span className="mx-2 opacity-30">/</span> 12
            </span>
            <button
              type="button"
              className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </div>
  )
}
