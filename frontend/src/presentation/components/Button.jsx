import React from 'react'

export default function Button({children,className='btn btn-outline-secondary btn-sm ',onClick}) {
  return (
    <div>
        <button onClick={onClick} className={className}>{children}</button>
    </div>
  )
}
