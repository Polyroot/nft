import styles from './Navbar.module.scss'
import { Button } from '../Button/Button';

export function Navbar() {

    function handleCreate() {
        alert('epta')
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>NFT Generator</div>
            {/* <div className={styles["button"]} onClick={handleCreate}>Create</div> */}
            <Button title='Create' />

        </div>
    );
}

