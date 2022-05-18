import { Link} from 'react-router-dom'
import './sign.css';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../Spinner'

function SignIn()
{
    const [formData, setFormData] = useState({
		email:'', 
		password:'',
	})
	
    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/home')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      const userData = {
        email,
        password,
      }
  
      dispatch(login(userData))
    }
  
    if (isLoading) {
      return <Spinner />
    }
    return(
        <div>
            <div className ="login_form">
                <h1>AMUINSIGHT</h1>
                <h2>Sign in</h2>
                <h3>Use your Email Account</h3>
                <form onSubmit={onSubmit}>
                  <div className='column'>
                    <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Email Address" required/>
                    <input type="password" id="password" name="password" value={password} onChange={onChange} placeholder="Password" required/>
                  </div> 
                  <div className='row'>
                    <Link to='/users'>
                        <p>Create Account </p>
                    </Link>
                    <button type="submit">next</button>
            </div>              
                </form>
            </div>
            
        </div>
    );
}
export default SignIn;