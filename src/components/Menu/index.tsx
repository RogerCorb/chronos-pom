import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Ancor } from '../Ancor';


export function Menu() {
    return <nav className={styles.menu}>

        <Ancor link='https:/google.com.br'>
           <HouseIcon/>
        </Ancor>
        <Ancor link='https:/google.com.br'>
           <HistoryIcon/>
        </Ancor>
        <Ancor link='https:/google.com.br'>
           <SettingsIcon/>
        </Ancor>
        <Ancor link='https:/google.com.br'>
           <SunIcon/>
        </Ancor> 
        
    </nav>
}