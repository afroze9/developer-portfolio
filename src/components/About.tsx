import styled from 'styled-components';
import { CenterDiv, H1 } from './StyledComponents';

const AboutContainer = styled.div`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <CenterDiv>
        <H1>About Me</H1>
      </CenterDiv>
    </AboutContainer>
  )
}

export default About;