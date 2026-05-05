import { Award, Cloud, Code, Database } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    description: 'Cloud computing fundamentals and Azure services',
  },
  {
    title: 'Certified Advanced Programming Professional',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    description: 'GUVI IITM Pravartak Certified Advanced Programming Professional and Master Data Science',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Certifications <span className="text-red-500">& Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500" />
          </div>

          {/* Certification Cards */}
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  {/* Icon Badge */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <cert.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-slate-400 text-sm">{cert.description}</p>
                  </div>

                  {/* Badge */}
                  <div className="shrink-0">
                    <Award className="text-yellow-500" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-white">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-red-400">Bachelor of Technology in Computer Science and Engineering</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">CGPA: 8.36 / 10.0</p>
                <p className="text-slate-500 text-sm">2019 – 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}