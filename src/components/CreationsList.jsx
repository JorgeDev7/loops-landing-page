import CreationItem from "./CreationItem"

const creations = [
    {
        id: Math.random().toString(32).substring(2),
        name: 'Deep Earth',
        img: '/assets/images/mobile/image-deep-earth.jpg',
        imgDesktop: '/assets/images/desktop/image-deep-earth.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Night arcade',
        img: '/assets/images/mobile/image-night-arcade.jpg',
        imgDesktop: '/assets/images/desktop/image-night-arcade.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Soccer team VR',
        img: '/assets/images/mobile/image-soccer-team.jpg',
        imgDesktop: '/assets/images/desktop/image-soccer-team.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'The grid',
        img: '/assets/images/mobile/image-grid.jpg',
        imgDesktop: '/assets/images/desktop/image-grid.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'From up above VR',
        img: '/assets/images/mobile/image-from-above.jpg',
        imgDesktop: '/assets/images/desktop/image-from-above.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Pocket borealis',
        img: '/assets/images/mobile/image-pocket-borealis.jpg',
        imgDesktop: '/assets/images/desktop/image-pocket-borealis.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'The curiosity',
        img: '/assets/images/mobile/image-curiosity.jpg',
        imgDesktop: '/assets/images/desktop/image-curiosity.jpg'
    },
    {
        id: Math.random().toString(32).substring(2),
        name: 'Make it fisheye',
        img: '/assets/images/mobile/image-fisheye.jpg',
        imgDesktop: '/assets/images/desktop/image-fisheye.jpg',
    },
]

const CreationsList = () => {
    return (
        <>
            <div className="md:flex md:items-center md:justify-center mb-10">
                <h2 className="mt-20 mb-10 text-center md:text-start font-josefin uppercase text-4xl md:flex-1">Our creations</h2>
                <button
                    type="button"
                    className="hidden md:flex mt-10 mx-auto justify-center border border-black px-10 py-1.5 uppercase font-alata tracking-[5px] hover:bg-black hover:text-white transition-colors duration-300"
                >See all</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-5">

                {creations.map(creation => (
                    <CreationItem
                        key={creation.id}
                        data={creation}
                    />
                ))}

            </div>

            <button
                type="button"
                className="md:hidden mt-10 mx-auto flex justify-center border border-black px-10 py-1.5 uppercase font-alata tracking-[5px] hover:bg-black hover:text-white transition-colors duration-300"
            >See all</button>
        </>
    )
}

export default CreationsList