import { ArrowDownRight, ArrowUpRight, Check, Code2 } from "lucide-react";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-main">
        <div className="eyebrow"><span className="availability-dot" /> OPEN TO MEANINGFUL COLLABORATIONS</div>
        <h1>I build digital<br />things that <span className="highlight-word">work.</span><span className="headline-star">✳</span></h1>
        <p className="hero-description">I'm Darius Muheto, a software engineer turning complex problems into reliable products, thoughtful interfaces, and systems built to scale.</p>
        <div className="hero-actions">
          <Button variant="contained" endIcon={<ArrowDownRight size={17} />} href="#work">Explore my work</Button>
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
  );
}