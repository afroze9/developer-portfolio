import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Landing setTheme={setTheme} titles={titles} />
        <About />
        {/* <Projects / >
        <Skills />
        <Experience />
        <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
