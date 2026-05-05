import { ExternalLink, Github, Cpu, Brain, TrendingUp, TreeDeciduous, BarChart3, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Education Regulation Impact Analyzer (ERIA)',
    tech: 'NLP, Transformers, Langflow, LLM, Streamlit',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    bullets: [
      'Engineered NLP pipeline for automatic topic classification and policy document parsing',
      'Built LLM-powered summarization engine converting 50+ page regulations into concise summaries',
      'Developed stakeholder impact analyzer mapping implications across education sectors',
      'Created chronological dependency graphs tracking policy evolution',
    ],
  },
  {
    title: 'Aerial Object Classification & Detection',
    tech: 'Deep Learning, CNN, YOLOv8, TensorFlow, Streamlit',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    bullets: [
      'Trained custom CNN and transfer learning models (ResNet50, MobileNet, EfficientNetB0) on 2,879 images achieving 94% accuracy',
      'Implemented YOLOv8 object detection on 3,319 annotated images with 91% mAP',
      'Built data augmentation pipeline improving model generalization by 15%',
      'Deployed interactive Streamlit dashboard for real-time classification',
    ],
  },
  {
    title: 'Diamond Dynamics: Price Prediction & Market Segmentation',
    tech: 'Machine Learning, ANN, K-Means, PCA, Streamlit',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-500',
    bullets: [
      'Engineered 5+ regression models achieving 98% R² on price prediction with 53,940 diamonds dataset',
      'Built Artificial Neural Network achieving 97.5% accuracy in price forecasting',
      'Implemented K-Means clustering with PCA, identifying 4 distinct market segments',
      'Developed Streamlit dashboard with real-time price prediction and cluster identification',
    ],
  },
  {
    title: 'EcoType: Forest Cover Classification',
    tech: 'Machine Learning, XGBoost, Random Forest, Streamlit',
    icon: TreeDeciduous,
    color: 'from-green-500 to-emerald-500',
    bullets: [
      'Processed 145,891 records with 54 features, implementing SMOTE for 7-class imbalance',
      'Trained and compared 5 classification algorithms (Random Forest, XGBoost, etc.)',
      'Optimized XGBoost via GridSearchCV achieving 87% accuracy on terrain features',
      'Created Streamlit UI for real-time forest cover type prediction',
    ],
  },
  {
    title: 'Cross-Market Analysis: Crypto, Oil & Stocks with SQL',
    tech: 'Python, SQL, Streamlit, API Integration, ETL',
    icon: BarChart3,
    color: 'from-red-500 to-rose-500',
    bullets: [
      'Integrated CoinGecko API, Yahoo Finance, and WTI oil datasets (2020–2026) via ETL pipelines',
      'Designed 4 relational tables with 15+ SQL queries for cross-market correlation analysis',
      'Built 3-page Streamlit dashboard with date filters and SQL query runner',
      'Analyzed Bitcoin-S&P 500 correlations identifying 4 market regime patterns',
    ],
  },
  {
    title: 'Global Literacy & Educational Trends: An Analytical Study',
    tech: 'Python, Pandas, SQL, Power BI',
    icon: Globe,
    color: 'from-indigo-500 to-violet-500',
    bullets: [
      'Collected and cleaned real-world datasets on adult literacy, youth literacy, GDP, and years of schooling across countries',
      'Performed exploratory data analysis (EDA) to uncover patterns and disparities in global education trends',
      'Engineered new features like literacy gender gap, illiteracy %, and education index to deepen analysis',
      'Designed and queried a SQL database with 3 tables to answer business-driven questions on literacy indicators',
      'Built a Power BI dashboard app to visualize insights across countries and regions',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Data-Driven <span className="text-red-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500" />
          </div>

          {/* Project Cards */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} shrink-0`}>
                    <project.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/Manoj1307"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800 hover:bg-red-500/20 transition-colors"
                        >
                          <Github size={18} className="text-slate-400" />
                        </a>
                        <a
                          href="#"
                          className="p-2 rounded-lg bg-slate-800 hover:bg-red-500/20 transition-colors"
                        >
                          <ExternalLink size={18} className="text-slate-400" />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 mb-4 font-mono">{project.tech}</p>

                    <ul className="space-y-2">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                          <span className="text-red-500 mt-0.5">▹</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}