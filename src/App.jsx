import './App.css'
import Todo from './components/Todo'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Signup from './components/Authentication/Signup'

function App() {

  return (
    <>
    {/* <Login /> */}
      <Provider store={store}>
        <Todo />
      </Provider >
    </>
  )
}

export default App
