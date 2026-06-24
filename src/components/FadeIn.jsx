import { useFadeIn } from '../hooks/useFadeIn'

export default function FadeIn({ children, className = '', large = false }) {
  const ref = useFadeIn({ large })
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
