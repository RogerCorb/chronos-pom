import styles from './Heading.module.css';

// tipamos a propriedade do componente, obrigatorio
type HeadingProps = { 
    children: React.ReactNode;  // aceita string,number,outros components etc 
}

export function Heading({ children }:HeadingProps) { 
    return <h1 className={styles.heading}>{children}</h1>
}