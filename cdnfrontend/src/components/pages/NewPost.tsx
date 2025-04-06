import {useState} from "react"
import axios from "axios";

//console.log(process.env.BACKEND_URL)

export default function NewPost(){
    const [file,setFile] = useState<File | null>(null);

    const [caption,setCaption] = useState("");
    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image",file as File);
        formData.append("caption",caption);
        await axios.post(`http://localhost:8080/api/posts`,formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }

    return(
        <div className="flex flex-col items-center justify-start h-screen w-screen mt-10">
            <form onSubmit={handleSubmit} className="border-2 rounded-md p-2">
                <div className="mb-4">
                <input type="file" onChange={(e)=>{
                    setFile(e.target.files?.[0] as File)
                }} accept="image/*"></input>
                </div>
                <div className="mb-4">
                <input value={caption} type="text" onChange={(e)=>setCaption(e.target.value)} placeholder="caption"/>
                </div>
                <div>
                <button type="submit">submit</button>
                </div>
            </form>

        </div>
    )
}
