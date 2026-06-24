import { Link } from 'react-router-dom'

export default function MissionSection() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      id="mission"
    >
      <div className="space-y-8 max-w-[640px]">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-sm text-label-sm">
          Richmond, Virginia
        </div>
        <h1 className="font-display-lg text-[42px] leading-tight md:text-display-lg text-on-background font-medium">
          Free, accessible health screenings that{' '}
          <span className="text-primary italic">put community first</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
          Project Pulse is a student-led initiative dedicated to bridging the
          health equity gap in Richmond. We provide essential screenings,
          education, and referrals to underserved neighborhoods through pop-up
          clinics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/#clinics"
            className="px-8 py-4 bg-[#2D2926] text-[#F9F8F3] rounded-[24px] font-label-md text-label-md btn-active hover:shadow-xl transition-all text-center"
          >
            Find a Clinic
          </Link>
          <Link
            to="/#volunteer"
            className="px-8 py-4 border-[1.5px] border-[#2D2926] text-[#2D2926] rounded-[24px] font-label-md text-label-md btn-active hover:bg-surface-container-low transition-all text-center"
          >
            Volunteer with Us
          </Link>
        </div>
        <div className="mt-8 flex items-center">
          <a
            className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
            href="#"
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/20 transition-colors">
              <svg
                className="lucide lucide-instagram"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <span className="font-label-md text-label-md">
              Follow our journey on Instagram
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
        <div className="space-y-4">
          <div className="h-3/5 rounded-hero overflow-hidden group">
            <img
              alt="Blood pressure check"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhGtGYCBNNMadeZef3BUH5C3wQqrkwZksLk9HUYsgItlLsetY2lwTPzO9vn271QQZJGBz0SuDcUWNuidJUEu9SjLBssm_K_0-1Q5QfTQzdU36WvONAYPiu9uoNgWD-5anl6zE3c-rdpQZE7BT02kCpBuoS2G2qrYA4JtP6AQENSwOerlQ5r9hbo_6jyXJi-7Dk3ONhQnAUsFfE3khi65fn2RvAujkYs8DqxEMoONNuk8pRdEi3-ZzaBo8VaXPXecKeiUNmipeEHH4"
            />
          </div>
          <div className="h-2/5 rounded-hero overflow-hidden group">
            <img
              alt="Group shot of volunteers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4gU0hIwucMWbBzgMVkyiAmsyKX1630tCkwW9eOOqgb1Im6pyj27N0AyeJ6E9df2V-o6lu2EGAv78j4aAwIlzEYM6QoAkHR5UruRsNqVLPs9_AQB4JLpH4fQmTWJCH-aV-6VEIfIucJnrmYE0ld0EiS8P8QGeenzkE801BCmUzw5f9n2eIdOCgosHw87OXWR1r8Tqz7d53YrF7b3rwqY-UgAl8KrNG-wdyuDQ3LR5EzCDclh7zj0_RzdrBDOaPPtWogFlb1S3_jo"
            />
          </div>
        </div>
        <div className="space-y-4 pt-12">
          <div className="h-2/5 rounded-hero overflow-hidden group">
            <img
              alt="Volunteer interaction"
              className="w-full h-full object-cover group-hover:rotate-1 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcio0ZWKr7_XMbi2FpL47fTD_3ngCzumm0oIytCQ9xJNZNsaBztjwOhq7FVDd6rVZYLIOhnljFRjmN9ADlQdGGWI3pq3PcQbK1VXVfYJ4FtmJfonmQL4oTJac12PdQ-1bicyprIorj5lHmUmopcCnEYgQFIyCX8zfvixL267yJ4YYlLER_kr0uk959gsHC_aM9YmcePeY6YUs4xkDsJCaf8DoqL_0UsZOwyaHiOzdvXYJ6gn1GOk3K5lWBGBHtFp_BTv134GDCuNI"
            />
          </div>
          <div className="h-3/5 rounded-hero overflow-hidden group">
            <img
              alt="Health education briefing"
              className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI649G01ayjVUNF53bHDnSD854vKdhASFUUk7-6b0Za0LpO1Dfnf4ySnJ_12w2qIOXA-6Rm1GhHT5O94pF_qGe4nusx6Nre6KaUmahPxBUrQemQk8RZ2jOmqSi3v19TnWvxP4mpqwgEdoyHi-ZP4ur0RBaiFgIlEUawLQ1SxsLvaUpKDkIvqDoPcBLbou1L36jF4f4k5m5tIp14RGN0ZXSfnQX78Y1csURDHmUMjGIofpFiLvlw9YCqd2CK4Err6a5mNLK5M5TFUg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
