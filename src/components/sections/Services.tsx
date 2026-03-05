import { services } from '../../data/portfolio';

export const Services = () => {
    return (
        <section id="projects" className="space-y-12">
            <h2 className="text-3xl font-bold text-primary border-b border-border pb-4">Professional Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <div key={i} className="p-8 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">{service.title}</h3>
                        <ul className="space-y-3">
                            {service.items.map((item, ii) => (
                                <li key={ii} className="text-sm text-slate-500 flex items-center gap-2 pl-0 before:hidden">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
