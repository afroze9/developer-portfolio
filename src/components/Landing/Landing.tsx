import { useState } from 'react';
import Switch from 'react-switch';
import { Icon } from '@iconify/react';
import { lightTheme, darkTheme, ITheme } from '../../themes';
import { H1 } from '../StyledComponents';
import styled from 'styled-components';
import './Landing.component.css';
import Typewriter from 'typewriter-effect';

const Header = styled.header`
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.textColor};
`;

type ILandingProps = {
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
  titles: string[];
}

const Landing = ({ setTheme, titles }: ILandingProps) => {
  const [isDark, setIsDark] = useState(false);

  const titleProvider: string[] = titles.map(t => t.toUpperCase());

  const onThemeSwitchChanged = (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string): void => {
    setIsDark(checked);
    setTheme(checked ? darkTheme : lightTheme);
  }

  return <Header>
    <div className="row center-aligner full-height">
      <div className="col-md-12">
        <div>
          <Icon icon="bx:code-block" className="header-icon" />
          <H1 className="mb-0">Afroze Amjad</H1>
          <Typewriter
            options={{
              strings: titleProvider,
              autoStart: true,
              loop: true,
              delay: 50,
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-wrapper',
              cursor: '_',
            }}
          />
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
                className="toggle-icon ml-20"
              />
            }
            checkedIcon={
              <Icon
                icon="emojione:sun-with-face"
                className="toggle-icon ml-10"
              />
            }
          ></Switch>
        </div>
      </div>
    </div>
  </Header>
}

export default Landing;