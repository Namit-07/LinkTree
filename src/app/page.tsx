'use client';

import React from 'react';

export default function MujToppersLinktree() {
  const instagramUrl = 'https://www.instagram.com/mujtoppers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const whatsappUrl = 'https://chat.whatsapp.com/CO8hXj8Yn7JDDOGZxrZZru';
  const youtubeUrl = 'https://www.youtube.com/@mujtoppers';
  
  return (
    <div className="linktree-root">
      <div className="page">
        <div className="eyebrow">MUJ · Est. Notes Archive</div>
        <div className="title-with-logo">
          <img src="/favicon.ico" alt="MUJ Toppers Logo" className="logo-image" />
          <h1 className="title">MUJ Toppers</h1>
        </div>
        <p className="subtitle">
          Materials, doubt-clearing &amp; the group everyone&apos;s actually in.
        </p>

        <div className="stamp-wrap">
        </div>

        <div className="links">
          <a
            className="link-card"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x={3} y={3} width={18} height={18} rx={5} />
                <circle cx={12} cy={12} r={4} />
                <circle cx={17.3} cy={6.7} r={1.1} fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="text-block">
              <span className="label">Follow on Instagram</span>
              <span className="sub-label">reels · memes · exam updates</span>
            </span>
          </a>

          <a
            className="link-card"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.2 14.3c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.3.4-.2.6-.1l1.7.8c.2.1.4.2.4.3.1.2.1.7-.1 1.3Z" />
              </svg>
            </span>
            <span className="text-block">
              <span className="label">Join WhatsApp Community</span>
              <span className="sub-label">notes drops · doubt clearing</span>
            </span>
          </a>

          <a
            className="link-card"
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582,6.186c-0.23-0.836-0.905-1.512-1.743-1.742C18.24,4,12,4,12,4S5.76,4,4.161,4.444 c-0.838,0.23-1.513,0.906-1.743,1.742C2,7.785,2,12,2,12s0,4.215,0.418,5.814c0.23,0.835,0.905,1.512,1.743,1.742 C5.76,20,12,20,12,20s6.24,0,7.839-0.444c0.838-0.23,1.513-0.906,1.743-1.742C22,16.215,22,12,22,12S22,7.785,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
              </svg>
            </span>
            <span className="text-block">
              <span className="label">Subscribe on YouTube</span>
              <span className="sub-label">video lectures · tutorials</span>
            </span>
          </a>

          <a
            className="link-card"
            href="https://www.linkedin.com/company/muj-toppers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </span>
            <span className="text-block">
              <span className="label">Follow on LinkedIn</span>
              <span className="sub-label">company updates · careers</span>
            </span>
          </a>

          <a
            className="link-card"
            href="https://mujtoppers.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-box">
              <img src="/favicon.ico" alt="Website" style={{ width: '22px', height: '22px' }} />
            </span>
            <span className="text-block">
              <span className="label">Visit Our Website</span>
              <span className="sub-label">mujtoppers.in · resources</span>
            </span>
          </a>
        </div>

        <footer>mujtoppers.in</footer>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .linktree-root {
          --paper: #eaf1f4;
          --paper-line: #c6d9e1;
          --margin-red: #c23b33;
          --ink: #1d2b3a;
          --ink-soft: #47586b;
          --gold: #b8901f;
          --highlight: #f5d547;
          --card-bg: #f8fbfc;
          --radius: 14px;

          font-family: 'Inter', sans-serif;
          color: var(--ink);
          background-color: var(--paper);
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 31px,
            var(--paper-line) 31px,
            var(--paper-line) 32px
          );
          background-position: 0 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 48px 20px;
          position: relative;
          overflow-x: hidden;
        }

        .linktree-root::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 48px;
          width: 2px;
          background: var(--margin-red);
          opacity: 0.55;
        }

        @media (max-width: 480px) {
          .linktree-root::before {
            left: 22px;
          }
        }

        .page {
          width: 100%;
          max-width: 440px;
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--ink-soft);
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 8px;
        }

        .title-with-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .logo-image {
          width: 56px;
          height: 56px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid var(--ink);
          padding: 6px;
          background: var(--paper);
        }

        .title {
          font-family: 'Kalam', cursive;
          font-weight: 700;
          font-size: clamp(40px, 11vw, 56px);
          text-align: center;
          margin: 0;
          color: var(--ink);
          line-height: 1;
          transform: rotate(-1deg);
        }

        .subtitle {
          text-align: center;
          font-size: 15px;
          color: var(--ink-soft);
          max-width: 320px;
          margin: 0 auto 28px;
          line-height: 1.5;
        }

        .stamp-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .stamp {
          font-family: 'JetBrains Mono', monospace;
          color: var(--margin-red);
          border: 2px dashed var(--margin-red);
          border-radius: 50%;
          width: 132px;
          height: 132px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transform: rotate(-9deg);
          opacity: 0.85;
          animation: stampIn 0.55s cubic-bezier(0.2, 1.4, 0.4, 1) both;
          animation-delay: 0.15s;
        }

        .stamp .check {
          font-size: 26px;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stamp .line1 {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.06em;
        }

        .stamp .line2 {
          font-size: 8px;
          letter-spacing: 0.04em;
          opacity: 0.75;
          margin-top: 3px;
        }

        @keyframes stampIn {
          0% {
            opacity: 0;
            transform: rotate(-24deg) scale(1.6);
          }
          100% {
            opacity: 0.85;
            transform: rotate(-9deg) scale(1);
          }
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .link-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--card-bg);
          border: 1.5px solid var(--ink);
          border-radius: var(--radius);
          padding: 16px 18px;
          text-decoration: none;
          color: var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          overflow: hidden;
        }

        .link-card:hover,
        .link-card:focus-visible {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 var(--ink);
        }

        .link-card:active {
          transform: translate(0px, 0px);
          box-shadow: 1px 1px 0 var(--ink);
        }

        .link-card:focus-visible {
          outline: 3px solid var(--gold);
          outline-offset: 2px;
        }

        .link-card :global(.label) {
          position: relative;
          font-weight: 600;
          font-size: 16.5px;
          z-index: 1;
        }

        .link-card :global(.label)::before {
          content: '';
          position: absolute;
          left: -3px;
          right: -3px;
          bottom: 1px;
          top: 42%;
          background: var(--highlight);
          z-index: -1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }

        .link-card:hover :global(.label)::before,
        .link-card:focus-visible :global(.label)::before {
          transform: scaleX(1);
        }

        .icon-box {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ink);
          color: var(--paper);
        }

        .icon-box :global(svg) {
          width: 22px;
          height: 22px;
        }

        .text-block {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sub-label {
          font-size: 12.5px;
          color: var(--ink-soft);
          font-family: 'JetBrains Mono', monospace;
        }

        footer {
          text-align: center;
          margin-top: 34px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--ink-soft);
          letter-spacing: 0.04em;
        }

        @media (prefers-reduced-motion: reduce) {
          .stamp {
            animation: none;
            opacity: 0.85;
          }
          .link-card,
          .link-card :global(.label)::before {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
