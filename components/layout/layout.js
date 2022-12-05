import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="font-serif">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}