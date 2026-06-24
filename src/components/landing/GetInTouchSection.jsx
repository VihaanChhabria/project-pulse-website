import { CONTACT_EMAIL } from '../../constants/brand'

export default function GetInTouchSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="get-in-touch">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Get in Touch
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Whether you have questions about our clinics, want to partner with us,
            or just want to say hello, we&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container p-10 rounded-[32px] flex flex-col justify-between items-start border-t-4 border-primary-container">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                Email Us
              </h3>
              <p className="font-body-lg text-body-lg text-secondary mb-8">
                {CONTACT_EMAIL}
              </p>
            </div>
            <a
              className="px-8 py-4 bg-[#2D2926] text-white rounded-[24px] font-label-md btn-active inline-block"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              Send an Email
            </a>
          </div>
          <div className="bg-surface-container p-10 rounded-[32px] flex flex-col justify-between items-start border-t-4 border-primary-container">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  chat_bubble
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                Instagram
              </h3>
              <p className="font-body-lg text-body-lg text-secondary mb-8">
                Reach out on Instagram
              </p>
            </div>
            <a
              className="px-8 py-4 border-[1.5px] border-[#2D2926] text-[#2D2926] rounded-[24px] font-label-md btn-active inline-block"
              href="#"
            >
              Send a DM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
