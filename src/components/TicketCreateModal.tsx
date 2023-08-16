import { useForm } from 'react-hook-form';
import { ICreateTicketRequest, createTicket } from '../services/question';
import { useState } from 'preact/hooks';
import { GrFormClose } from 'react-icons/gr';

export interface ITicketCreateModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmitSuccess?: (key: string) => void;
}

const TicketCreateModal = ({
  open,
  setOpen,
  onSubmitSuccess,
}: ITicketCreateModalProps) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateTicketRequest>();

  const onSubmit = async (values: ICreateTicketRequest) => {
    try {
      setSubmitLoading(true);
      const data = await createTicket(values);
      // clear form
      reset();
      onSubmitSuccess?.(data.key);
      setOpen(false);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitLoading(false);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <dialog className="modal bg-slate-400/50" open={open}>
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className="btn btn-ghost btn-xs w-[30px] h-[30px] rounded-md border-none p-0 absolute top-2 right-2"
          onClick={onClose}
        >
          <GrFormClose className="text-3xl" />
        </button>
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
            {...register('supportType')}
          >
            <option value="notification">Hỗ trợ notification</option>
            <option value="segment">Hỗ trợ user segment</option>
            <option value="promotion">Hỗ trợ promotion management</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            {...register('customerEmail', { required: true })}
          />
          {errors.customerEmail ? (
            <p className="text-red-500 text-xs italic">
              Email không được để trống
            </p>
          ) : null}
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
            {...register('description', { required: true })}
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
          <button className="btn" type="submit" disabled={submitLoading}>
            {submitLoading ? (
              <span className="loading loading-spinner"></span>
            ) : null}
            Gửi
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default TicketCreateModal;
