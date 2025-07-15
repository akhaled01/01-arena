import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'
import React from 'react'

const ArenaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  )
}

export default ArenaLayout