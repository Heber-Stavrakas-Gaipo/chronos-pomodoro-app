import { Container } from './components/Container';
import { Content } from './components/Content';
import { Logo } from './components/Logo';

import './theme.css';
import './global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';

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
      <Container>
        <Content>
          <CountDown />
        </Content>
      </Container>
      <Container>
        <Content>
          <form className='form' action=''>
            <div className='formRow'>
              <Input id='inputTask' type='text' />
            </div>
            <div className='formRow'>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
              <p>Ciclos</p>
              <p>0 0 0 0 0</p>
            </div>
            <div className='formRow'>
              <button>Enviar</button>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default App;
