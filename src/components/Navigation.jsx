
// import React from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'

// // Navigation component that moves through an ordered list of routes.
// // - `routes` prop: ordered array of valid route paths (e.g. ['/', '/about', '/contact']).
// // - Previous / Next move within that array; Home always 

//   // Determine if there is a previous/next route inside the provided routes array
//   const hasPrevious = idx > 0


//   const baseBtn = 'px-4 py-2 rounded font-medium transition'
//   const enabled = 'bg-gray-800 text-white hover:bg-gray-700'
//   const disabled = 'opacity-50 cur
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

