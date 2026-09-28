import focusAreas from "../data/focus.json";

function FocusAreas() {
  return (
    <section className="focus-areas">
      <h2>Research & Focus Areas</h2>

      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article className="focus-card" key={area.title}>
            <b>{area.title}</b>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FocusAreas;