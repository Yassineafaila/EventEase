import React, { useState } from 'react'
import { Input, Button, InputGroup, InputRightElement,Box,Divider,AbsoluteCenter ,CloseButton} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
function SignupPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {signIn}=useAuth()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password:password
    }
    signIn(user)
    console.log("user successfully Signup")
  }

  //change the visibilty of the password
  const handleClick = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='container mx-auto max-w-[1280px]'>
      <form onSubmit={handleSubmit}>
        <CloseButton />
        <h1>Register</h1>
        <div>
          <Input onChange={(e)=>setUserName(e.target.value)} placeholder='username' type='text' />
        </div>
        <div>
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder='john@gmail.com' type='email' />
        </div>
        <div>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div>
          <Button type='submit' colorScheme='blue'>Register</Button>
        </div>
        <div>
          <p>Already have an account?<Link to={'/signin'}>LogIn</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignupPage