import React from 'react'
import { LogoDashBoard } from '../Logo'
import { SidebarRoutes } from '../SidebarRoutes/SidebarRoutes'


export  function Sidebar() {
  return (
    <div className='h-screen'>
        <div className='flex flex-col h-full border-r px-6'>
          <LogoDashBoard/>
          <SidebarRoutes/>
        </div>
    </div>
  )
}
