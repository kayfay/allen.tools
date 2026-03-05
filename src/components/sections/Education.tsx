import { education } from '../../data/portfolio';

export const Education = () => {
    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-primary">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, i) => (
                    <div key={i} className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                        <p className="text-primary text-sm font-medium">{edu.school} • {edu.year}</p>
                        <p className="text-slate-500 text-sm mt-4">{edu.focus}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
