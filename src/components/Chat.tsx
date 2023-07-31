/** Third party libs **/
import { AiOutlineSend } from 'react-icons/ai';

/** Local libs **/
import style from './Chat.module.css';

/** Components **/

/** Styles **/

/** Interfaces, enum... **/

/** Variables **/

/** ------------------------- **/
const Chat = ({}) => {
  /** States **/

  /** Hooks **/

  /** Variables **/

  /** Effects **/

  /** Functions, Events, Actions... **/

  /** Elements **/
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Bear&eyeType=Surprised&eyebrowType=Default&mouthType=Sad&skinColor=Pale" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className={style.sendMessage}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div>
          <button className="btn btn-primary btn-circle float-right">
            <AiOutlineSend className="text-2xl"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
