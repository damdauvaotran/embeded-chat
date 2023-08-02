/** Third party libs **/
import { AiOutlineSend } from 'react-icons/ai';

/** Local libs **/
import style from './Chat.module.css';
import Bubble from './Bubble';

/** Components **/

/** Styles **/

/** Interfaces, enum... **/
export interface ChatProps {}

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
    <div >
      <Bubble
        avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Bear&eyeType=Surprised&eyebrowType=Default&mouthType=Sad&skinColor=Pale"
        name="Obi-Wan Kenobi"
        time="12:45"
        content="You were the Chosen One!"
        isResponse
        footer="Delivered"
      />
      <Bubble
        avatar="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow"
        name="Anakin"
        content="I hate you!"
        time="12:46"
        footer="Seen at 12:46"
      />
      <div className={style.sendMessage}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div className="flex justify-end">
          <button className="btn btn-primary btn-circle">
            <AiOutlineSend className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
