import { Code2, Layers3, Server, Smartphone } from "lucide-react";
import type { Skill } from "../types";

const skills: Skill[] = [
  { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"], icon: Code2 },
  { title: "Backend & APIs", items: ["Node.js", "REST APIs", "Microservices", "Laravel", "API integrations"], icon: Server },
  { title: "Data & Messaging", items: ["PostgreSQL", "Redis", "RabbitMQ", "SQL", "Event-driven systems"], icon: Layers3 },
  { title: "Delivery", items: ["Docker", "Kubernetes", "Git", "CI/CD", "Debugging & observability"], icon: Smartphone },
];

export default function SkillsSection() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="section-heading skills-heading">
        <div><p className="section-kicker">03 / WHAT I BRING</p><h2>Tools are tools.<br /><span>Impact is the point.</span></h2></div>
        <p className="section-intro">A practical toolkit for taking ideas from early architecture through implementation, delivery, and ongoing improvement.</p>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, items, icon: Icon }, index) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
            <h3>{title}</h3>
            <div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}