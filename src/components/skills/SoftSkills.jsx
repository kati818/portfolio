import { Box, List, ListItem } from "@mui/material";
import AnimatedText from "../animatedtext/AnimatedText";
import "./SoftSkills.css";

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
    <Box className="soft-skills">
      <Box className="softskills-text-container">
        <h2 className="section-heading">Soft Skills</h2>
        <AnimatedText>
          <Box className="section-text">
            Prior to beginning my studies in programming, I had a strong
            interest in linguistics, particularly in translation studies. My
            linguistic background has enhanced my ability to recognize parallels
            between human languages and programming languages.
          </Box>
        </AnimatedText>
        <Box className="soft-skills-container">
          <Box className="skills-container">
            <Box className="heading-box">
              <h2 className="skills-heading">Languages</h2>
            </Box>
            <List className="list-items">
              {languages.map((language, index) => (
                <ListItem key={index}>
                  {language.lang} - {language.proficiency}
                </ListItem>
              ))}
            </List>
          </Box>

          <Box className="skills-container">
            <Box className="heading-box">
              <h2 className="skills-heading">Communication skills</h2>
            </Box>
            <List className="list-items communication-skills-list">
              {skills.map((skill, index) => (
                <ListItem key={index}>{skill.skill}</ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
