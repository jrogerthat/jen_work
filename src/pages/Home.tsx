import CVContent from "../components/CV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVPdf from "../components/CVPdf";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
       
          <h1>Hi, I'm Jen.</h1>

          <div className="hero-about">
            <p>
              I'm an engineer and researcher, living in the Tetons. <br/>
              I work across visualization, software engineering, and human-centered data systems.
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
            <a href="mailto:jennifer.rogers1207@gmail.com">
              jennifer [dot] rogers1207 [at] gmail.com
            </a>

            <a
              href="https://github.com/jrogerthat"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jrogerthat
            </a>
          </div>
          <PDFDownloadLink
  document={<CVPdf />}
  fileName="Jen_Rogers_CV.pdf"
  className="pdf-button"
>
  {({ loading }) =>
    loading ? "Preparing PDF..." : "Download PDF"
  }
</PDFDownloadLink>
        </header>

        <CVContent />
      </section>
    </main>
  );
}

export default Home;