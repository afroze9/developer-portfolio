import { useEffect, useState } from "react";
import styled from "styled-components";
import { CenterDiv, H1 } from "./StyledComponents";
import { getStarredRepos } from "../services/GitHubService";

const AboutContainer = styled.div`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type IProjectProps = {
  title: string;
  description: string;
  link: string;
}

const Project = ({ title, description, link }: IProjectProps) => {
  return (
    <div className="card col-sm-12 col-md-6 col-lg-4" >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">Open on Github</a>
      </div>
    </div>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState<IProjectProps[]>([]);

  useEffect(() => {
    getStarredRepos('afroze9', 'afroze9')
      .then(repos => {
        let mappedProjects = repos.map(r => ({
          title: r.name,
          description: r.description,
          link: r.git_url
        }));
        setProjects(mappedProjects);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <AboutContainer>
      <CenterDiv>
        <H1>Projects</H1>
        <div className="container">
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              {
                projects.map(i => <Project key={i.title} {...i} />)
              }
            </div>
          </div>
        </div>
      </CenterDiv>
    </AboutContainer>
  )
}

export default Projects;