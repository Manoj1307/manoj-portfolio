import { TrendingUp, Target, Zap } from 'lucide-react';

const stats = [
  { value: '8.36', label: 'CGPA', icon: TrendingUp },
  { value: '2023', label: 'Graduation', icon: Target },
  { value: '5+', label: 'ML Projects', icon: Zap },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Bio */}
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate data professional with a strong foundation in machine learning,
                deep learning, and performance engineering. My journey started at SRM Institute
                of Science and Technology, where I developed a deep understanding of computer
                science principles and data-driven problem solving.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                At Temenos India, I worked with massive datasets (3 TB+) processing millions of
                daily transactions for top Nordic banks, achieving sub-100ms response times.
                This experience taught me how to build scalable, performance-critical systems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Now, I'm channeling my passion for data and performance into the world of
                <span className="text-red-400 font-semibold"> Motorsport</span>. I believe
                the data-driven insights that transform banking systems can equally revolutionize
                racing strategy, telemetry analysis, and performance optimization.
              </p>
            </div>

            {/* Right: Stats Cards */}
            <div className="space-y-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10">
                      <stat.icon className="text-red-500" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Racing Vision */}
          <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-3">
              🚗 My Vision for Motorsport Data Analytics
            </h3>
            <p className="text-slate-300">
              Motorsport is the ultimate testing ground for real-time data analysis. From tire
              degradation patterns to race strategy optimization, every millisecond counts.
              I want to apply my skills in ML, performance engineering, and data visualization
              to help racing teams make faster, smarter decisions on the track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}