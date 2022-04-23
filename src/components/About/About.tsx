import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
`;

const Polaroid = styled.div`
  background-color: ${props => props.theme.tertiary};
	display: inline-block;
	margin: 55px 75px 30px;
	padding: 15px 15px 30px;
	text-align: center;
	text-decoration: none;
	-webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
	box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
	-webkit-transition: all .20s linear;
	-moz-transition: all .20s linear;
	transition: all .20s linear;
	z-index: 0;
	position: relative;
`;

const PolaroidImage = styled.img`
  display: block;
	max-width: 200px;
`;

const Card = styled.div`
  border: 1px solid ${props => props.theme.ternaryBorder};
`;

const CardHeader = styled.div`
  background-color: ${props => props.theme.ternary};
`;

const CardBody = styled.div`
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.textColor};
`;

const About = () => {
  return (
    <Section id="about">
      <div className="col-md-12">
        <h1 className="section-title">
          <span>About Me</span>
        </h1>
        <div className="row center-aligner mx-auto mb-5">
          <div className="col-md-4 mb-5 center-aligner">
            <Polaroid>
              <span>
                <PolaroidImage src="images/profile.png" alt="Avatar" height={250} />
                <Icon icon="logos:c-sharp"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                />
                <Icon icon="logos:react"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%", color: "#0078D4" }}
                />
                <Icon icon="vscode-icons:file-type-azurepipelines"
                  style={{ fontSize: "250%", margin: "9% 5% 0 5%", color: "#0078D4" }}
                />
              </span>
            </Polaroid>
          </div>

          <div className="col-md-8 center-aligner">
            <div className="col-md-10">
              <Card className='card'>
                <CardHeader className="card-header">
                  <Icon icon="emojione:red-circle" />
                  <Icon icon="twemoji:yellow-circle" className="ml-10" />
                  <Icon icon="twemoji:green-circle" className="ml-10" />
                </CardHeader>
                <CardBody className="card-body text-justify ml-3 mr-3">
                  <br />
                  <span className="wave">Hi!</span>
                  <br />
                  <br />
                  I am a Software Engineer and like to dabble in code; creating integrations between platforms and services.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About;