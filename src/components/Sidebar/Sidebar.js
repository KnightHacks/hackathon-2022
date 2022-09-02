import { Fragment, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <div class="flex flex-col mx-auto p-3">
            <button type="button" onClick={() => setIsMenu(!isMenu)} >
                <CgMenu size={50} />
            </button>
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
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/">Home</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/About">About</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/Sponsors">Sponsors</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/Schedule">Schedule</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/FAQ">FAQ</Link>
                    </Dialog.Panel>
                    <Dialog.Panel class="my-1">
                        <Link class="text-5xl font-mono py-2 hover:text-6xl hover:duration-500" to="/Attributions">Attributions</Link>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        </div >
    )
}

export default Sidebar