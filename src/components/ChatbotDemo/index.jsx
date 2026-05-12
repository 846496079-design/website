import React from 'react';
import styles from './index.module.scss';

const ChatbotDemo = () => {
  return (
    <div className={styles.chatbotDemo}>
      <iframe
        src="https://chatbot.aiplayerzero.cn/"
        className={styles.iframe}
        title="智能客服Demo"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default ChatbotDemo;