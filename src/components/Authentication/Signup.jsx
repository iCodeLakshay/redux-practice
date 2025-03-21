import { useState } from 'react';
import Login from './Login';

const inputClasses = 'mt-1 block w-full px-3 py-2 border border-input rounded-md bg-input focus:outline-none focus:ring focus:ring-primary text-gray-500';
const buttonClasses = 'text-white w-full bg-primary hover:bg-text-primary py-2 rounded-md transition duration-300';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    {isSignup ? (
      
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-6 bg-card shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-primary text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-primary">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={inputClasses}
              placeholder="Your Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{' '}
          <span className="text-primary hover:cursor-pointer" onClick={() => setIsSignup(false)}>
           Login
          </span>
        </p>
      </div>
    </div>
    ) : 
    <Login />}
    </>
  );
};

export default Signup;