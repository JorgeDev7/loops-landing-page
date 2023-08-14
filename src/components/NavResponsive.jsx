// Images
import logo from '/assets/images/logo.svg';
import close from '/assets/images/icon-close.svg';

const NavResponsive = ({ setActive }) => {
    return (
        <div className="h-screen bg-black overflow-y-hidden absolute top-0 w-full container px-5 mx-auto">
            <div className='flex justify-between items-center pt-10'>
                <img
                    src={logo}
                    alt="loopstudios logo"
                />

                <div>
                    <img
                        src={close}
                        alt="close menu icon"
                        className='cursor-pointer'
                        onClick={() => setActive(false)}
                    />

                </div>
            </div>

            <ul className='mt-[150px] flex flex-col gap-7'>
                <li>
                    <a
                        href="#"
                        className='text-white font-josefin text-4xl uppercase hover:border-b-2 transition-all'
                    >About</a>
                </li>
                <li>
                    <a
                        href="#"
                        className='text-white font-josefin text-4xl uppercase hover:border-b-2 transition-all'
                    >Careers</a>
                </li>
                <li>
                    <a
                        href="#"
                        className='text-white font-josefin text-4xl uppercase hover:border-b-2 transition-all'
                    >Events</a>
                </li>
                <li>
                    <a
                        href="#"
                        className='text-white font-josefin text-4xl uppercase hover:border-b-2 transition-all'
                    >Products</a>
                </li>

                <li>
                    <a
                        href="#"
                        className='text-white font-josefin text-4xl uppercase hover:border-b-2 transition-all'
                    >Support</a>
                </li>
            </ul>
        </div>
    )
}

export default NavResponsive