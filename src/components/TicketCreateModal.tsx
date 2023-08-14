export interface ITicketCreateModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TicketCreateModal = ({ open, setOpen }: ITicketCreateModalProps) => {
  const handleSendTicket = async () => {
    console.log('send ticket');
    await sleep(1000);
    console.log('send ticket success');
    setOpen(false);
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <dialog className="modal bg-slate-400/50" open={open}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-2xl mb-4">Tạo ticket hỗ trợ</h3>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="support-type"
          >
            Chọn loại hỗ trợ
          </label>
          <select
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="support-type"
          >
            <option>Hỗ trợ thanh toán</option>
            <option>Hỗ trợ giao hàng</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Mô tả vấn đề của bạn
          </label>
          <textarea
            rows={5}
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Mô tả"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="attachment"
          >
            Đính kèm file
          </label>
          <input type="file" className="file-input w-full max-w-xs" />
        </div>
        <div className="modal-action">
          <button className="btn" type="submit" onClick={handleSendTicket}>
            Gửi
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default TicketCreateModal;
