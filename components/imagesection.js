export default function ImageSection({children, image}) {
    return(
        <>
            <div className="md:flex">
                <div className="md:w-2/3">
                    <img className="w-full max-h-96 md:h-full object-cover object-top" src={image}></img>
                </div>
                <div className="py-2 px-4 sm:px-6 lg:px-8 md:w-1/3">
                    {children}
                </div>
            </div>
        </>
    )
}