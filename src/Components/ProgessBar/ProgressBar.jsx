import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ value, max }) => {

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(progress + value);
    }, []);

    return (
        <div className={styles.progressBar}>
            <label htmlFor="progress">Progress</label>
            <progress id="progress" value={progress} max={max}></progress>
        </div>
    );
};

export default ProgressBar;
