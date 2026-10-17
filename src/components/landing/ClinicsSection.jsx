import FadeIn from "../FadeIn";
import { buildGoogleCalendarUrl } from "../../utils/googleCalendar";

const CLINICS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWBG_rgdGBrOyTfs5WtW7txvOeom3CZRoN3QEEb8napOh5Ra_g-k7siIOFo8dV9qFow4b9clr3PSTV4VUEbJmW5Wmx3ZSKYp1nWO0hfzMY9TNAmSafjmY1UCH59JirurMfr0eIndJBslnslisiG_s1hXhfBIPbn3NSBQcVbAjyO_1ewu4UXQce4MD5uWOopIToO-gh33mRYg5Ps39uyxTpbyQfIzYqKN8vdcUmdTxRMvpdFNgbXc8OJ-3bU2FSiblgABikBeI75u0",
    date: "October 24, 2026",
    title: "Monroe Park Clinic",
    services: ["Basic Health Screening"],
    startTime: "4:00 pm",
    endTime: "6:00 PM",
    address: "620 W Main St, Richmond, VA 23220",
    mapsUrl:
      "https://maps.google.com/maps?client=firefox-b-1-d&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYOycv1GEbGJMXamoxlMjD0y&daddr=620+W+Main+St,+Richmond,+VA+23220",
    calendarStart: "20261024T160000",
    calendarEnd: "20261024T180000",
  },
];

function ClinicCard({ clinic }) {
  const calendarUrl = buildGoogleCalendarUrl({
    title: clinic.title,
    services: clinic.services,
    address: clinic.address,
    calendarStart: clinic.calendarStart,
    calendarEnd: clinic.calendarEnd,
  });

  return (
    <FadeIn className="clinic-card bg-surface flex flex-col md:flex-row rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg">
      <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
        <img className="w-full h-full object-cover" src={clinic.image} />
      </div>
      <div className="p-8 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-pulse-navy text-[12px]">{clinic.date}</span>
        </div>
        <h3 className="font-headline-md text-headline-md font-bold text-on-background mb-4">
          {clinic.title}
        </h3>
        <div className="space-y-2 mb-6">
          {clinic.services.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-body-md text-on-background"
            >
              <span className="material-symbols-outlined text-[18px] text-pulse-navy">
                check_circle
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 pb-4">
          <span className="material-symbols-outlined text-[18px]">
            schedule
          </span>
          {clinic.startTime} - {clinic.endTime}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-pulse-navy text-white rounded-[24px] font-label-sm text-label-sm btn-active inline-flex items-center gap-3"
          >
            View Location
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white border-[1.5px] border-pulse-navy text-pulse-navy rounded-[24px] font-label-sm text-label-sm btn-active inline-flex items-center gap-3"
          >
            Add to Google Calendar
          </a>
        </div>
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
            <p className="font-body-md text-body-md text-on-background">
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
          <div className="text-center text-on-background">
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
