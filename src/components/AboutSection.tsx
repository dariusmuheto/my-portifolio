export default function AboutSection() {
  return (
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
  );
}