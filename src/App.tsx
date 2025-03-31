import { Container } from './components/Container';
import { Content } from './components/Content';
import { Logo } from './components/Logo';

import './theme.css';
import './global.css';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <Container>
        <Content>
          <Logo />
        </Content>
      </Container>
      <Container>
        <Content>
          <Menu />
        </Content>
      </Container>
    </>
  );
}

export default App;
