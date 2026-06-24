export default function VolunteerSection() {
  return (
    <section className="pb-24 md:pb-32" id="volunteer">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-surface-container rounded-[40px] p-8 md:p-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-12 text-center">
            Join the Pulse Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-container/10 p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Licensed & Certified Volunteers
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-8">
                  We are looking for NPs, PAs, MDs, and certified health workers
                  to provide clinical oversight and direct care.
                </p>
              </div>
              <button
                type="button"
                className="px-8 py-4 bg-[#2D2926] text-white rounded-[24px] font-label-md btn-active"
              >
                Apply as a Clinical Volunteer
              </button>
            </div>
            <div className="bg-surface-container-high p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  General & Student Volunteers
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-8">
                  Passionate students and community members are needed for
                  logistics, patient intake, and health education.
                </p>
              </div>
              <button
                type="button"
                className="px-8 py-4 border-[1.5px] border-[#2D2926] text-[#2D2926] rounded-[24px] font-label-md btn-active"
              >
                Apply as a General Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
