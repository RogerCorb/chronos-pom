import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {

  console.log('oi');

  return (
    <>
      <Heading/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}