import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, LOGO_URL } from '../constants/brand'

export default function LandingFooter() {
  return (
    <footer className="bg-surface-container-high w-full" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Project Pulse" className="h-12 w-12" src={LOGO_URL} />
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              Project Pulse
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            Student-led health for Richmond, VA. Bridging gaps, building trust,
            and fostering wellness through community-centered action.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <span className="material-symbols-outlined text-[20px]">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <li>
                <Link className="hover:text-primary underline transition-all" to="/#mission">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary underline transition-all" to="/news">
                  Latest News
                </Link>
              </li>
              <li>
                <a className="hover:text-primary underline transition-all" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary underline transition-all" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">
              Contact
            </h5>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Richmond, VA
              <br />
              {CONTACT_EMAIL}
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto bg-surface p-8 rounded-[32px] shadow-sm">
          <h5 className="font-label-md text-label-md text-on-surface mb-4">
            Stay Connected
          </h5>
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">
            Get clinic alerts directly to your inbox.
          </p>
          <a
            className="block w-full bg-[#2D2926] text-white py-4 rounded-[16px] font-label-md text-center btn-active hover:shadow-lg transition-all"
            href="#"
          >
            Join Our Newsletter
          </a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-surface-variant/50 text-center md:text-left">
        <p className="font-body-md text-body-md text-on-surface-variant/70">
          © 2024 Project Pulse. Student-led health for Richmond, VA.
        </p>
      </div>
    </footer>
  )
}
