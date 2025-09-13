import styles from './styles.module.css';

type AncorProps = {
  children: React.ReactNode
  link?: string
  label?: string
  title?: string
  clique?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void //foi passada o evento da propriedade onClick
}

export function Ancor({ children, link,label,title,clique }:AncorProps) { 
    return <a className={styles.ancorLink} href={link} aria-label={label} title={title} onClick={clique}>{children}</a>
}