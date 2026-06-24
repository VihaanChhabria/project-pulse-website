export default function DonationsSection() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="donations">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Support Our Mission
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Donations go directly toward supplies for clinics. Your contribution
            makes a difference in community health.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              alert("Coming soon!");
            }}
            className="px-12 py-4 bg-[#2D2926] text-white rounded-full font-label-md btn-active hover:shadow-xl transition-all"
          >
            Donate to Project Pulse
          </button>
        </div>
      </div>
    </section>
  );
}
