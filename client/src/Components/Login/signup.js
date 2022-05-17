import { Link } from 'react-router-dom';
import './sign.css';
function SignUp(){
	return(
		<div className="contatiner">
			<div className ="login_form">
				<h1>Your best exam sharing</h1>
				<h2>Sign up</h2>
				<h3>Use your Email Account</h3>
				<form action="#" method="post">
					<input type="email" id="email" name="email" placeholder="Email Address" required/>
					<input type="password" id="password" name="password" placeholder="Password" required/>
				</form>
			</div>
			<div className='row'>
				<Link to='/signin'>
					<p>Login instead  </p>
				</Link>
				<form action="#" method="post">
					<button type="submit">next</button>
				</form>
			</div>	
		</div>
	);
}

export default SignUp;