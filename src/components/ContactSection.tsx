import { useState } from "react";
import { ArrowUpRight, Github, Globe2, Linkedin, Mail } from "lucide-react";
import { Button } from "@mui/material";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "muhedarius96@gmail.com";

  const copyEmail = async () => {
    try {
      // Try to open Gmail compose section first
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=About your portofolio&body=Hi Darius,`;
      const gmailWindow = window.open(gmailUrl, '_blank');
      
      if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'boolean') {
        // If Gmail didn't open (popup blocked or not available), copy email instead
        await navigator.clipboard.writeText(email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch (error) {
      // Fallback to copying email if any error occurs
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-pattern"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
      <div className="contact-content">
        <p className="section-kicker">04 / HAVE SOMETHING IN MIND?</p>
        <h2>Let's make<br />something <span>matter.</span></h2>
        <p>Have a product to build, a tricky engineering problem, or an idea worth exploring? I'd love to hear about it.</p>
        <div className="contact-actions">
          <Button variant="contained" endIcon={<ArrowUpRight size={17} />} onClick={copyEmail}>{copied ? "Email copied" : "Contact me"} {copied && <Mail size={15} />}</Button>
         
        </div>
        <div className="social-links">
          <a href="https://github.com/Muhet" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/muheto-darius-5296561b1/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
          <span><Globe2 size={17} /> Kigali, Rwanda</span>
        </div>
      </div>
      <div className="contact-big-mark">D<span>.</span></div>
    </section>
  );
}