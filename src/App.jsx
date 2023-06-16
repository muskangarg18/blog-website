
import { RouterProvider } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import {createBrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Newsfeed from './components/Newsfeed';
import Job from "./pages/job";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/newsfeed" element={<Newsfeed/>}/>
      

    </Route>
    <Route path="/Jobs/:id" element={<Job/>}/>
    </>
    
  )
)
function App() {
  return (


     <RouterProvider router={router} ></RouterProvider>
 
  )
}
export default App
