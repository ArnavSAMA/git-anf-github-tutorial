function User({id, name, username}){
    return(
        <div style={{border: "1px solid black", margin: "20px", padding: "20px"}}>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>ID: {id}</div>
        </div>
    )
}
export default User