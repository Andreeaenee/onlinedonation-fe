import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { MountbattenPink } from '../../constants/colors'

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: '20px',
          borderTopColor: MountbattenPink,
          borderTop: `2px solid ${MountbattenPink}`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MainLayout
