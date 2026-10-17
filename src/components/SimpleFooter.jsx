import { Link } from 'react-router-dom'

export default function SimpleFooter() {
  return (
    <footer className="bg-surface-container full-width">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="mb-12 md:mb-0 text-center md:text-left">
          <Link
            className="font-headline-md text-headline-md text-on-surface block mb-4"
            to="/"
          >
            Project Pulse
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            © 2024 Project Pulse. Student-led health for Richmond, VA.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="flex gap-8">
            <a
              className="font-body-md text-body-md text-pulse-navy hover:text-primary underline transition-all"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-md text-body-md text-pulse-navy hover:text-primary underline transition-all"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-body-md text-body-md text-pulse-navy hover:text-primary underline transition-all"
              href="#"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
