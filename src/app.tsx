import { useEffect, useState } from 'preact/hooks';
import { FaRobot } from 'react-icons/fa';
import { animated, useTransition, useSpringRef } from '@react-spring/web';

import './app.css';
import ChatPopup from './components/ChatPopup';

export function App() {
  const [showChat, setShowChat] = useState(false);

  const transRef = useSpringRef();
  const transitions = useTransition(showChat, {
    ref: transRef,
    from: { scale: 0, translateY: 100, opacity: 0 },
    enter: { scale: 1, translateY: 0, opacity: 1 },
    leave: { scale: 0, translateY: -100, opacity: 0 },
    config: {
      duration: 200,
    },
  });

  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  useEffect(() => {
    transRef.start();
  }, [showChat]);

  return (
    <>
      {transitions((style, showChat) => {
        return showChat ? (
          <div className="fixed bottom-3 right-3">
            <animated.div style={style}>
              <ChatPopup onClick={closeChat} />
            </animated.div>
          </div>
        ) : (
          <div className="fixed bottom-3 right-3">
            <animated.div style={style}>
              <button
                className="btn btn-circle btn-primary btn-lg"
                onClick={openChat}
              >
                <FaRobot className="text-3xl" />
              </button>
            </animated.div>
          </div>
        );
      })}
    </>
  );
}
