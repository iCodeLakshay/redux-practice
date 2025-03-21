import { useState } from 'react';
import Signup from './Signup';

const inputClasses = 'mt-1 block w-full px-3 py-2 border border-input rounded-md bg-input focus:outline-none focus:ring focus:ring-primary text-gray-500';
const buttonClasses = 'text-white w-full bg-primary text-white hover:bg-text-primary py-2 rounded-md transition duration-300';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <> {isLogin ?
      (<div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full p-6 bg-card shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-primary text-center mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={inputClasses}
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={inputClasses}
                placeholder="*********"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className={buttonClasses}>
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-500">
            Don't have an account?{' '}
            <span className="text-primary hover:cursor-pointer" onClick={() => setIsLogin(false)}>
           Sign Up
          </span>
          </p>
        </div>
      </div>)

      : <Signup />} </>
  );
};

export default Login;
