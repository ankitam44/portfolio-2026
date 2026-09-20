"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT = {
  linkedin: "https://www.linkedin.com/in/ankitabmenon/",
  linkedinLabel: "linkedin/ankitabmenon",
  email: "ankitamenon00@gmail.com",
  phone: "+49 15256091858",
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="topnav">
        <Link href="/" className="id" style={{ textDecoration: "none" }}>
          Ankita Menon
        </Link>
        <div className="links">
          <button onClick={() => setOpen((v) => !v)}>contact</button>
        </div>
      </nav>

      <div className={`contact-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
          <h3>Let&apos;s talk</h3>
          <div className="contact-popup-row">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{CONTACT.linkedinLabel}</span>
            </a>
          </div>
          <div className="contact-popup-row">
            <a href={`mailto:${CONTACT.email}`}>
              <span className="contact-label">Email</span>
              <span className="contact-value">{CONTACT.email}</span>
            </a>
          </div>
          <div className="contact-popup-row">
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
