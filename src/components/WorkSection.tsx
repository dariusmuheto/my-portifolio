import { ArrowUpRight } from "lucide-react";
import { Chip } from "@mui/material";
import ProjectVisual from "./ProjectVisual";
import type { Project } from "../types";

const projects: Project[] = [
  {
    number: "01",
    title: "Payment & Bill Processing",
    category: "FINTECH · MICROSERVICES",
    description: "A resilient payment flow connecting mobile money, service providers, and bill-payment systems—with clear transaction states and dependable event processing.",
    stack: ["Node.js", "TypeScript", "RabbitMQ", "PostgreSQL","Prisma","MYSQL"],
    visual: "payments",
  },
  {
    number: "02",
    title: "USSD & Member Services",
    category: "DIGITAL FINANCIAL SERVICES",
    description: "USSD experiences and backend services for member accounts, savings, wallet operations, and group-based financial workflows.",
    stack: ["React", "TypeScript", "REST APIs", "Redis","PHP Laravel"],
    visual: "platform",
  },
  {
    number: "03",
    title: "Business Web Experiences",
    category: "WEB DEVELOPMENT",
    description: "Modern, responsive websites and digital experiences designed to give growing businesses a clear, polished online presence.",
    stack: ["React", "Vite", "Tailwind CSS", "Material UI"],
    visual: "web",
  },
];

export default function WorkSection() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="section-heading">
        <div><p className="section-kicker">01 / SELECTED WORK</p><h2>Good work.<br /><span>Real outcomes.</span></h2></div>
        <p className="section-intro">A snapshot of the systems and experiences I enjoy building—from dependable backend infrastructure to intuitive digital products.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-visual-wrap"><ProjectVisual type={project.visual} /><span className="project-number">{project.number}</span></div>
            <div className="project-info">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.stack.map((item) => <Chip key={item} label={item} size="small" variant="outlined" />)}</div>
              <a href="#contact" className="project-link">Discuss a similar project <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
      <p className="project-disclaimer">Selected project summaries are representative of my experience. Detailed case studies can be added as projects are approved for public sharing.</p>
    </section>
  );
}