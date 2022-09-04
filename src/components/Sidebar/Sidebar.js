import { Fragment, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <div class="flex flex-col mx-auto p-3">
            <button onClick={() => setIsMenu((isMenu) => !isMenu)} >
                {!isMenu && <div><CgMenu color="white" size={100} /></div>}
                {isMenu && <div><CgClose color="white" size={100} /></div>}
            </button >
            <Transition show={isMenu}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-500 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
                as={Fragment}
                class="flex flex-col mx-auto p-3">
                <Dialog as="div" onClose={() => setIsMenu(false)}>
                    <div class="h-screen w-screen absolute inset-0 backdrop-blur -z-10" aria-hidden="true" />
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/">Home</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/About">About</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/Sponsors">Sponsors</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/Schedule">Schedule</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/FAQ">FAQ</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="text-white text-7xl font-mono py-2 my-2 hover:text-8xl hover:duration-500">
                        <Link to="/Attributions">Attributions</Link>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        </div >
    )
}

export default Sidebar