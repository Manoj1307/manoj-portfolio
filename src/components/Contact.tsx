import { useState } from 'react';
import { Send, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to bring data-driven insights to the world of Motorsport? Let's connect and discuss how I can contribute to your team's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-red-500/20">
                    <Mail className="text-red-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <a href="mailto:manojsivaraj13@gmail.com" className="text-white hover:text-red-400 transition-colors">
                      manojsivaraj13@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-white">+91 9360489461</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <p className="text-white">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/ms1307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-all duration-200"
                >
                  <Linkedin size={24} className="text-slate-400 hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/Manoj1307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-white transition-all duration-200"
                >
                  <Github size={24} className="text-slate-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message about Motorsport data opportunities..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}