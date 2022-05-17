import { Link } from 'react-router-dom';
import './sign.css';
function SignIn()
{
    return(
        <div>
            <div className ="login_form">
                <h1>Your best exam sharing</h1>
                <h2>Sign in</h2>
                <h3>Use your Email Account</h3>
                <form action="#" method="post">
                    <input type="email" id="email" name="email" placeholder="Email Address" required/>
                    <input type="password" id="password" name="password" placeholder="Password" required/>
                </form>
            </div>
            <div className='row'>
                    <Link to='/signup'>
                        <p>Create Account </p>
                    </Link>
                    <form action="#" method="post">
                        
                            <button type="submit">next</button>
                        
                    </form>
            </div>
        </div>
    );
}
export default SignIn;