
import { TimerIcon } from 'lucide-react';


import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading/Index';

export function App() {

  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>
          MENU
          <button><TimerIcon /></button>
        </Heading>
      </Container>

    </>
  )
}