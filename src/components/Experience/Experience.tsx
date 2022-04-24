import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
//import Badge from 'react-bootstrap/Badge';
import { Icon } from "@iconify/react";
import 'react-vertical-timeline-component/style.min.css';
import './Experience.component.css';
import EmptySection from "../EmptySection";
import styled, { useTheme } from "styled-components";
import { ITheme } from "../../themes";

const Section = styled.section`
  background-color: ${(props: { theme: ITheme }) => props.theme.primaryBackground};
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.25em 0.4em;
	font-size: 75%;
  font-weight: 700;
  line-height: 1;
	text-align: center;
  white-space: nowrap;
  border-radius: 10rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	vertical-align: baseline;
  background-color: ${props => props.theme.primaryAccent};
  color: white;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const TechnologyBadge = styled(Badge)`
  font-weight: 500;
  background-color: ${props => props.theme.primaryAccent};
`;

type ExperienceItem = {
  company: string;
  title: string;
  years: string;
  mainTech: string[];
  technologies: string[];
  icon: string;
}

export interface IExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: IExperienceProps) => {
  const theme = useTheme() as ITheme;

  if (experiences.length === 0) {
    return <EmptySection />;
  }

  const getMainTechMap = (mainTech: string[]) =>
    mainTech.map((tech, i) => <Badge className="main-badge mr-2 mb-2" key={i}>{tech}</Badge>)

  const getTechnologiesMap = (technologies: string[]) =>
    technologies.map((tech, i) => <TechnologyBadge className="mr-2 mb-2" key={i}>{tech}</TechnologyBadge>)

  const getExperienceMap = () => {
    const work = experiences.map((exp, i) => {
      const techMap = getTechnologiesMap(exp.technologies);
      const mainTechMap = getMainTechMap(exp.mainTech);

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          style={{ color: 'white' }}
          contentStyle={{ background: theme.ternary, boxShadow: `0 3px 0 ${theme.ternary}`, color: theme.textColor }}
          date={exp.years}
          iconStyle={{
            background: theme.primaryAccent,
            color: theme.primaryAccentText,
            textAlign: "center",
          }}
          icon={<Icon icon={exp.icon} />}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTechMap}</div>
          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {exp.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {exp.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{techMap}</div>
        </VerticalTimelineElement>
      )
    });

    return work;
  }

  return (
    <Section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: theme.textColor }}>
            <span style={{ textAlign: "center" }}>
              Experience
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {getExperienceMap()}
          <VerticalTimelineElement
            iconStyle={{
              background: theme.primaryAccent,
              color: theme.primaryAccentText,
              textAlign: "center",
            }}
            icon={<Icon icon="fa-solid:hourglass-start" />}
          />
        </VerticalTimeline>
      </div>
    </Section>
  );
}

export default Experience;