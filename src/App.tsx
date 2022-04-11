import Landing from "./components/Landing";
import About from "./components/About";
//import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, ITheme } from "./themes";

const App = () => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);
  const [titles, setTitles] = useState([
    'Software Architect',
    'Dev Lead',
    'Azure DevOps Administrator',
    'SharePoint Administrator']);
  const [skills, setSkills] = useState([
    {
      name: "React",
      iconName: "vscode-icons:file-type-reactjs",
      level: "90"
    },
    {
      name: "HTML",
      iconName: "vscode-icons:file-type-html",
      level: "65"
    }, {
      name: "CSS",
      iconName: "vscode-icons:file-type-css",
      level: "65"
    }, {
      name: "Bootstrap",
      iconName: "logos:bootstrap",
      level: "90"
    }, {
      name: "TypeScript",
      iconName: "logos:typescript-icon",
      level: "90"
    }, {
      name: "JavaScript",
      iconName: "logos:javascript",
      level: "90"
    }, {
      name: "C#",
      iconName: "logos:c-sharp",
      level: "90"
    }, {
      name: "MSSQL",
      iconName: "vscode-icons:file-type-sql",
      level: "90"
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Landing setTheme={setTheme} titles={titles} />
        <About />
        {/* <Projects / >*/}
        <Skills skills={skills} />
        {/* <Experience />
        <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
