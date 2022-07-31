import styles from './Navbar.module.scss'
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { ethers } from 'ethers';

export function Navbar() {
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = async () => {
            if (!ethereum) {
                sethaveMetamask(false);
            }
            sethaveMetamask(true);
        };
        checkMetamaskAvailability();
    }, []);

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                sethaveMetamask(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            let balance = await provider.getBalance(accounts[0]);
            let bal = ethers.utils.formatEther(balance);
            setAccountAddress(accounts[0]);
            setAccountBalance(bal);
            setIsConnected(true);
        } catch (error) {
            setIsConnected(false);
        }
    };

    function handleCreate() {
        alert('epta')
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>NFT Generator</div>

            <div className={styles["container1"]}>
                {isConnected ? (
                    <div
                        className={styles["account"]}
                        onClick={connectWallet}
                    >
                        <span className={styles["item"]}>
                            Account: {accountAddress}
                        </span>
                        <span className={styles["item"]}>
                            Balance: {accountBalance}
                        </span>
                    </div>
                ) : (
                    <Button title='Connect' onClick={connectWallet} />
                )}
                <div style={{ paddingLeft: '10px' }}>
                    <Button title='Create' />
                </div>
            </div>
        </div >
    );
}

