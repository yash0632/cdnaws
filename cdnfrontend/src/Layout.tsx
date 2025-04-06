import {useNavigate,Outlet} from "react-router"
import NavBar from "./components/NavBar"

export default function Layout(){
  const navigate = useNavigate();
  const actions = {
    onHome: ()=>{
      navigate("/")
    },
    onNewPost: ()=>{
      navigate("/newPost")
    }
  }
  return(
    <div>
      <NavBar {...actions}></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
  
}
