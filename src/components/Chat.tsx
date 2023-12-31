/** Third party libs **/
import { AiOutlineSend } from 'react-icons/ai';
import dayjs from 'dayjs';

/** Local libs **/
import style from './Chat.module.css';
import Bubble from './Bubble';
import { useState } from 'preact/hooks';
import { IAnswer, askQuestion } from '../services/question';
import TicketCreateModal from './TicketCreateModal';

/** Components **/

/** Styles **/

const supporterAvatar =
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Bear&eyeType=Surprised&eyebrowType=Default&mouthType=Sad&skinColor=Pale';
const userAvatar =
  'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Yellow';

/** Interfaces, enum... **/
export interface ChatProps {}
interface IMessage {
  avatar: string;
  name: string;
  time: string;
  content: string;
  isResponse?: boolean;
  footer?: string;
}

/** Variables **/

const createResponseMessage = (content: string) => {
  return {
    avatar: supporterAvatar,
    name: 'Support',
    time: dayjs().format('HH:mm'),
    content,
    isResponse: true,
  };
};

const createUserMessage = (content: string) => {
  return {
    avatar: userAvatar,
    name: 'Tôi',
    time: dayjs().format('HH:mm'),
    content,
    isResponse: false,
  };
};

/** ------------------------- **/
const Chat = ({}) => {
  /** States **/
  const [messages, setMessages] = useState<IMessage[]>([
    createResponseMessage('Chào bạn, bạn có thể hỏi tôi bất kỳ câu gì?'),
  ]);
  const [isShowSatisfactionChoose, setIsShowSatisfactionChoose] =
    useState(false);
  const [isShowSatisfactionDialog, setIsShowSatisfactionDialog] =
    useState(false);
  const [showInitialSupport, setShowInitialSupport] = useState(true);
  const [isShowRating, setIsShowRating] = useState(false);
  /** Hooks **/

  /** Variables **/

  /** Effects **/

  /** Functions, Events, Actions... **/
  const onChatSubmit = async (messageContent: string) => {
    if (messageContent) {
      if (showInitialSupport) {
        setShowInitialSupport(false);
      }
      let newMessages = [createUserMessage(messageContent), ...messages];
      setMessages(newMessages);

      const response = await askQuestion(messageContent);
      handleSupporterResponse(newMessages, response);
    }
  };

  const handleSupporterResponse = (messages: IMessage[], answer: IAnswer) => {
    const newMessages = [createResponseMessage(answer.text), ...messages];
    setMessages(newMessages);
    switch (answer.type) {
      case 'satisfaction': {
        setIsShowSatisfactionChoose(true);
        break;
      }
      case 'create_ticket': {
        setShowInitialSupport(true);
      }
    }
  };

  const handleYesAnswer = () => {
    setIsShowSatisfactionChoose(false);
    setMessages([
      createResponseMessage(
        'Cảm ơn bạn đã sử dụng dịch vụ. Mong bạn hãy đánh giá trải nghiệm hỗ trợ'
      ),
      ...messages,
    ]);
    setIsShowRating(true);
  };

  const handleNoAnswer = () => {
    setIsShowSatisfactionChoose(false);
    setIsShowSatisfactionDialog(true);
  };

  const handleSupportCreateTicket = () => {
    setShowInitialSupport(false);
    setIsShowSatisfactionDialog(true);
  };

  const handleSupportSearchTicket = () => {
    setShowInitialSupport(false);
    setMessages([
      createResponseMessage(
        'Để tra cứu trạng thái ticket, hay nhập mã ticket của bạn'
      ),
      ...messages,
    ]);
  };

  const handleRating = (_: MouseEvent) => {
    setIsShowRating(false);
    setMessages([
      createResponseMessage(
        'Cảm ơn bạn đã đánh giá trải nghiệm hỗ trợ của chúng tôi'
      ),
      ...messages,
    ]);
  };

  const onCreateTicketSuccess = (key: string) => {
    setMessages([
      createResponseMessage(
        `Ticket đã được tạo thành công, mã ticket của bạn là ${key}. Để tra cứu trạng thái ticket, hay nhập mã ticket của bạn`
      ),
      ...messages,
    ]);
  };

  /** Elements **/
  return (
    <div className="flex flex-col mt-5" style={{ height: 450 }}>
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
      {isShowSatisfactionChoose ? (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mx-1 hover:bg-cyan-700"
            onClick={handleYesAnswer}
          >
            Có
          </button>
          <button
            className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mx-1 hover:bg-cyan-700"
            onClick={handleNoAnswer}
          >
            Không
          </button>
        </div>
      ) : null}
      {showInitialSupport ? (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mx-1 hover:bg-cyan-700"
            onClick={handleSupportCreateTicket}
          >
            Tạo ticket
          </button>
          <button
            className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mx-1 hover:bg-cyan-700"
            onClick={handleSupportSearchTicket}
          >
            Tra cứu ticket
          </button>
        </div>
      ) : null}

      {isShowRating ? (
        <div className="rating flex justify-center">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={1}
            onClick={handleRating}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={2}
            onClick={handleRating}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={3}
            onClick={handleRating}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={4}
            onClick={handleRating}
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={5}
            onClick={handleRating}
          />
        </div>
      ) : null}

      <div className={style.sendMessage + ' flex-0 mt-2'}>
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
      <TicketCreateModal
        open={isShowSatisfactionDialog}
        setOpen={setIsShowSatisfactionDialog}
        onSubmitSuccess={onCreateTicketSuccess}
      />
    </div>
  );
};

export default Chat;
