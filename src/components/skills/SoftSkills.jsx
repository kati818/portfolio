import { LanguageSection, SoftSkillSection } from "./Skills";
import "./SoftSkills.css";
import AnimatedText from "../animatedtext/AnimatedText";

export default function SoftSkills() {
  const languages = [
    { lang: "Russian", proficiency: "Native" },
    { lang: "English", proficiency: "Fluent" },
    { lang: "Finnish", proficiency: "Fluent" },
    { lang: "Korean", proficiency: "Beginner" },
  ];

  const skills = [
    { skill: "Teamworking" },
    { skill: "Problem-solving" },
    { skill: "Critical thinking" },
    { skill: "Adaptability" },
    { skill: "Time management" },
    { skill: "Attention to details" },
    { skill: "Conflict resolution" },
    { skill: "Creativity" },
    { skill: "Resilience" },
  ];

  return (
    <div>
      <section className="soft-skills">
        <div className="softskills-text-container">
          <h2 className="softskills-heading">Soft Skills</h2>
          <AnimatedText className="softskills-text">
            <p>
              Prior to beginning my studies in programming, I had a strong
              interest in linguistics, particularly in translation studies. My
              linguistic background has enhanced my ability to recognize
              parallels between human languages and programming languages.
            </p>
          </AnimatedText>
        </div>
        <AnimatedText>
          <div className="lang-soft-skills">
            <LanguageSection heading="Languages" languages={languages} />
            <SoftSkillSection heading="Communication skills" skills={skills} />
          </div>
        </AnimatedText>
      </section>
    </div>
  );
}
