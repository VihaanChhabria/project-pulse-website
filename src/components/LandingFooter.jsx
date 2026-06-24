import { CONTACT_EMAIL, LOGO_URL } from "../constants/brand";

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
            Project Pulse is a student-led initiative dedicated to improving
            community health through free, accessible screenings and education.
            Our mission is to empower underserved populations in Richmond by
            providing compassionate, preventive care and connecting individuals
            to the resources they need to take charge of their well-being.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
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
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-surface-variant/50 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="font-body-md text-body-md text-on-surface-variant/70">
            © 2024 Project Pulse. Student-led health for Richmond, VA.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant/70">
            Website made by{" "}
            <a
              className="text-primary hover:underline font-bold"
              href="https://vihaanc.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vihaan Chhabria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
