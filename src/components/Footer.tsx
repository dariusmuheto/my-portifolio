export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="#home" className="footer-brand">DARIUS MUHETO <span>© {new Date().getFullYear()}</span></a>
      <span>DESIGNED WITH INTENTION. BUILT WITH CARE.</span>
      <a href="#home" className="back-top">BACK TO TOP ↑</a>
    </footer>
  );
}