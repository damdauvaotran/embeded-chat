/** Third party libs **/
import classNames from 'classnames';

/** Local libs **/

/** Components **/

/** Styles **/

/** Interfaces, enum... **/
interface BubbleProps {
  isResponse?: boolean;
  avatar: string;
  name: string;
  time: string;
  content: string;
  footer?: string;
}

/** Variables **/

/** ------------------------- **/
const Bubble = ({
  isResponse = false,
  name,
  content,
  time,
  avatar,
  footer,
}: BubbleProps) => {
  /** States **/

  /** Hooks **/

  /** Variables **/

  /** Effects **/

  /** Functions, Events, Actions... **/

  /** Elements **/
  return (
    <div className={classNames('chat', isResponse ? 'chat-start' : 'chat-end')}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={avatar} />
        </div>
      </div>
      <div className="chat-header">
        {name}
        <time className="text-xs opacity-50 ml-1">{time}</time>
      </div>
      <div className="chat-bubble">
        {content.split('\n').map((paragraph) => (
          <div>{paragraph}</div>
        ))}
      </div>
      {footer ? <div className="chat-footer opacity-50">{footer}</div> : null}
    </div>
  );
};

export default Bubble;
