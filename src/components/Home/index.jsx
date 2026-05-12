import React from 'react';
import styles from './index.module.scss';
import ChatbotDemo from '../ChatbotDemo';
import DemoVideo from '../DemoVideo';
import icon0nygsr7 from '../../images/mp1nheeo-0nygsr7.svg';
import icon922fel9 from '../../images/mp1nheeo-922fel9.svg';
import iconp85g2ef from '../../images/mp1nheeo-p85g2ef.svg';
import iconnv4u5wu from '../../images/mp1nheeo-nv4u5wu.svg';
import iconmj200ct from '../../images/mp1nheeo-mj200ct.svg';
import iconi6h9k9t from '../../images/mp1nheeo-i6h9k9t.svg';
import icon0gulu12 from '../../images/mp1nheeo-0gulu12.svg';
import iconxa1viis from '../../images/mp1nheeo-xa1viis.svg';
import iconjtj3ack from '../../images/mp1nheeo-jtj3ack.svg';
import iconqjqehpe from '../../images/mp1nheeo-qjqehpe.svg';
import imagehq0fb1b from '../../images/mp1nheet-hq0fb1b.png';
import portraitImage from '../../images/mp1nhees-3c4g9x6.png';

const Home = ({ onOpenZhiZhu, onOpenPrd }) => {
  const portraitStyle = {
    backgroundImage: `url(${portraitImage})`,
  };

  const handleScrollToDemo = () => {
    const demoElement = document.querySelector(`.${styles.demo}`);
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.frame23}>
      <div className={styles.main}>
        <div className={styles.frame5}>
          <div className={styles.professionalPortrait} style={portraitStyle}></div>
          <div className={styles.frame4}>
            <div className={styles.frame2}>
              <div className={styles.frame}>
                <p className={styles.text}>袁 梦</p>
                <div className={styles.autoWrapper}>
                  <div className={styles.line2}></div>
                </div>
                <p className={styles.text2}>AI产品经理</p>
              </div>
            </div>
            <p className={styles.text3}>
              感谢您宝贵的时间！
              <br />
              本人拥有多领域工程数字化背景，致力于用AI技术解决真实的商业痛点，
            </p>
            <div className={styles.frame3}>
              <div className={styles.overlay}>
                <p className={styles.text4}>持续学习</p>
              </div>
              <div className={styles.overlay}>
                <p className={styles.text4}>结构化思维</p>
              </div>
              <div className={styles.overlay}>
                <p className={styles.text4}>Vibe coding</p>
              </div>
              <div className={styles.overlay}>
                <p className={styles.text4}>项目管理</p>
              </div>
            </div>
            <div className={styles.button} onClick={handleScrollToDemo}>
              <div className={styles.buttonShadow}>
                <p className={styles.text5}>查看作品</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.demo}>
          <div className={styles.frame6}>
            <p className={styles.text6}>Customer Service Agent | 智能客服Demo</p>
            <p className={styles.text7}>
              AI驱动的智能客服解决方案，提升效率，优化体验，创造价值。
            </p>
          </div>
          <div className={styles.frame18}>
            <div className={styles.frame10} onClick={onOpenZhiZhu}>
              <div className={styles.frame8}>
                <div className={styles.frame7}>
                  <img
                    src={icon0nygsr7}
                    className={styles.container}
                    alt="逻辑起点"
                  />
                </div>
                <p className={styles.text8}>逻辑起点</p>
              </div>
              <p className={styles.text11}>
                <span className={styles.text9}>核心策略：</span>
                <span className={styles.text10}>“智猪博弈”</span>
              </p>
              <div className={styles.container2}>
                <p className={styles.text14}>
                  <span className={styles.text12}>Q：</span>
                  <span className={styles.text13}>
                    AI时代，最有性价比的护城河是什么？
                    <br />
                  </span>
                  <span className={styles.text12}>A：</span>
                  <span className={styles.text13}>
                    模型？算法？专利？基础设施？
                    <br />
                  </span>
                  <span className={styles.text12}>
                    B：数据！
                  </span>
                  <span className={styles.text13}>
                    <br />
                    基于成熟的技术，以
                  </span>
                  <span className={styles.text12}>数据的收集和治理</span>
                  <span className={styles.text13}>
                    为核心，构建智能客服机器人。
                  </span>
                </p>
                <img
                  src={icon922fel9}
                  className={styles.frame22}
                  alt="装饰"
                />
              </div>
              <div className={styles.frame9}>
                <div className={styles.overlayShadow}>
                  <p className={styles.text15}>01</p>
                </div>
              </div>
            </div>
            <img
              src={iconp85g2ef}
              className={styles.arrowRight}
              alt="箭头"
            />
            <div className={styles.frame13} onClick={onOpenPrd}>
              <div className={styles.frame11}>
                <div className={styles.background}>
                  <img
                    src={iconnv4u5wu}
                    className={styles.container}
                    alt="提示词"
                  />
                </div>
                <p className={styles.text16}>提示词</p>
              </div>
              <div className={styles.container3}>
                <p className={styles.text17}>
                  以数据的收集和治理为核心
                  <br />
                  构建支持多轮对话的智能客服Agent
                  <br />
                  识别用户意图和情绪状态
                  <br />
                  导向具体的业务路由。
                </p>
                <img src={iconmj200ct} className={styles.icon} alt="装饰1" />
                <img src={iconmj200ct} className={styles.icon2} alt="装饰2" />
                <img src={iconmj200ct} className={styles.icon3} alt="装饰3" />
                <img src={iconmj200ct} className={styles.icon4} alt="装饰4" />
              </div>
              <div className={styles.frame12}>
                <div className={styles.overlayShadow2}>
                  <p className={styles.text15}>02</p>
                </div>
              </div>
            </div>
            <img
              src={iconi6h9k9t}
              className={styles.arrowRight}
              alt="箭头"
            />
            <div className={styles.frame17}>
              <div className={styles.frame15}>
                <div className={styles.frame14}>
                  <img
                    src={icon0gulu12}
                    className={styles.container4}
                    alt="PRD"
                  />
                </div>
                <p className={styles.text18}>控制开发的PRD</p>
                <div className={styles.backgroundBorder}>
                  <div className={styles.overlayShadow2}>
                    <p className={styles.text15}>03</p>
                  </div>
                </div>
              </div>
              <p className={styles.text19}>人工审核，细节把控</p>
              <div className={styles.frame16} onClick={() => window.open('https://github.com/846496079-design/Chatbot/releases/download/v1.0/PRD.md', '_blank')}>
                <p className={styles.dowNload}>DOWNLOAD</p>
                <img
                  src={iconxa1viis}
                  className={styles.container5}
                  alt="下载"
                />
              </div>
            </div>
          </div>
          <div className={styles.frame19}>
            <div className={styles.container6}>
              <p className={styles.title}>Demo Video | 实操演示</p>
            </div>
            <DemoVideo />
          </div>
          <div className={styles.frame20}>
            <div className={styles.container7}>
              <p className={styles.title}>Interactive Demo | 实操体验</p>
              <div className={styles.noticeIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="#e74c3c" strokeWidth="1.5" fill="none" />
                  <path d="M10 6V11" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="14" r="0.75" fill="#e74c3c" />
                </svg>
                <div className={styles.noticeTooltip}>
                  <p>由于Demo后端部署采用Render服务</p>
                  <p>Render 免费服务有 15 分钟无请求会休眠的机制</p>
                  <p>首次请求可能需要 30-60 秒唤醒服务</p>
                  <p>如果长时间无响应，可能是服务在休眠，片刻后再试即可</p>
                </div>
              </div>
            </div>
            <ChatbotDemo />
          </div>
        </div>
      </div>
      <div className={styles.frame21}>
        <p className={styles.text6}>Get In Touch | 联系我</p>
        <div className={styles.container12}>
          <div className={styles.background2}>
            <div className={styles.overlay2}>
              <img
                src={iconjtj3ack}
                className={styles.container8}
                alt="电话"
              />
            </div>
            <div className={styles.container9}>
              <p className={styles.text20}>Phone</p>
              <p className={styles.text21}>+86 18883227982</p>
            </div>
          </div>
          <div className={styles.background3}>
            <div className={styles.overlay3}>
              <img
                src={iconqjqehpe}
                className={styles.container10}
                alt="邮箱"
              />
            </div>
            <div className={styles.container11}>
              <p className={styles.text20}>Email</p>
              <a href="mailto:846496079@qq.com" className={styles.link846496079QqCom}>
                846496079@qq.com
              </a>
            </div>
          </div>
          <div className={styles.background4}>
            <div className={styles.backgroundBorder2}>
              <img
                src={imagehq0fb1b}
                className={styles.weChatQrCode}
                alt="微信二维码"
              />
            </div>
            <p className={styles.text22}>微信</p>
          </div>
        </div>
      </div>
      <div className={styles.container13}>
        <p className={styles.a2026Aiproductmanage}>
          © 2026 AI PRODUCT MANAGER. BUILT WITH WARM MINIMALISM.
        </p>
      </div>
    </div>
  );
};

export default Home;
