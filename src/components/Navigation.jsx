
// import React from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'

// // Navigation component that moves through an ordered list of routes.
// // - `routes` prop: ordered array of valid route paths (e.g. ['/', '/about', '/contact']).
// // - Previous / Next move within that array; Home always navigates to '/'.

// const Navigation = ({ routes = ['/', '/collection'] }) => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const pathname = location.pathname
//   const idx = routes.indexOf(pathname)

//   // Determine if there is a previous/next route inside the provided routes array
//   const hasPrevious = idx > 0
//   const hasNext = idx !== -1 && idx < routes.length - 1

//   const handlePrevious = () => {
//     if (hasPrevious) navigate(routes[idx - 1])
//   }

//   const handleNext = () => {
//     if (hasNext) navigate(routes[idx + 1])
//   }

//   const handleHome = () => navigate('/')

//   const baseBtn = 'px-4 py-2 rounded font-medium transition'
//   const enabled = 'bg-gray-800 text-white hover:bg-gray-700'
//   const disabled = 'opacity-50 cursor-not-allowed bg-gray-600 text-gray-200'

//   return (
//     <div className="flex gap-3 items-center px-6 py-4">
//       <button
//         onClick={handlePrevious}
//         disabled={!h
//         onClick={handleNext}
//         disabled={!hasNext}
//         className={`${baseBtn} ${hasNext ? enabled : disabled}`}
//         aria-disabled={!hasNext}
//       >
//         Next
//       </button>

//       <b

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  const handleHome = () => navigate('/')

  const baseBtn = 'px-4 py-2 rounded font-medium transition'
  const enabled = 'bg-gray-800 text-white hover:bg-gray-700'

  return (
    <div className="flex gap-3 items-center px-6 py-4">
      <button
        onClick={handleHome}
        className={`${baseBtn} ${enabled}`}
      >
        Home
      </button>
    </div>
  )
}

export default Navigation

