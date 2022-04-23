import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Badge from 'react-bootstrap/Badge';
import { Icon } from "@iconify/react";
import 'react-vertical-timeline-component/style.min.css';
import './Experience.component.css';

type IExperienceItem = {
  company: string;
  title: string;
  years: string;
  mainTech: string[];
  technologies: string[];
  icon: string;
}

export interface IExperienceProps {
  experiences: IExperienceItem[];
}

const EmptyTab = () => {
  return <></>;
}

const Experience = ({ experiences }: IExperienceProps) => {
  if (experiences.length === 0) {
    return <EmptyTab />;
  }

  const getMainTechMap = (mainTech: string[]) =>
    mainTech.map((tech, i) => <Badge pill className="main-badge mr-2 mb-2" key={i}>{tech}</Badge>)

  const getTechnologiesMap = (technologies: string[]) =>
    technologies.map((tech, i) => <Badge pill className="experience-badge mr-2 mb-2" key={i}>{tech}</Badge>)

  const getExperienceMap = () => {
    let work = experiences.map((exp, i) => {
      const techMap = getTechnologiesMap(exp.technologies);
      const mainTechMap = getMainTechMap(exp.mainTech);

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={exp.years}
          iconStyle={{
            background: "#baaa80",
            color: "#fff",
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
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
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
              background: "#baaa80",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<Icon icon="fa-solid:hourglass-start" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;