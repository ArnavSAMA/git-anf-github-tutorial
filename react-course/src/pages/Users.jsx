import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Users(){
    const {id} = useParams()
    const [user,setuser]=useState({})

    async function fetchUserData() {
        const {data}=await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`)
        setuser(data);
    }

    useEffect(() => {
        fetchUserData();
    }, [id]);

    

    return(
        <div>
            <Link to= "/">Go Back</Link>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
        </div>  
    )
}

export default Users