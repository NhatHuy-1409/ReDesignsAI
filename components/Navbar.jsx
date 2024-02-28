import React from 'react'
import Container from './Container'
import UserMenu from './UserMenu'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='w-full bg-white shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <Logo/>
                    <UserMenu/>
                </div>
            </Container>
        </div>

    </div>
  )
}

export default Navbar