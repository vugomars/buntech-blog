import { ReactNode } from 'react'
import { Footer, Header, Navbar } from '@components/ui/common'

interface Props {
  children: ReactNode
}

const BaseLayout = ({ children }: Props) => {
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
