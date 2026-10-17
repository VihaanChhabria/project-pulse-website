export default function VolunteerSection() {
  return (
    <section className="pb-24 md:pb-32" id="volunteer">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-surface-container rounded-[40px] p-8 md:p-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-12 text-center">
            Join the Pulse Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pulse-ice p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Licensed & Certified Volunteers
                </h3>
                <p className="font-body-md text-body-md text-on-background mb-8 leading-relaxed">
                  We are looking for EMT, CNA, RN, medical students, etc. to
                  help in our clinics.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeqJgaRnPn8hwmFaCfrPz5clFL_nGL8-LQR5EN0BwSLf86xmA/viewform",
                    "_blank",
                  );
                }}
                className="px-8 py-4 bg-pulse-navy text-white rounded-[24px] font-label-md btn-active"
              >
                Apply as a Clinical Volunteer
              </button>
            </div>
            <div className="bg-pulse-ice p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  General & Student Volunteers
                </h3>
                <p className="font-body-md text-body-md text-on-background mb-8 leading-relaxed">
                  We are looking for general volunteers to help with logistics,
                  patient intake, and health education.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSf7xxaebO1wulO6__c5UtSgKeWEoevd50rXqkT0mIvi71-zuw/viewform?usp=sharing&ouid=110592658385078288158",
                    "_blank",
                  );
                }}
                className="px-8 py-4 bg-pulse-navy text-white rounded-[24px] font-label-md btn-active"
              >
                Apply as a General Volunteer
              </button>
            </div>
            <div className="bg-surface-container-high p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Join Our GroupMe
                </h3>
                <p className="font-body-md text-body-md text-on-background mb-8 leading-relaxed">
                  Stay in the loop on clinic dates, volunteer shifts, and team
                  updates.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://groupme.com/join_group/111412217/Ufu6tsde",
                    "_blank",
                  );
                }}
                className="px-8 py-4 bg-white border-[1.5px] border-pulse-navy text-pulse-navy rounded-[24px] font-label-md btn-active"
              >
                Join GroupMe
              </button>
            </div>
            <div className="bg-surface-container-high p-10 rounded-[32px] flex flex-col justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Join on RamsConnect
                </h3>
                <p className="font-body-md text-body-md text-on-background mb-8 leading-relaxed">
                  VCU students can officially join Project Pulse through
                  RamsConnect to register as a member.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://vcu.campusgroups.com/ProjectPulse/club_signup",
                    "_blank",
                  );
                }}
                className="px-8 py-4 bg-white border-[1.5px] border-pulse-navy text-pulse-navy rounded-[24px] font-label-md btn-active"
              >
                Join on RamsConnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
