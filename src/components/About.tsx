import { Icon } from '@iconify/react';
import styled from 'styled-components';
import './About.component.css';

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
    <section id="about">
      <div className="col-md-12">
        <h1>
          <span>About Me</span>
        </h1>
        <div className="row center-aligner mx-auto mb-5">
          <div className="col-md-4 mb-5 center-aligner">
            <div className="polaroid">
              <span>
                <img src="images/profile.png" alt="Avatar" height={250} />
                <Icon icon="logos:c-sharp"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                />
                <Icon icon="logos:react"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%", color: "#0078D4" }}
                />
                <Icon icon="vscode-icons:file-type-azurepipelines"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%", color: "#0078D4" }}
                />
                {/* <Icon icon="simple-icons:microsoftsharepoint"
                  style={{ fontSize: "200%", margin: "9% 5% 0 5%", color: "#036C70" }}
                /> */}
              </span>
            </div>
          </div>

          <div className="col-md-8 center-aligner">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <Icon icon="emojione:red-circle" />
                  <Icon icon="twemoji:yellow-circle" className="ml-10" />
                  <Icon icon="twemoji:green-circle" className="ml-10" />
                </div>
                <div className="card-body text-justify ml-3 mr-3">
                  <br />
                  <span className="wave">Hi!</span>
                  <br />
                  <br />
                  I am a Software Engineer and like to dabble in code; creating integrations between platforms and services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;