import styles from './CreatePage.module.scss'
import { Button } from '../../components/Button/Button';
import { useState } from 'react';

export function CreatePage() {

    return (
        <div className={styles["container"]}>
            <div className={styles["form"]}>
                <span className={styles["title"]}>Create new item</span>
                <br />
                <div className={styles["uploader"]}> Вставь сюда картинку</div>
                <br />
                <input placeholder='name' />
                <br />
                <input placeholder='discription' />
                <br />
                <Button title='Create' />
            </div>


        </div>
    );
}

