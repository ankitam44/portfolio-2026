export default function Footer() {
  return (
    <>
      <footer className="contact-band" id="contact">
        <div className="wrap">
          <span className="eyebrow-cta">Let&apos;s talk</span>
          <h2>Ankita Menon</h2>
          <p className="role-line">Product Manager, grounded in UX thinking.</p>
          <div className="contact-row">
            <span>Berlin, DE</span>
            <span className="sep">|</span>
            <a href="mailto:ankitamenon00@gmail.com">ankitamenon00@gmail.com</a>
            <span className="sep">|</span>
            <span>+49 15256091858</span>
            <span className="sep">|</span>
            <a href="https://www.linkedin.com/in/ankitabmenon/" target="_blank" rel="noopener noreferrer">
              linkedin/ankitabmenon
            </a>
          </div>
        </div>
      </footer>

      <footer className="meta">
        <div className="wrap">
          <span>Berlin, DE</span>
          <span>© {new Date().getFullYear()} Ankita Menon</span>
        </div>
      </footer>
    </>
  );
}
