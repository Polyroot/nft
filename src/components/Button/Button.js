import styles from './Button.module.scss'

export function Button(props) {
    return (
        <button className={styles["button"]} onClick={props.onClick}>
            {props.title}
        </button>
    );
}

