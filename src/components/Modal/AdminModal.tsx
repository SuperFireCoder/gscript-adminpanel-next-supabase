import React from "react";

interface Props {
  isOpen: boolean;
  closeModal: Function;
}
const AdminModal = (props: Props) => {
  const { isOpen, closeModal } = props;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-99">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
        onClick={() => closeModal()}
      ></div>
      <div className="flex flex-col items-center bg-white w-11/12 md:w-142 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto py-16 text-center">
        <div className="text-xl text-primary font-bold leading-6 px-17">
          Are you sure that you’d like to delete elisa@test.com?
        </div>
        <div className="text-gray text-base font-medium px-31 pt-7.5 pb-13.5">
          If you delete an admin user, that action cannot be reversed.
        </div>
        <div className="flex gap-5 px-7">
          <button className="rounded-full border border-primary2 bg-primary2 py-3.5 px-10 text-center font-medium text-base text-white hover:bg-opacity-90">
            Yes, delete
          </button>
          <button
            className="rounded-full border border-primary2 py-3.5 px-10 text-center font-medium text-base text-primary2 hover:bg-opacity-90"
            onClick={() => closeModal()}
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
