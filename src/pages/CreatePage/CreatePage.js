import React from 'react';
import styles from './CreatePage.module.scss'
import { Button } from '../../components/Button/Button';
import { useState } from 'react';

export function CreatePage() {
    const [inputname, setName] = useState('');
    const [desription, setdesription] = useState('');

    function handleName(e) {
        setName(e.currentTarget.value);
    }

    function handleDesription(e) {
        setdesription(e.currentTarget.value);
    }

    function handleCreate() {

    }

    return (
        <div className={styles["container"]}>
            {console.log(inputname, desription)}
            <div className={styles["form"]}>
                <span className={styles["title"]}>Create new item</span>
                <br />
                <div className={styles["uploader"]}> Вставь сюда картинку</div>
                <br />
                <input
                    placeholder='name'
                    onChange={handleName}
                    value={inputname} />
                <br />
                <input
                    placeholder='discription'
                    onChange={handleDesription}
                    value={desription} />
                <br />
                <Button title='Create' onClick={handleCreate} />
            </div>
        </div>
    );
}

