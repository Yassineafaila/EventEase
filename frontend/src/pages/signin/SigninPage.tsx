import React,{useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Input, Button, InputGroup, InputRightElement, Checkbox } from '@chakra-ui/react'
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SigninPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const { signUp } = useAuth()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }
    signUp(user)
    console.log(user)
    console.log("user successfully Signup")
  }
  //change the visibilty of the password
  const handleClick = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='container mx-auto max-w-[1280px]'>
      <form onSubmit={handleSubmit}>
        <Button leftIcon={<FaArrowLeft />} colorScheme='teal' variant='solid'>
          Back
        </Button>
        <h1>Login</h1>
        <div>
          <Input onChange={(e) => setEmail(e.target.value)} placeholder='john@gmail.com' type='email' />
        </div>
        <div>
          <p>
            <Checkbox defaultChecked>Remember me</Checkbox>
          </p>
          <p>
            <Link to={'/forgot-password'}> Forgot password?</Link>
          </p>
        </div>
        <div>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div>
          <Button type='submit' colorScheme='blue'>Login</Button>
        </div>
        <div>
          
          <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SigninPage