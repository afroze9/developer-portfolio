import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
//import Projects from "./components/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, ITheme } from "./themes";

const App = () => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);
  const [titles] = useState([
    'Software Architect',
    'Dev Lead',
    'Azure DevOps Administrator',
    'SharePoint Administrator']);
  const [skills] = useState([
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
  const [experiences] = useState([
    {
      company: 'CureMD',
      title: 'Software Architect',
      years: 'Sep 2021 - Present',
      mainTech: ['.NET Core', 'React'],
      technologies: ['React', 'TypeScript', 'JavaScript', 'C#', 'EF Core', 'HTML', 'CSS', 'Bootstrap'],
      icon: "akar-icons:react-fill"
    }, {
      company: 'CureMD',
      title: 'Lead Software Engineer',
      years: 'Sep 2020 - Sep 2021',
      mainTech: ['.NET Core', 'React'],
      technologies: ['C#', 'React', 'JavaScript', 'MSSQL', 'HTML', 'CSS', 'Bootstrap'],
      icon: "cib:dot-net"
    }, {
      company: 'CureMD',
      title: 'Principal Business Analyst',
      years: 'Dec 2019 - Sep 2020',
      mainTech: ['.NET Core', 'Azure DevOps'],
      technologies: ['.NET Core', 'Azure Pipelines', 'Azure Boards', 'Git', 'SharePoint'],
      icon: "simple-icons:azuredevops"
    }, {
      company: 'CureMD',
      title: 'Business Analyst',
      years: 'Sep 2018 - Nov 2019',
      mainTech: ['.NET Framework', 'SharePoint Server'],
      technologies: ['.NET Framework', 'SharePoint Server', 'HTML', 'CSS', 'JQuery', 'Bootstrap'],
      icon: "mdi:microsoft-sharepoint"
    }
  ])
  const [socials] = useState([{
    name: 'github',
    url: 'https://github.com/afroze9',
    icon: 'akar-icons:github-fill'
  }, {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/afroze-amjad/',
    icon: 'akar-icons:linkedin-box-fill'
  }])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Landing setTheme={setTheme} titles={titles} />
        <About />
        {/* <Projects / >*/}
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Footer socials={socials} />
      </div>
    </ThemeProvider>
  );
};

export default App;
