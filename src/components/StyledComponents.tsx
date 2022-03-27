import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ${props => props.theme.textColor};
`;

const CenterDiv = styled.div`
  margin-left:auto;
  margin-right:auto;
`;

export { H1, CenterDiv }