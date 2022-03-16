import { Footer, Header, Navbar } from '@components/ui/common'

export default function BaseLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <div className="fit">{children}</div>
            <Footer />
        </>
    )
}


