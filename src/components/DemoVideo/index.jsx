import React from 'react';
import styles from './index.module.scss';
import demoVideo from '../../../video/素材演示剪辑.mp4';

const DemoVideo = () => {
  return (
    <div className={styles.demoVideo}>
      <video
        className={styles.video}
        src={demoVideo}
        controls
        controlsList="nodownload"
        preload="metadata"
      >
        您的浏览器不支持视频播放
      </video>
    </div>
  );
};

export default DemoVideo;