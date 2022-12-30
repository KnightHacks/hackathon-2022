import { Fragment, useEffect, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import Music from "../Music/Music";
import ChalkMessage from "../../assets/ChalkMessage.png";

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    closeModal();
  }, [location]);

  return (
    <div class="flex mx-auto p-3 absolute">
      <div className="flex content-center">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {!isOpen && (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 text-white"
                style={{ filter: "drop-shadow(0px 2px 4px rgb(0 0 0 / 0.8))" }}
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </button>
        <div className="ml-6 mt-2 hidden sm:block">
          <Music />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-black border-chalkborder border-15 p-6 text-left align-middle shadow-xl transition-all">
                  <CgClose color="white" size={30} onClick={closeModal} />
                  <h2 className="text-white font-extrabold font-cursive underline text-4xl mt-6">
                    Today's Specials
                  </h2>
                  {props.children}
                  <div className="flex justify-end w-full mt-10">
                    <img src={ChalkMessage} className="w-24" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Sidebar;

