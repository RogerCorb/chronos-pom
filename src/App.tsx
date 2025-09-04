import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';


export function App() { 

  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon/>
        </button>
      </Heading>           
    </>
  )
}