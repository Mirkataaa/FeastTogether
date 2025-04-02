import { useActionState} from "react";
import { Link, useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import { useLogin } from "../../api/authApi";
import useValidate from "../../hooks/useValidate";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const {userLoginHandler} = useUserContext();
  const {login} = useLogin();

  const loginHandler = async (_ , formData) => {

    const values = Object.fromEntries(formData);

    try {
      const authData = await login(values.email , values.password);
      userLoginHandler(authData.user);
      navigate('/recipes/all-recipes')
    } catch (error) { 
      error.message.forEach(e => toast.error(e))
    }

  };

  const {errors , handleBlur} = useValidate({
    email: '',
    password: '',
  });

  const [_  , loginAction , isPending] = useActionState(
    loginHandler, 
    {email: '' , password: ''}
  );

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="w-full lg:w-5/12 h-full flex items-center justify-center">
        <div
          className="w-full h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg")',
          }}>
        </div>
      </div>
      <div className="w-full lg:w-7/12 flex items-center justify-center p-8 bg-white h-full">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold leading-tight tracking-tight mb-3 text-gray-900 md:text-2xl">
            Log in to create your own recipes
          </h1>
          <form className="space-y-4 md:space-y-6" action={loginAction}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"></label>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Email"
                required />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900"></label>
              <input 
              type="password" 
              name="password" 
              id="password" 
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" 
              placeholder="••••••••" 
              required />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <input 
            type="submit" 
            value="Login"
            disabled={isPending}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            </input>
            <p className="text-sm font-light text-gray-500">
              Don't have an account? <Link className="font-medium text-blue-600 hover:underline" to={"/register"}>Sign up here</Link>
            </p>
          </form>
        </div>
      </div>

    </section>
  );
};