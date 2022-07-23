import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button';
import { useState } from 'react';

export function HomePage() {

    const [openMenu, setOpenMenu] = useState(false)

    function handleGenerate() {
        alert('hello epta')
    }
    return (
        <div className={styles["container"]}>
            <div className={styles["button"]}>
                <span className={styles["span"]}>
                    Generate your NFT token, right now!
                </span>
                <Link to='/create-nft'>
                    <Button title='Сгенерировать NFT' />
                </Link>
            </div>
        </div>
    );
}

