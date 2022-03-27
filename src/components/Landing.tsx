import { useState } from 'react';
import Switch from 'react-switch';
import { Icon, addCollection } from '@iconify/react';
import styled from 'styled-components';
import { lightTheme, darkTheme, ITheme } from '../themes';

const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ${props => props.theme.textColor};
`;

const CenterDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
`;

type ILandingProps = {
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>
}

const Landing = ({ setTheme }: ILandingProps) => {
  const [isDark, setIsDark] = useState(false);

  const onThemeSwitchChanged = (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string): void => {
    setIsDark(checked);
    setTheme(checked ? darkTheme : lightTheme);
  }

  return <Container>
    <CenterDiv>
      <Icon icon="bx:code-block" style={{
        display: 'block',
        fontSize: 20,
        textAlign: 'center',
        width: 150,
        height: 150
      }} />
    </CenterDiv>
    <H1>Afroze Amjad</H1>
    <CenterDiv>
      <Switch
        checked={isDark}
        onChange={onThemeSwitchChanged}
        offColor="#baaa80"
        onColor="#353535"
        width={90}
        height={40}
        uncheckedIcon={
          <Icon
            icon="emojione:full-moon-face"
            style={{
              display: 'block',
              height: '100%',
              fontSize: 25,
              marginLeft: "20px",
              textAlign: 'end',
              color: '#353239',
            }}
          />
        }
        checkedIcon={
          <Icon
            icon="emojione:sun-with-face"
            style={{
              display: 'block',
              height: '100%',
              fontSize: 25,
              textAlign: 'end',
              marginLeft: "10px",
              color: '#353239',
            }}
          />
        }
      ></Switch>
    </CenterDiv>
  </Container>
}

export default Landing;