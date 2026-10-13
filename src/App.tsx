import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Check, Code2, Github,
  Globe2, Layers3, Linkedin, Mail, Menu, Server, Smartphone, X,
} from "lucide-react";
import { Button, Chip, IconButton } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  visual: "payments" | "platform" | "web";
  link?: string;
};

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

const skills = [
  { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"], icon: Code2 },
  { title: "Backend & APIs", items: ["Node.js", "REST APIs", "Microservices", "Laravel", "API integrations"], icon: Server },
  { title: "Data & Messaging", items: ["PostgreSQL", "Redis", "RabbitMQ", "SQL", "Event-driven systems"], icon: Layers3 },
  { title: "Delivery", items: ["Docker", "Kubernetes", "Git", "CI/CD", "Debugging & observability"], icon: Smartphone },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "payments") {
    return (
      <div className="visual visual-payments">
        <div className="mini-window">
          <div className="window-bar"><i /><i /><i /><span>transaction.flow</span></div>
          <div className="flow-row"><span className="flow-icon">M</span><div><b>Mobile money</b><small>Payment initiated</small></div><Check size={15} /></div>
          <div className="flow-line" />
          <div className="flow-row"><span className="flow-icon lime">↗</span><div><b>Event exchange</b><small>Message routed</small></div><Check size={15} /></div>
          <div className="flow-line" />
          <div className="flow-row"><span className="flow-icon purple">✓</span><div><b>Service provider</b><small>Final status received</small></div><span className="status-dot" /></div>
        </div>
        <div className="visual-tag">99.9% focus on reliability</div>
      </div>
    );
  }
  if (type === "platform") {
    return (
      <div className="visual visual-platform">
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-greeting">Muraho 👋<small>Your account at a glance</small></div>
          <div className="balance-card"><small>AVAILABLE BALANCE</small><strong>•••••• <span>RWF</span></strong><div className="balance-line" /></div>
          <div className="phone-label">Quick actions</div>
          <div className="quick-actions"><span>↗<small>Save</small></span><span>⇄<small>Transfer</small></span><span>＋<small>More</small></span></div>
          <div className="phone-transaction"><span className="transaction-icon">↙</span><div><b>Monthly savings</b><small>Completed</small></div><strong>+ 25,000</strong></div>
        </div>
        <div className="platform-orbit orbit-one" /><div className="platform-orbit orbit-two" />
      </div>
    );
  }
  return (
    <div className="visual visual-web">
      <div className="browser-card">
        <div className="window-bar"><i /><i /><i /><span>brand.studio</span></div>
        <div className="web-layout">
          <div className="web-copy"><span>BUILT TO MOVE YOU</span><b>Move your<br />business forward.</b><div className="web-cta">Explore more ↗</div></div>
          <div className="web-art"><div className="art-block block-a" /><div className="art-block block-b" /><div className="art-circle" /></div>
        </div>
        <div className="web-footer"><span>DESIGN THAT WORKS</span><span>01 — 04</span></div>
      </div>
      <div className="visual-spark">✳</div>
    </div>
  );
}


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "muhedarius96@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main>
      <div className="page-shell">
        <header className="site-header ">
          <a href="#home" className="brand" aria-label="Darius Muheto home"><span className="brand-mark ml-5">D<span>.</span></span><span className="brand-name">DARIUS<br /><small>MUHETO</small></span></a>
          <nav className={mobileMenuOpen ? "nav-links nav-open bg-amber-50" : "nav-links"}>
            <a href="#work" onClick={closeMenu}>Work </a>
            <a href="#about" onClick={closeMenu}>About </a>
            <a href="#skills" onClick={closeMenu}>Expertise </a>
          </nav>
          <div className="header-actions mx-5">
            <ThemeToggle />
            <Button className="header-cta" variant="outlined" endIcon={<ArrowUpRight size={16} />} href="#contact">Let's talk</Button>
            <IconButton className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">{mobileMenuOpen ? <X /> : <Menu />}</IconButton>
          </div>
        </header>

        <section className="hero section-pad" id="home">
          <div className="hero-main">
            <div className="eyebrow"><span className="availability-dot" /> OPEN TO MEANINGFUL COLLABORATIONS</div>
            <h1>I build digital<br />things that <span className="highlight-word">work.</span><span className="headline-star">✳</span></h1>
            <p className="hero-description">I'm Darius Muheto, a software engineer turning complex problems into reliable products, thoughtful interfaces, and systems built to scale.</p>
            <div className="hero-actions">
              <Button variant="contained" endIcon={<ArrowDownRight size={17} />} href="#work">Explore my work</Button>
              <Button variant="text" endIcon={<ArrowUpRight size={16} />} href="#contact" className="text-button">Get in touch</Button>
            </div>
            <div className="hero-footnote"><span>BASED IN KIGALI, RWANDA</span><span className="footnote-line" /><span>AVAILABLE WORLDWIDE</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract developer illustration">
            <div className="art-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="hero-code-card">
              <div className="code-top"><span>✳</span><span>building.ts</span><span>•••</span></div>
              <div className="code-lines">
                <p><em>const</em> idea = <b>"your idea"</b>;</p>
                <p><em>const</em> solution = <span>build</span>(idea);</p>
                <p className="code-spacer" />
                <p><em>if</em> (solution.<span>works</span>) {"{"}</p>
                <p className="indent">ship(solution);</p>
                <p>{"}"}</p>
              </div>
              <div className="code-bottom"><span className="code-pulse" /> ALWAYS ITERATING <span>v.01</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15} /> Clean code</div>
            <div className="floating-chip chip-bottom"><span className="tiny-check"><Check size={12} /></span> Built for people</div>
            <div className="hero-number">01<span>/</span>04</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {["PRODUCT ENGINEERING", "MICROSERVICES", "PAYMENT INTEGRATIONS", "FRONTEND DEVELOPMENT", "PRODUCT ENGINEERING", "MICROSERVICES", "PAYMENT INTEGRATIONS", "FRONTEND DEVELOPMENT"].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}
          </div>
        </div>

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

        <section className="about-section section-pad" id="about">
          <div className="about-left">
            <p className="section-kicker">02 / A LITTLE ABOUT ME</p>
            <h2>Curious mind.<br /><span>Practical builder.</span></h2>
            <div className="about-stamp">THINK<br />MAKE<br /><span>IMPROVE ↗</span></div>
          </div>
          <div className="about-right">
            <p className="about-lead">I care about what happens after the code compiles.</p>
            <p className="about-body">For me, great engineering is more than shipping features. It's understanding the problem, making sensible technical choices, and building systems that remain understandable, secure, and dependable as they grow.</p>
            <p className="about-body">My work spans backend services, API integrations, event-driven systems, and frontend experiences. I enjoy collaborating across teams, untangling tricky production issues, and making the next release better than the last.</p>
            <div className="about-facts">
              <div><strong>01</strong><span>Think in systems</span></div>
              <div><strong>02</strong><span>Build with purpose</span></div>
              <div><strong>03</strong><span>Improve continuously</span></div>
            </div>
          </div>
        </section>

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

        <section className="contact-section section-pad" id="contact">
          <div className="contact-pattern"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
          <div className="contact-content">
            <p className="section-kicker">04 / HAVE SOMETHING IN MIND?</p>
            <h2>Let's make<br />something <span>matter.</span></h2>
            <p>Have a product to build, a tricky engineering problem, or an idea worth exploring? I'd love to hear about it.</p>
            <div className="contact-actions">
              <Button variant="contained" endIcon={<ArrowUpRight size={17} />} onClick={copyEmail}>{copied ? "Email copied" : "Copy my email"} {copied && <Check size={15} />}</Button>
              <a className="email-link" href={`mailto:${email}`}><Mail size={16} /> {email}</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Muhet" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/muheto-darius-5296561b1/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <span><Globe2 size={17} /> Kigali, Rwanda</span>
            </div>
          </div>
          <div className="contact-big-mark">D<span>.</span></div>
        </section>

        <footer className="site-footer">
          <a href="#home" className="footer-brand">DARIUS MUHETO <span>© {new Date().getFullYear()}</span></a>
          <span>DESIGNED WITH INTENTION. BUILT WITH CARE.</span>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </main>
  );
}

export default App;
