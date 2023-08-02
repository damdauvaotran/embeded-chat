/** Third party libs **/
import { GrFormClose } from 'react-icons/gr';
import Chat from './Chat';
import classNames from 'classnames';

/** Local libs **/

/** Components **/

/** Styles **/

/** Interfaces, enum... **/
export interface ChatPopupProps {
  onClose: () => void;
  className?: string;
}

/** Variables **/

/** ------------------------- **/
const ChatPopup = ({ onClose, className }: ChatPopupProps) => {
  /** States **/

  /** Hooks **/

  /** Variables **/

  /** Effects **/

  /** Functions, Events, Actions... **/

  /** Elements **/
  return (
    <div
      className={classNames(
        String(className),
        'card w-96 bg-base-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 relative'
      )}
      id="teko-chat-modal"
    >
      <button
        className="btn btn-ghost btn-xs w-[30px] h-[30px] rounded-md border-none p-0 absolute top-2 right-2"
        onClick={onClose}
      >
        <GrFormClose className="text-3xl" />
      </button>
      <Chat />
    </div>
  );
};

export default ChatPopup;
