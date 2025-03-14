import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './App.css'
import { Recipe } from './components/recipe/Recipe'


function App() {
  return (
    <div className='box'>
      <Header/>
      <main className='main-content'>
          {/* // ! main content here */}
          <Recipe/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
