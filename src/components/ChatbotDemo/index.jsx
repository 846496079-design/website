import React from 'react';
import styles from './index.module.scss';

const ChatbotDemo = () => {
  const chatbotUrl = process.env.REACT_APP_CHATBOT_URL || 'https://chatbot.aiplayerzero.cn/';
  
  return (
    <div className={styles.chatbotDemo}>
      <iframe
        src={chatbotUrl}
        className={styles.iframe}
        title="智能客服Demo"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default ChatbotDemo;