import { Sidebar } from './components/layout/Sidebar';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Services } from './components/sections/Services';
import { CopyButton } from './components/ui/CopyButton';

function App() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-slate-700">
      <Sidebar />

      <main className="flex-grow flex flex-col">
        <div className="max-w-5xl mx-auto w-full p-8 md:p-16 lg:p-24 space-y-32">

          {/* Hero Section */}
          <section id="home" className="space-y-6 pt-12 md:pt-0">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
              Versatile Data Scientist <br className="hidden md:block" /> & AI Specialist
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              Architecting advanced analytics solutions and integrating Large Language Models into enterprise workflows.
            </p>
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold text-lg rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Schedule A Consultation
              </a>
            </div>
          </section>

          <Experience />
          <Services />
          <Education />

          {/* Contact CTA */}
          <section id="contact" className="py-24 px-8 bg-surface border border-border rounded-[2.5rem] shadow-sm text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">Ready to transform your data?</h2>
              <p className="text-slate-500 max-w-lg mx-auto text-lg">
                Let's discuss how advanced analytics and business intelligence can drive your organization's success.
              </p>
            </div>
            <CopyButton
              value="allen@allen.tools"
              label="Copy Email Address"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all mx-auto"
            />
          </section>

        </div>

        <footer className="mt-auto p-12 border-t border-border bg-white text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} ALLEN TOOLS. System Design: Soft Minimal. Fully Responsive.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
