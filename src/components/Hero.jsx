// Images
import logo from '/assets/images/logo.svg';
import menu from '/assets/images/icon-hamburger.svg';

const Hero = ({ setActive }) => {

    return (
        <>

            <div className={`bg-[url('/assets/images/mobile/image-hero.jpg')] md:bg-[url('/assets/images/desktop/image-hero.jpg')] bg-cover md:bg-center h-[650px] md:h-[900px]`}>
                <div className="container px-5 mx-auto">
                    <div className='flex justify-between items-center pt-10 md:pt-20'>
                        <img
                            src={logo}
                            alt="loopstudios logo"
                        />

                        <div>
                            <img
                                src={menu}
                                alt="hamburger menu icon"
                                className='cursor-pointer md:hidden'
                                onClick={() => setActive(true)}
                            />
                            <nav className='hidden md:flex items-center gap-10'>
                                <a
                                    href="#"
                                    className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                                >About</a>
                                <a
                                    href="#"
                                    className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                                >Careers</a>
                                <a
                                    href="#"
                                    className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                                >Events</a>
                                <a
                                    href="#"
                                    className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                                >Products</a>
                                <a
                                    href="#"
                                    className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                                >Support</a>
                            </nav>
                        </div>
                    </div>

                    <div className='border-2 mt-[150px] p-5 md:p-10 md:w-max'>
                        <h1 className='md:w-[500px] text-4xl md:text-7xl font-josefin text-white uppercase'>Immersive experiences that deliver</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero