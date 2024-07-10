import React from 'react'
import NavBar from '../components/common/ui/NavBar'
import Footer from '../components/common/ui/Footer'


interface IPropsLayout {
    children:React.ReactNode
}


function MainLayout({children}:IPropsLayout) {
  return (
      <>
          <header className='w-full'>
              <NavBar />
          </header>
          <main className='main'>
              {children}
          </main>
          <footer>
              <Footer />
          </footer>
      </>
  )
}

export default MainLayout