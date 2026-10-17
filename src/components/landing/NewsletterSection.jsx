export default function NewsletterSection() {
  return (
    <section className="pb-24 md:pb-32" id="newsletter-signup">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-surface-container rounded-[32px] p-12 md:p-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
              Stay in the Loop
            </h2>
            <p className="font-body-md text-body-md text-on-background mb-10 leading-relaxed">
              Get monthly updates on upcoming clinics, volunteer opportunities, and
              stories of impact from across Richmond.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-2 px-10 py-4 bg-pulse-navy text-white rounded-full font-label-md btn-active hover:shadow-xl transition-all"
                href="#"
              >
                Join Our Newsletter
                <span className="material-symbols-outlined text-[20px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
