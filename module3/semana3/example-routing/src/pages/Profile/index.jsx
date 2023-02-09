
import { Navigate } from 'react-router-dom';
function Profile(props){
    console.log("los props del profile",props)
    //{username:"",password:""} =(Object.keys(obj)) => ["password","username","pet","gender"]
    //{}=(Object.keys(obj)) => []
    if( !Object.keys(props.user).length ){
        return <Navigate to="/signup" />
    }
    return(
        <div>
            <h1>Este es el profile</h1>
            <p>Mas datos privados!!!!</p>
        </div>
    )
}

export default Profile;