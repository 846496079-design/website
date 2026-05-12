import React from 'react';
import styles from './index.module.scss';
import zhuImage from '../../images/mp1nhefg-mt1n40h.png';

const ZhiZhuBoYi = ({ onBack, exiting }) => {
  const pageClass = exiting
    ? `${styles.frame2} ${styles.frame2Exit}`
    : `${styles.frame2} ${styles.frame2Enter}`;

  return (
    <div className={pageClass}>
      <div className={styles.backButton} onClick={onBack}>
        ← 返回主页
      </div>
      <div className={styles.frame1}>
        <img 
          src={zhuImage}
          className={styles.frame} 
          alt="智猪博弈" 
        />
        <p className={styles.text}>
          科技大厂通过烧钱换取的先发优势的军备竞赛，有高额溢价！数据才是可沉淀，低成本，最具性价比的资产。
        </p>
      </div>
    </div>
  );
};

export default ZhiZhuBoYi;
