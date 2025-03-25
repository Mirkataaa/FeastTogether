import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router'
import Register from './components/register/Register'
import Login from './components/login/Login'

import './App.css'
import { Recipe } from './components/recipe/Recipe'
import CreateRecipe from './components/create-recipe/CreateRecipe'
import UserProvider from './providers/UserProvider'
import RecipeDetails from './components/recipe-details/RecipeDetails'

function App() {
  return (
    <UserProvider>
    <div className='box'>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route path='/recipes/all-recipes' element={<Recipe/>}/>
          <Route path='/recipes/:recipeId' element= {<RecipeDetails/>} />
          <Route path='/recipes/create' element={<CreateRecipe/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </UserProvider>
  )
}

export default App
