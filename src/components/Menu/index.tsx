import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Ancor } from '../Ancor';
import { useState , useEffect} from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {

   const [theme,setTheme] = useState<AvailableThemes>(()=>{
      const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
      return storageTheme;
   })

   const nextThemeIcon = { 
      dark: <SunIcon/>,
      light:<MoonIcon/>
   }

   function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) { 
     
      event.preventDefault();      
      setTheme(prevTheme => { 
         const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
         return nextTheme;
      });           
   }

   // rodou a function de onClick então os componentes renderizaram de novo

   useEffect(()=>{         
         // muda o atributo da chave data-theme em html pata o valor da variavel theme
         document.documentElement.setAttribute('data-theme',theme)

         localStorage.setItem('theme',theme)

         return() => {} // função clean_Up executará limpando as sujeiras 
         // deixadas pelos componentes da renderização anterior
         // toda vez que theme mudar pelo onClick / setTheme 

   },[theme]); // este hook só vai executar quando o valor de theme mudar por setTheme

    return <nav className={styles.menu}>         

        <Ancor link='#' label='Ir para home' title='Ir para home'>
           <HouseIcon/>
        </Ancor>
        <Ancor link='#' label='Ver histórico' title='Ver histórico' > 
           <HistoryIcon/>
        </Ancor>
        <Ancor link='#' label='Configurações' title='Configurações'>
           <SettingsIcon/>
        </Ancor>
        <Ancor  arial-labial='Mudar tema' title='Mudar tema' clique={handleThemeChange}>
           {nextThemeIcon[theme]}           
        </Ancor> 
        
    </nav>
}