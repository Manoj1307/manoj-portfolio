const experiences = [
  {
    title: 'Associate Product Engineer',
    company: 'Temenos India Private Limited',
    location: 'Chennai, India',
    period: 'October 2023 – March 2025',
    bullets: [
      'Executed performance testing on 3 TB of transactional data with millions of daily transactions for a top Nordic bank',
      'Achieved sub-100ms response time and 12–15 TPS per thread throughput',
      'Designed and executed JMeter load tests, reducing system response times by 30%',
      'Queried SQL databases to diagnose performance bottlenecks across 20+ business modules',
      'Configured Azure-based test environments mirroring client production infrastructure',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Professional <span className="text-red-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-yellow-500 to-slate-700" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-slate-950 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-red-500/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-sm text-red-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-red-500 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500 mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-yellow-500">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}