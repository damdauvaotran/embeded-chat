/** Third party libs **/
import { AiOutlineSend } from 'react-icons/ai';

/** Local libs **/
import style from './Chat.module.css';
import Bubble from './Bubble';
import { useState } from 'preact/hooks';

/** Components **/

/** Styles **/

/** Interfaces, enum... **/
export interface ChatProps {}
interface IMessage {
  avatar: string;
  name: string;
  time: string;
  content: string;
  isResponse?: boolean;
  footer: string;
}

/** Variables **/

/** ------------------------- **/
const Chat = ({}) => {
  /** States **/
  const [messages, setMessages] = useState<IMessage[]>([
    {
      avatar:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Bear&eyeType=Surprised&eyebrowType=Default&mouthType=Sad&skinColor=Pale',
      name: 'Obi-Wan Kenobi',
      time: '12:45',
      content: 'You were the Chosen One!',
      isResponse: true,
      footer: 'Delivered',
    },
    {
      avatar:
        'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow',
      name: 'Anakin',
      content: 'I hate you!',
      time: '12:46',
      isResponse: false,
      footer: 'Seen at 12:46',
    },
  ]);

  const onChatSubmit = (messageContent: string) => {
    setMessages([
      {
        avatar:
          'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow',
        name: 'Anakin',
        content: messageContent,
        time: '12:46',
        isResponse: false,
        footer: 'Seen at 12:46',
      },
      ...messages,
    ]);
  };

  /** Hooks **/

  /** Variables **/

  /** Effects **/

  /** Functions, Events, Actions... **/

  /** Elements **/
  return (
    <div className="flex flex-col mt-5" style={{ height: 500 }}>
      <div className="flex flex-1 overflow-auto flex-col-reverse">
        {messages.map((message) => (
          <Bubble
            avatar={message.avatar}
            name={message.name}
            time={message.time}
            content={message.content}
            isResponse={message.isResponse}
            footer={message.footer}
          />
        ))}
      </div>
      <div className={style.sendMessage + ' flex-0 '}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onChatSubmit(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
        <div className="flex justify-end">
          <button
            className="btn btn-primary btn-circle"
            onClick={() => {
              const input = document.querySelector(
                'input.input-bordered'
              ) as HTMLInputElement;
              onChatSubmit(input.value);
              input.value = '';
            }}
          >
            <AiOutlineSend className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
