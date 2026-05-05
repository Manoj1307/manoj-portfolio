const skillGroups = [
  {
    title: 'Technical',
    skills: ['Python', 'SQL', 'Git', 'JMeter', 'Azure', 'Power BI'],
    color: 'bg-blue-500',
  },
  {
    title: 'Data Science & ML',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'EDA', 'Feature Engineering', 'Model Deployment'],
    color: 'bg-purple-500',
  },
  {
    title: 'Libraries & Tools',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Langflow'],
    color: 'bg-green-500',
  },
  {
    title: 'APIs & Databases',
    skills: ['REST APIs', 'SQLite', 'PostgreSQL', 'LLM APIs (Gemini, Groq)'],
    color: 'bg-yellow-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Technical <span className="text-red-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${group.color}`} />
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm bg-slate-800 text-slate-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ML/AI Focus */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-4">
              🎯 ML & AI Specialization for Motorsport
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-slate-900/50">
                <div className="text-2xl font-bold text-red-400 mb-2">Real-Time</div>
                <p className="text-sm text-slate-400">Telemetry Analysis & Race Strategy</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-900/50">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Predictive</div>
                <p className="text-sm text-slate-400">Performance Modeling & Optimization</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-900/50">
                <div className="text-2xl font-bold text-purple-400 mb-2">Visualization</div>
                <p className="text-sm text-slate-400">Data Dashboards for Team Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}