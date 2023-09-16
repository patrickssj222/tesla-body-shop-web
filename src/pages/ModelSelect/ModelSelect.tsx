import React from 'react';
import modelX from 'asset/img/whiteModelX.png';
import { useNavigate } from 'react-router-dom';
import styles from './ModelSelect.module.scss';

export function ModelSelect() {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbarText}>Tesla Body Shop</p>
      </div>
      <div className={styles.body}>
        <h1>Select Your Model</h1>
        <button type="button" className={styles.modelCard} onClick={() => navigation('/model-edit')}>
          <img className={styles.modelImage} src={modelX} alt="Model X" />
          <p className={styles.modelText}> Model X </p>
        </button>
      </div>
    </div>
  );
}
