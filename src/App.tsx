import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const Title = styled.h1`
  font-size: 64px;
  color: #4f20bb;
`
export default function App() {
  return (
    <div className="App">
      <Title>Welcome. {11+20}</Title>
      <GlobalStyle />
    </div>
  );
}
