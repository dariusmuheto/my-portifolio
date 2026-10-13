import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, IconButton } from "@mui/material";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header px-5">
      <a href="#home" className="brand" aria-label="Darius Muheto home">
        <span className="brand-mark">D<span>.</span></span>
        <span className="brand-name">DARIUS<br /><small>MUHETO</small></span>
      </a>
      <nav className={mobileMenuOpen ? "nav-links nav-open" : "nav-links"}>
        <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
        <a href="#about" onClick={closeMenu}>About <span>02</span></a>
        <a href="#skills" onClick={closeMenu}>Expertise <span>03</span></a>
        <div className="mobile-menu-divider" />
        <Button className="mobile-cta" variant="outlined" href="#contact" onClick={closeMenu}>Let's talk</Button>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <IconButton className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          {mobileMenuOpen ? <X /> : <Menu />}
        </IconButton>
      </div>
    </header>
  );
}