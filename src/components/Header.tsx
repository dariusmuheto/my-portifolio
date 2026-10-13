import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, IconButton } from "@mui/material";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Darius Muheto home">
        <span className="brand-mark">D<span>.</span></span>
        <span className="brand-name">DARIUS<br /><small>MUHETO</small></span>
      </a>
      <nav className={mobileMenuOpen ? "nav-links nav-open" : "nav-links"}>
        <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
        <a href="#about" onClick={closeMenu}>About <span>02</span></a>
        <a href="#skills" onClick={closeMenu}>Expertise <span>03</span></a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Button className="header-cta" variant="outlined" endIcon={<ArrowUpRight size={16} />} href="#contact">Let's talk</Button>
        <IconButton className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          {mobileMenuOpen ? <X /> : <Menu />}
        </IconButton>
      </div>
    </header>
  );
}