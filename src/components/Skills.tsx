import skillsData from "../data/skills.json";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="skill-stars" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </span>
  );
}

function Skills() {
  return (
    <section className="skills-section">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="skill-category" key={category}>
          <h3>{category}</h3>

          <div className="skill-list">
            {[...skills]
  .sort((a, b) => b.rating - a.rating)
  .map((skill) => (
    <div className="skill-row" key={skill.name}>
      <span className="skill-name">{skill.name}</span>
      <Stars rating={skill.rating} />
    </div>
  ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;