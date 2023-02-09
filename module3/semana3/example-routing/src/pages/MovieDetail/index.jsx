
import {useParams} from 'react-router-dom'

function MovieDetail(){
    const params = useParams()

    console.log("que son los params",params)
    return(
        <div>
            <h1>Detalles</h1>
            <p>Esto esta en los params {params.movieId}</p>

        </div>
    )
}


export default MovieDetail