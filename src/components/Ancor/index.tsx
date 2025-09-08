import styles from './styles.module.css';

// tipamos a propriedade do componente, obrigatorio
type AncorProps = { 
    children: React.ReactNode, // aceita string,number,outros components etc 
    link: string
}

export function Ancor({ children, link }:AncorProps) { 
    return <a className={styles.ancorLink} href={link}>{children}</a>
}