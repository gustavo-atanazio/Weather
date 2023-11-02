import styles from './Container.module.css';

interface ContainerProps {
    padding?: string | number
    children: React.ReactNode
}

function Container({ padding, children }: ContainerProps) {
    return (
        <div className={styles.container} style={{ padding: padding }}>
            {children}
        </div>
    )
}

export default Container;