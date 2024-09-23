import React from 'react'
import styles from './styles.module.css'; // นำเข้า CSS module

export default function page() {
    
  return (
    <div className={styles.comming}>
  <div className={styles.textcenter1}>
    <div className={styles.outer}>
      <div className={styles.dot}></div>
      <div className={styles.card}>
        <div className={styles.ray}></div>
        <div className={styles.text}>Comming soon</div>
        <div className={`${styles.line} ${styles.topl}`}></div>
        <div className={`${styles.line} ${styles.leftl}`}></div>
        <div className={`${styles.line} ${styles.bottoml}`}></div>
        <div className={`${styles.line} ${styles.rightl}`}></div>
      </div>
    </div>
  </div>
</div>

  )
}
