// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import { ToastContainer } from 'react-toastify';
  
const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">

      <Navbar />

      {/* orderedRoutes defines the sequence for Next/Previous navigation */}
      {/**
       * Update this array to list your app's pages in navigation order.
       * Only routes present here will be used by Navigation's Previous/Next.
       */}
      {(() => {
        const orderedRoutes = ['/', '/collection', '/about', '/contact']
        return (
          <>
            <Navigation routes={orderedRoutes} />

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/collection' element={<CollectionPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              {/* fallback for unknown paths */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </>
        )
      })()}

      <ToastContainer />

    </div>
  )
}

export default App