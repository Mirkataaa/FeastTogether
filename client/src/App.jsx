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
import Logout from './components/logout/Logout'
import BrowseCategories from './components/browse-categoreis/BrowseCategories'
import EditRecipe from './components/edit-recipe/EditRecipe'
import HomeRecipe from './components/home/HomeRecipe'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'
import {ToastContainer} from 'react-toastify'
import About from './components/about/About'

function App() {
  return (
    <UserProvider>
    <div className='box'>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route index element={<HomeRecipe/>}/>
          <Route path='/recipes/all-recipes' element={<Recipe/>}/>
          <Route path='/recipes/:recipeId' element= {<RecipeDetails/>} />
          <Route path='/recipes/category/:category' element={<BrowseCategories/>} />
          <Route path='/about' element={<About/>} />
          <Route element={<AuthGuard />}>
              <Route path='/recipes/create' element={<CreateRecipe/>}/>
              <Route path='/recipes/edit/:recipeId' element={<EditRecipe/>} />
              <Route path='/logout' element={<Logout/>} />
          </Route>
          <Route element={<GuestGuard />}>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

          </Route>
        </Routes>
      </main>
      <ToastContainer />
      <Footer/>
    </div>
    </UserProvider>
  )
}

export default App
