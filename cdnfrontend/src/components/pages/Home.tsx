import {useEffect,useState} from "react";
import axios from "axios";

import SinglePost from "../SinglePost";

import {useNavigate} from "react-router"



import {post} from "../../types/type"

//dotenv.config();
//console.log(process.env.BACKEND_URL)

export default function Home(){
    const [posts,setPosts] = useState<post[]>([]);
    let navigate = useNavigate();

    useEffect(()=>{
        try{
            axios.get(`http://localhost:8080/api/posts`).then((response)=>{
                setPosts(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err);
        }
    },[])

    const likeClicked = ({id}:{id:any})=>{
        console.log(`likeClicked = (${id})`)
    }

    const commentClicked = ({id}:{id:any}) => {
        console.log(`commentClicked = (${id})`)
    }
    const editPostClicked = ({id}:{id:any}) => {
        navigate("/editPost/" + id)
        console.log(`editPostClicked = (${id})`)
    }

    const deletePostClicked = async({id}:{id:any}) => {
        console.log(`deletePostClicked = (${id})`)

        await axios.delete("/api/posts/" + id);
        setPosts(posts.filter(post => post.id !== id))
    }

    const postActions = {
        likeClicked,
        commentClicked,
        editPostClicked,
        deletePostClicked
    }

    return(
        <div className="flex flex-col items-center justify-start h-screen w-screen mt-10">
            {posts.map(post => (
                <SinglePost key={post.id} className="relative" post={post} postActions={postActions}></SinglePost>
            ))}
        </div>
    )
}