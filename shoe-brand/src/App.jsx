import './App.css';
import Herosection from './components/hero';

const App=()=> {

  return (
    <>
      <div>
          <nav className='container'>
            <div className="log">
            <img src="/images/brand_logo.png" alt="logo"/>
            </div>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
            <button>Login</button>
          </nav>
       <Herosection/>
       </div>
    </>
  )
}

export default App
