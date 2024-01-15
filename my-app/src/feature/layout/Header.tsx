'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/src/theme/ThemeToggle'
const Header = async () => {
  return (
    <header className='border-b border-b-accent'>
        <div className='container gap-1 m-auto max-w-lg  flex flex-items-center'>
            <h2 className='mr-auto font-bold text-2xl'>Unisoft Chat</h2>
            <ThemeToggle></ThemeToggle>
        </div>
    </header>
  )
}

export default Header