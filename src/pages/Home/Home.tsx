import React from 'react';
import stockVideo from 'asset/video/stockVideo.mp4';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

export function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbarText}>Tesla Body Shop</p>
      </div>
      <div className={styles.body}>
        <p />
        <h1 className={styles.title}>Just a title</h1>
        <button className={styles.button} type="button" onClick={() => navigate('/model-select')}>Start Building</button>
      </div>
      <video className={styles.video} autoPlay loop muted>
        <source src={stockVideo} type="video/mp4" />
      </video>
    </div>
  );
}
