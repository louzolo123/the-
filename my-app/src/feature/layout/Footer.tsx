
import React from 'react'
import Link from 'next/link'
import { Home, PenSquare, User } from 'lucide-react'
import clsx from 'clsx'
import { buttonVariants } from '@/components/ui/button'
export default function Footer(){

    return (
        <div className='py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 max-w-lg border-t border-accent'>
            <Link href='/' className={clsx(buttonVariants({
                variant:'ghost',
            }),
            'flex-1')}>
                <Home size={20}></Home>
            </Link>
            <Link href='/edit' className={clsx(buttonVariants({
                variant:'ghost',
            }),
            'flex-1')}>
                <PenSquare size={20}></PenSquare>
            </Link>
            <Link href='/user' className={clsx(buttonVariants({
                variant:'ghost',
            }),
            'flex-1')}>
                <User size={20}></User>
            </Link>
        </div>
    )
}