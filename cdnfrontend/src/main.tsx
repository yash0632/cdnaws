import { createRoot } from 'react-dom/client'
import './index.css'



//console.log(process.env.BACKEND_URL)

import {Routes,Route,BrowserRouter} from "react-router"
import Layout from "./Layout"
import NewPost from "./components/pages/NewPost"
import Home from "./components/pages/Home"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
