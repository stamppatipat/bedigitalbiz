import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from "react";

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    
}

const Drawer = ({ children, isOpen, setIsOpen,  }: DrawerProps) => {
    return (
        <div>
    <main
        className={
            " fixed  z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isOpen
                ? "transition-opacity opacity-100 duration-500 translate-x-0"
                : "transition-all delay-500 opacity-0 -translate-x-full")
        }
    >
        <section
            className={`
                navbar-blur2 w-[270px] max-w-lg right-0 absolute h-[250px] shadow-xl 
                delay-400 duration-500 ease-in-out transition-all transform 
                ${isOpen ? 'translate-y-0 translate-x-0 scale-100' : '-translate-y-full translate-x-full scale-0'}
              `}
              
              
        >
            <article className="relative px-1   max-w-lg pb-1 flex flex-col space-y-6 h-full">
                <header className="pt-1 flex  items-center justify-end ">
                    {/* <img
                        className="h-12 w-40"
                        src={"/assets/logo/BE.png"}
                        alt="Courses-Logo"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    /> */}
                    <XMarkIcon
                        className="block pt-1 pr-1 h-11 w-11"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    />
                </header>
                <div onClick={() => {
                    setIsOpen(false);
                }}>
                    {children}
                </div>
            </article>
        </section>
        <section
            className="w-screen h-full cursor-pointer"
            onClick={() => {
                setIsOpen(false);
            }}
        ></section>
    </main>
</div>

    );
}

export default Drawer;
