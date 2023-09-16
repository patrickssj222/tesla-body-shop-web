import React, { useState } from 'react';
import whiteModelX from 'asset/img/whiteModelX.png';
import blackModelX from 'asset/img/blackModelX.png';

import clsx from 'clsx';
import styles from './ModelEdit.module.scss';

export function ModelEdit() {
  const black = 'black';
  const white = 'white';
  const [color, setColor] = useState(white);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbarText}>Tesla Body Shop</p>
      </div>
      <div className={styles.body}>
        <div className={styles.editCanvas}>
          <div className={styles.canvasCard}>
            <img className={styles.canvasImage} src={color === white ? whiteModelX : blackModelX} alt="Model X" />
          </div>
          <div className={styles.verticalDivider} />
          <div className={styles.canvasOptionPickerWrapper}>
            <h1>Select Your Color</h1>
            <div className={styles.optionPicker}>
              <button type="button" className={clsx([styles.colorPill, styles.white])} onClick={() => setColor(white)} />
              <button type="button" className={clsx([styles.colorPill, styles.black])} onClick={() => setColor(black)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
