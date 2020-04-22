import React from 'react'

import styles from './Controller.module.css';

const controller = (props) => (
    <div className={styles.controller}>
        <div className={styles.label}>
        {props.label}
        </div>
        <button 
        className={styles.less}
        onClick={props.ingDel}
        disabled={props.disabled}>
        Less
        </button>
        <button 
        className={styles.more} 
        onClick={props.ingAdd}>
        More
        </button>
    </div>
)

export default controller