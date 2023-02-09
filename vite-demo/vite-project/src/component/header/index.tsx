import * as React from 'react';
import { Component } from 'react';
import styles from './index.module.scss';

export function Header(){
    return (
        <div><h1 className={styles.header}>Header</h1></div>
    )
}