import React from 'react';
import styles from './index.module.scss';
import closeIcon from '../../images/mp1nheey-fajpxx2.svg';

const PrdModal = ({ onClose, exiting }) => {
  const handleClose = () => {
    onClose();
  };

  const overlayClass = exiting
    ? `${styles.modalOverlay} ${styles.modalOverlayExit}`
    : styles.modalOverlay;

  const frameClass = exiting
    ? `${styles.frame} ${styles.frameExit}`
    : `${styles.frame} ${styles.frameEnter}`;

  return (
    <div className={overlayClass} onClick={handleClose}>
      <div className={frameClass} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p className={styles.text}>PRD的提示词</p>
          <div className={styles.button} onClick={handleClose}>
            <img src={closeIcon} className={styles.container} alt="关闭" />
          </div>
        </div>
        <div className={styles.modalBodyScrollable}>
          <div className={styles.heading3}>
            <p className={styles.text5}>
              <span className={styles.text2}>
                # 意图识别
                <br />
              </span>
              <span className={styles.text3}>
                识别用户意图，并根据用户意图导向业务流程
                <br />
                <br />
              </span>
              <span className={styles.text2}>## </span>
              <span className={styles.text4}>
                定义意图路由
                <br />
              </span>
              <span className={styles.text3}>
                结合网上电商场景客服最佳实践，定义用户的意图以及业务路由，意图与流程需一一对应
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ###定义每个业务状态下所需的槽位设计
                <br />
              </span>
              <span className={styles.text3}>
                如退订单，需要获取哪些数据以支持业务流程的继续，以此为依据设计槽位
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ## 情绪判断
                <br />
              </span>
              <span className={styles.text3}>
                监测到用户不满时给予安抚，持续不满时提供"转接人工"按钮
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ## 异常兜底
                <br />
              </span>
              <span className={styles.text3}>
                无法识别用户意图或识别到的意图无法对应业务流程时反问澄清
                <br />
                连续反问澄清后仍无法进入正常业务流程的提供"转接人工"按钮
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                # 对话状态的管理
                <br />
                ## 支撑流程推进
                <br />
              </span>
              <span className={styles.text3}>
                保证业务流程能顺利推进
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ## 支撑识别意图切换
                <br />
              </span>
              <span className={styles.text3}>
                当用户在一个业务流程中表现出另一个意图，可以识别到意图变化并且切换业务流程。
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ## 支持异常恢复
                <br />
              </span>
              <span className={styles.text3}>
                当用户切换意图后又打算切换回去时，状态机能回调至之前业务流程节点，不用重走流程，以应对用户query的反复横跳的场景
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                # 记忆系统
                <br />
                ## 短期记忆
                <br />
              </span>
              <span className={styles.text3}>
                支持多轮对话，保证业务流程的连续性和完整性。
                <br />
                <br />
              </span>
              <span className={styles.text2}>
                ## 用户核心画像构建
                <br />
                ###槽位表单设计
                <br />
              </span>
              <span className={styles.text3}>
                参考行业最佳实践，设计对电商场景有价值的用户数据的槽位表单。
                <br />
                重要的、对电商行业价值高的槽位参数排在前面。
                <br />
                最终目标是通过数据给企业赋能，实现用户精细化运营。
              </span>
            </p>
          </div>
          <div className={styles.modalFooterActions}>
            <div className={styles.button2} onClick={handleClose}>
              <p className={styles.text6}>CLOSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdModal;
