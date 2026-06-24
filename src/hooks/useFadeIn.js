import { useEffect, useRef } from 'react'

export function useFadeIn(options = {}) {
  const { threshold = 0.1, large = false } = options
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const hiddenClass = large ? 'fade-in-hidden' : 'fade-in-sm-hidden'
    const visibleClass = large ? 'fade-in-visible' : 'fade-in-sm-visible'

    element.classList.add(hiddenClass, 'transition-all', 'duration-1000')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass)
            entry.target.classList.remove(hiddenClass)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, large])

  return ref
}
