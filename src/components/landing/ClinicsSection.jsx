import FadeIn from "../FadeIn";

const CLINICS = [
  //
  //  image:
  //    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWBG_rgdGBrOyTfs5WtW7txvOeom3CZRoN3QEEb8napOh5Ra_g-k7siIOFo8dV9qFow4b9clr3PSTV4VUEbJmW5Wmx3ZSKYp1nWO0hfzMY9TNAmSafjmY1UCH59JirurMfr0eIndJBslnslisiG_s1hXhfBIPbn3NSBQcVbAjyO_1ewu4UXQce4MD5uWOopIToO-gh33mRYg5Ps39uyxTpbyQfIzYqKN8vdcUmdTxRMvpdFNgbXc8OJ-3bU2FSiblgABikBeI75u0',
  //  date: 'June 24, 2026',
  //  title: 'Chimborazo Park Clinic',
  //  services: [
  //    'Blood Pressure Screening',
  //    'Glucose & A1c Testing',
  //  ],
  //  time: '9:00 AM - 1:00 PM',
  //},
  //{
  //  image:
  //    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsVNEbLtQ5iIezMS4h1Vj7o16Z2rvvwno3tgMuejdhgWPbMunFZX--uMjeEl8xAVDVn47Ysprlrhyn3SNrLDWpWMx89DPKIr3GWQXZ9B4x6j2JmgYa68bAzt715kUr9tMQforRt5b6w_J-OuHOFnd6Q9MYOSmgZmyJ4ZsT1Kq0GlZ5Gz0mvG360UxuC18V7RAffSQ4WaTZ2AobjaMN7jzQ4k6-3f5f7rLzIDLSel64zgAgoP5-PPs4TUIpBdzcsfKl9-RpnPulfak',
  //  date: 'June 24, 2026',
  //  title: 'Southside Library Clinic',
  //  services: ['Blood Pressure Screening', 'Glucose & A1c Testing'],
  //  time: '10:00 AM - 2:00 PM',
  //},
];

function ClinicCard({ clinic }) {
  return (
    <FadeIn className="clinic-card bg-surface flex flex-col md:flex-row rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg">
      <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
        <img className="w-full h-full object-cover" src={clinic.image} />
      </div>
      <div className="p-8 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-secondary text-[12px]">{clinic.date}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-background mb-4">
          {clinic.title}
        </h3>
        <div className="space-y-2 mb-6">
          {clinic.services.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-body-md text-secondary"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                check_circle
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">
            schedule
          </span>
          {clinic.time}
        </p>
      </div>
    </FadeIn>
  );
}

export default function ClinicsSection() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="clinics">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
              Upcoming Community Clinics
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Find us in your neighborhood. All screenings are free and open to
              the public. No insurance required.
            </p>
          </div>
        </div>
        {CLINICS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLINICS.map((clinic) => (
              <ClinicCard key={clinic.title} clinic={clinic} />
            ))}
          </div>
        ) : (
          <div className="text-center text-secondary">
            <p>
              No clinics scheduled yet. Please reach out to us if you'd like to
              schedule a clinic in your neighborhood.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
