export default function Section({children, className="bg-burgund-100"}) {
    return(
        <>
            <div className={`flex sm:justify-center ${className}`}>
                <div className="flex w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </>
    )
}