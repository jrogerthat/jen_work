import CVContent from "../components/CV";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Jen Rogers</h1>

          <p className="hero-subtitle">
            Visualization Engineer · Researcher · Developer
          </p>

          <div className="hero-about">
            <p>
              This is where you can eventually add an introduction,
              selected work, an image, or whatever you want the landing
              page to focus on.
            </p>
          </div>
        </div>

        <a href="#cv" className="scroll-cue">
          <span>Scroll for CV</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </section>

      <section id="cv" className="home-cv">
        <header className="cv-header">
          <h1>Jen Rogers</h1>

          <div className="cv-contact">
            <a href="mailto:jennifer.rogers@inl.gov">
              jennifer.rogers@inl.gov
            </a>

            <a
              href="https://github.com/jrogerthat"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jrogerthat
            </a>
          </div>
          <button
      className="pdf-button"
      onClick={() => window.print()}
    >
      Export as PDF
    </button>
        </header>

        <CVContent />
      </section>
    </main>
  );
}

export default Home;