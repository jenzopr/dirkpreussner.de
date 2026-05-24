import Navbar from './navbar'
import Footer from './footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex flex-col w-full pt-16 md:pt-20">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}