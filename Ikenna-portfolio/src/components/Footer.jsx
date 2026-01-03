export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_inner">
        <p className="muted">© {new Date().getFullYear()} Ike Agu </p>

        <div className="footer_socials">
          <a
            href="https://github.com/ike-agu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="social-link"
          >
            {/* GitHub Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0.5C5.73 0.5.75 5.6.75 11.9c0 5.1 3.29 9.4 7.86 10.9.58.1.79-.26.79-.57v-2.02c-3.2.71-3.87-1.56-3.87-1.56-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.21 1.77 1.21 1.03 1.8 2.71 1.28 3.37.98.1-.76.4-1.28.72-1.57-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.33 1.19-3.15-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.63.23 2.83.11 3.13.74.82 1.19 1.87 1.19 3.15 0 4.49-2.69 5.47-5.25 5.76.41.36.77 1.08.77 2.18v3.24c0 .31.21.67.8.56 4.56-1.52 7.85-5.82 7.85-10.9C23.25 5.6 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ikenna-agulobi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="social-link"
          >
            {/* LinkedIn Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 5 3.9 6.2 2.2 6.2c-1.67 0-2.7-1.2-2.7-2.7C-.5 2 1.02.8 2.7.8c1.7 0 2.28 1.2 2.28 2.7zM.5 23.5h4.4V7.9H.5v15.6zM8.5 7.9h4.2v2.1h.06c.58-1.1 2-2.25 4.1-2.25 4.4 0 5.2 2.9 5.2 6.7v9.05h-4.4v-8.03c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.05 2.07-3.05 4.2v8.18H8.5V7.9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
