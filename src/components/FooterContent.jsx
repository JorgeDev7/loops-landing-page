
// Icons and images
import logo from '/assets/images/logo.svg';

const icons = [
    {
        id: Math.random().toString(32).substring(2),
        name: 'Facebook',
        url: '/assets/images/icon-facebook.svg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Twitter',
        url: '/assets/images/icon-twitter.svg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Pinterest',
        url: '/assets/images/icon-pinterest.svg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Instagram',
        url: '/assets/images/icon-instagram.svg'
    },
]

const FooterContent = () => {
    return (
        <div className='container px-5 mx-auto'>
            <div className='md:grid md:grid-cols-2 gap-5'>
                <img
                    src={logo}
                    alt="logo loopstudios"
                    className='mx-auto md:mx-0'
                />

                <ul className='my-10 md:my-0 space-y-6 md:space-y-0 text-lg md:flex md:items-center md:gap-10 md:row-start-2'>
                    <li className='text-center'>
                        <a
                            href="#"
                            className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                        >About</a>
                    </li>
                    <li className='text-center'>
                        <a
                            href="#"
                            className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                        >Careers</a>
                    </li>
                    <li className='text-center'>
                        <a
                            href="#"
                            className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                        >Events</a>
                    </li>
                    <li className='text-center'>
                        <a
                            href="#"
                            className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                        >Products</a>
                    </li>
                    <li className='text-center'>
                        <a
                            href="#"
                            className='text-white font-alata text-xl after:block after:bg-white after:w-0 after:hover:w-8 after:h-0.5 after:mx-auto after:transition-all duration-300'
                        >Support</a>
                    </li>
                </ul>

                <div className='flex justify-center md:justify-end gap-5  items-center'>
                    {icons.map(icon => (
                        <div
                            key={icon.id}
                            className='after:block after:bg-white after:w-0 after:hover:w-5 after:mt-2 after:h-0.5 after:mx-auto after:transition-all duration-300 cursor-pointer'
                        >
                            <img
                                src={icon.url}
                                alt={`icon ${icon.name}`}

                            />
                        </div>
                    ))}
                </div>

                <p className='text-dark-gray mt-5 text-center md:text-end'>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterContent