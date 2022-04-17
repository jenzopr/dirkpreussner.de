import { useState } from "react";
import Link from 'next/link';

export default function Navbar({children}) {
    const [expandedMenu, expandMenu] = useState(false);
    function toggle(){
        expandMenu(!expandedMenu);
    }

    return(
        <>
            <nav className="fixed inset-x-0 top-0 z-20 bg-white">
                <div className="flex max-w-6xl items-center justify-between w-full mx-auto py-2 px-2 sm:px-6 lg:px-8">
                    <Link href="/"><a>
                        <div className="md:py-2">
                            <p className="text-xl font-semibold text-gray-900">Dirk Preußner</p>
                            <p className="text-sm -mt-2 text-gray-900">Beratung & Entwicklung</p>
                        </div>
                    </a></Link>
                    
                    <div className="hidden md:flex space-x-2 lg:space-x-4 text-gray-900">
                        <Link href="/beratung-coaching"><a className="text-sm font-semibold p-2 border-b-2 lg:text-base lg:p-4 hover:text-burgund-500 hover:border-burgund-500">Beratung & Coaching</a></Link>
                        <Link href="/workshops-moderation"><a className="text-sm font-semibold p-2 border-b-2 lg:text-base lg:p-4 hover:text-burgund-500 hover:border-burgund-500">Workshops & Moderation</a></Link>
                        <Link href="/organisationsentwicklung"><a className="text-sm font-semibold p-2 border-b-2 lg:text-base lg:p-4 hover:text-burgund-500 hover:border-burgund-500">Organisationsentwicklung</a></Link>
                    </div>
                    <div className="md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-burgund-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggle}>
                            <svg className={`${expandedMenu? "hidden":"block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${expandedMenu? "block":"hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${expandedMenu? "" : "hidden"}`}>
                    <div className="px-2 pt-2 pb-3 sm:px-6 lg:px-8 space-y-1 text-right border-b-4 border-burgund-500">
                        <Link href="/beratung-coaching"><a href="#" onClick={toggle} className="hover:bg-burgund-500 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Beratung & Coaching</a></Link>
                        <Link href="/workshops-moderation"><a href="#" onClick={toggle} className="hover:bg-burgund-500 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Workshops & Moderation</a></Link>
                        <Link href="/organisationsentwicklung"><a href="#" onClick={toggle} className="hover:bg-burgund-500 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Organisationsentwicklung</a></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}