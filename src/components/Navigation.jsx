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

