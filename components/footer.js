import Link from 'next/link';

export default function Footer({children}) {
    return (
        <>
            <div className="flex justify-center text-gray-200 bg-burgund-600">
                <div className="flex justify-between w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 items-end">
                    <div className="flex flex-row justify-between text-sm">
                        <span className="mr-4"><Link href="/impressum">Impressum</Link></span>
                        <span className="mr-4"><Link href="/agb">Allgemeine Geschäftsbedingungen</Link></span>
                        <span><Link href="/datenschutz">Datenschutz</Link></span>
                    </div>
                    <div className="text-xs">
                        &copy; Dirk Preussner
                    </div>
                </div>
            </div>
        </>
    );
}