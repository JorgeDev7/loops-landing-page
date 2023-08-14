import { useState, useEffect } from "react";

const CreationItem = ({ data }) => {

    const { img, name, imgDesktop } = data;

    const [width, setWidth] = useState(window.innerWidth);

    const handleWidthResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidthResize);

        return () => {
            window.removeEventListener('resize', handleWidthResize)
        }
    }, [])

    return (
        <div
            className={`bg-cover h-[140px] md:h-[450px] md:w-[256px] md:mx-auto hover:opacity-50 transition-opacity cursor-pointer`}
            style={{
                backgroundImage: `url(${width >= 768 ? imgDesktop : img})`
            }}
        >
            <div className="bg-gradient-to-r md:bg-gradient-to-t from-[#000000a1] to-transparent w-full h-full relative">
                <h1 className="text-2xl md:text-3xl text-white uppercase font-josefin w-32 absolute left-5 md:left-10 bottom-5">{name}</h1>
            </div>
        </div>
    )
}

export default CreationItem