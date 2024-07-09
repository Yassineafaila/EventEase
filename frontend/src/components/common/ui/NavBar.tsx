import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Button,
} from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from '../../../Contexts/AuthContext'
function NavBar(): JSX.Element {
    const { user, isLoggedIn } = useAuth()
    console.log(user, isLoggedIn)
    return (
        <nav className="lg:flex lg:items-center lg:justify-between max-w-[1280px] container mx-auto py-4">
            <div>
                <NavLink to="/"><span>Event</span><span>Ease</span></NavLink>
            </div>
            <ul className="flex justify-between gap-4">
                <li><NavLink to="/" className="text-black">Home</NavLink></li>
                <li><NavLink to="/events" className="text-black">Events</NavLink></li>
                <li><NavLink to="/speakers" className="text-black">Speakers</NavLink></li>
                <li><NavLink to="/about" className="text-black">About</NavLink></li>
                <li><NavLink to="/contact" className="text-black">Contact</NavLink></li>
                <li><NavLink to="/faq" className="text-black">FAQ</NavLink></li>

            </ul>
            <ul className='flex justify-between gap-4'>
                {
                    isLoggedIn ? <>
                        <Avatar name='Dan Abrahmov'  className='w-[40px] h-[40px] rounded-full' src='https://bit.ly/dan-abramov' />
                        <Menu>
                            <MenuButton as='button' className=''>
                                Profile 
                                <IoIosArrowDown className='inline ms-2' />
                            </MenuButton>
                            <MenuList>
                                <MenuGroup>
                                    <MenuItem>
                                        <Link to='/dashboard'>Dashboard</Link></MenuItem>
                                    <MenuItem><Link to='/profile'>My Profile </Link></MenuItem>
                                </MenuGroup>
                                <MenuGroup >
                                    <MenuItem>
                                        <Link to={'/change-password'}>Change Password</Link></MenuItem>
                                    <MenuItem>
                                        <Button>
                                            Logout</Button></MenuItem>
                                    <MenuItem>
                                        <Link to={'/delete-profile'}>Delete Profile</Link></MenuItem>

                                </MenuGroup>
                            </MenuList>
                        </Menu></> : <>
                        <li><NavLink to="/signin" className="text-black">Sign In</NavLink></li>
                        <li><NavLink to="/signup" className="text-black">Sign Up</NavLink></li></>
                }
            </ul>
        </nav>
    )
}

export default NavBar