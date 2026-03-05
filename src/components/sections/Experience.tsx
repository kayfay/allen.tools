import { experience } from '../../data/portfolio';

export const Experience = () => {
    return (
        <section id="experience" className="space-y-12">
            <h2 className="text-3xl font-bold text-primary border-b border-border pb-4">Experience</h2>
            <div className="space-y-12">
                {experience.map((exp, i) => (
                    <div key={i} className="group relative">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <p className="text-sm text-slate-400 font-medium">{exp.period}</p>
                        </div>

                        {exp.roles ? (
                            <div className="space-y-6 ml-4 border-l-2 border-border pl-6">
                                {exp.roles.map((role, ri) => (
                                    <div key={ri}>
                                        <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">{role.name}</h4>
                                        <p className="text-slate-600 mt-2 leading-relaxed">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-600 leading-relaxed ml-4 border-l-2 border-border pl-6">{exp.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
