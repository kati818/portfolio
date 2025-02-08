import { useState } from "react";
import "./About.css";
import "./TabListStyles.css";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { tabsClasses } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import AnimatedText from "../animatedtext/AnimatedText";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "uppercase",
  margin: theme.spacing(0, 2),
  minWidth: 0,
  color: "#000",
  borderRadius: "8px",
  [`&.${tabsClasses.selected}`]: {
    color: "#000",
  },
}));

export default function About() {
  const [value, setValue] = useState("1");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <section className="about">
      <h2 className="aboutme-heading">About me</h2>
      <AnimatedText className="greeting">
        {/* <LeftQuoteIcon /> */}
        <TabContext value={value}>
          <div className="tab-text">
            <TabPanel value="1" className="tabpanel-text">
              Hi, I'm Ekaterina, a passionate and creative web developer with a
              strong interest in front-end development and UI/UX design. My
              programming journey began with backend development, where I
              explored Java and databases. This experience provided me with a
              solid foundation in programming principles and deepened my
              understanding of core concepts, making it easier to navigate
              various programming languages.
            </TabPanel>
            <TabPanel value="2" className="tabpanel-text">
              Some years ago, I graduated from the University of Helsinki, where
              I specialized in Translation and Interpreting. My background in
              languages has given me a unique perspective on communication,
              problem-solving, and attention to detail—skills that I now apply
              to coding and web development. My diverse skill set allows me to
              bridge gaps, whether translating between languages or translating
              complex technical concepts into accessible, engaging web
              solutions.
            </TabPanel>
            <TabPanel value="3" className="tabpanel-text">
              As I transition into front-end development, I’m excited to bring
              fresh ideas and a unique perspective to every project I work on.
              With a strong eagerness to learn and innovate, I strive to create
              visually appealing and user-friendly experiences that blend
              functionality with great design. In the future, I aim to expand my
              skill set to become a full-stack developer, integrating back-end
              technologies with front-end interfaces.
            </TabPanel>
          </div>

          {/* <RightQuoteIcon /> */}
          <TabList
            value={value}
            onChange={handleChange}
            sx={{
              width: "30%",
              borderRadius: "31px",
              background: "rgb(129, 216, 208)",
              padding: "10px",
              boxShadow: "0px 3px 15px rgba(150, 151, 159, 0.5)",
              "& .MuiTab-root": {
                color: "#303030",
              },

              "& .Mui-selected": {
                color: "#d88189 !important",
              },

              // Adjust the indicator style
              [`& .${tabsClasses.indicator}`]: {
                height: "100%",
                borderRadius: "31px",
                backgroundColor: "rgba(255, 255, 255, .2)",
              },
            }}
            centered
          >
            <TabItem label="Journey" value="1" />
            <TabItem label="Background" value="2" />
            <TabItem label="Vision" value="3" />
          </TabList>
        </TabContext>
      </AnimatedText>
    </section>
  );
}
