import educationData from "../data/cv/education.json";
import experienceData from "../data/cv/experience.json";
import { publications } from "../data/cv/publications";

import type {
  EducationItem,
  ExperienceItem,
} from "../types/cv";

const education = educationData as EducationItem[];
const experience = experienceData as ExperienceItem[];

function formatDates(
  dates: [number] | [number, number | "Present"]
): string {
  if (dates.length === 1) {
    return `${dates[0]}`;
  }

  return `${dates[0]} - ${dates[1]}`;
}

function isJenRogers(author: string): boolean {
  return (
    author === "Jen Rogers" ||
    author === "Jennifer Rogers" ||
    author === "J Rogers"
  );
}

function CV() {
  return (
    <main className="cv-page">
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
</header>

      <section className="cv-section">
        <div className="cv-section-title">
          <h2>EXPERIENCE</h2>
        </div>

        <div className="cv-section-content">
          {experience.map((item) => (
            <article key={`${item.position}-${item.institution}`}>
              <h3>{item.position}</h3>

              <p>
                {item.institution}
                {item.location && `, ${item.location}`}
                {" | "}
                {formatDates(item.dates)}
              </p>

              {item.description && (
  <p className="cv-description">{item.description}</p>
)}
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <div className="cv-section-title">
          <h2>EDUCATION</h2>
        </div>

        <div className="cv-section-content">
          {education.map((item) => (
            <article key={item.degree}>
              <h3>{item.degree}</h3>

              <p>
                {item.institution}
                {" | "}
                {formatDates(item.dates)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <div className="cv-section-title">
          <h2>PUBLICATIONS</h2>
        </div>

        <div className="cv-section-content">
          {publications.map((publication) => (
            <article key={publication.title}>
              <h3>{publication.title}</h3>

              <p>
                {publication.authors.map((author, index) => (
                  <span key={`${publication.title}-${author}-${index}`}>
                    {index > 0 && ", "}
                    {isJenRogers(author) ? (
                      <strong>{author}</strong>
                    ) : (
                      author
                    )}
                  </span>
                ))}
              </p>

              <p>
                {publication.venue}
                {publication.year && ` | ${publication.year}`}
              </p>

              {publication.notes && <p>{publication.notes}</p>}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CV;