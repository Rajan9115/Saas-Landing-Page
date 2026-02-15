import React from 'react'

function Btn({name}) {
  return (
    <div>
         <button className="px-4 py-2 rounded-md 
            bg-linear-to-r from-[#FF9898] to-[#8054FF] 
            hover:scale-105  
            hover:ring-2
            hover:ring-purple-400/50
            text-white text-lg font-medium">
            {name}
          </button>
    </div>
  )
}

export default Btn