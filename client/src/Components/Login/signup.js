import { Link } from 'react-router-dom';
import './sign.css';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../Spinner'

function SignUp(){
	const [formData, setFormData] = useState({
		name:'', 
		email:'', 
		password:'', 
		password2:''
	})
	
	const { name, email, password, password2 } = formData

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

		if (password !== password2) {
			toast.error('Passwords do not match')
		} else {
			const userData = {
			name,
			email,
			password,
			}
			dispatch(register(userData))
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return(
		<div className="contatiner">
			<div className ="login_form">
				<h1>Your best exam sharing</h1>
				<h2>Sign up</h2>
			</div>
			<form onSubmit={onSubmit}>
				<div className='column'>
					<input type="text" id="name" name="name" value={name} placeholder="Full Name" onChange={onChange} required/>
					<input type="email" id="email" name="email" value={email} placeholder="Email Address" onChange={onChange} required/>
					<input type="password" id="password" name="password" value={password} placeholder="Password" onChange={onChange} required/>
					<input type="password" id="password2" name="password2" value={password2} placeholder="Confirm Password" onChange={onChange} required/>
				</div>
				<div className='row'>
					<Link to='/users/login'>
						<p>Login instead  </p>
					</Link>
					<button type="submit">next</button>
				</div>	
			</form>
		</div>
	);
}

export default SignUp;