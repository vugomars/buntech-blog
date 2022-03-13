import { Footer, Header, Navbar } from '@components/ui/common'


const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="fit">{children}</div>
            <Footer />
        </>
    )
}

export default BaseLayout
