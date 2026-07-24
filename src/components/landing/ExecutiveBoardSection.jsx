const MEMBERS = [
  {
    name: "Diya Deepak",
    role: "President",
    school: "VCU Biology, Class of 2027",
  },
  {
    name: "Arshia Chhabria",
    role: "Vice President",
    school: "VCU Biology, Class of 2028",
  },
  {
    name: "Sankruti Rangwala",
    role: "Secretary",
    school: "VCU Biomedical Engineering, Class of 2027",
  },
  {
    name: "Nidhi Patel",
    role: "Treasurer",
    school: "VCU Biology, Class of 2028",
  },
];

export default function ExecutiveBoardSection() {
  return (
    <section
      className="py-24 md:py-32 bg-surface-container-low"
      id="executive-board"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Our Student Executive Board
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-[24px] bg-surface-container-high flex items-center justify-center mb-6 overflow-hidden">
                <span className="material-symbols-outlined text-[64px] text-on-surface-variant/70">
                  person
                </span>
              </div>
              <h4 className="font-headline-md text-[20px] text-[#2D2926] mb-1">
                {member.name}
              </h4>
              <p className="font-label-md text-primary mb-2">{member.role}</p>
              <p className="font-body-md text-secondary text-[14px]">
                {member.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
