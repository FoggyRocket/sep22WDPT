import { useEffect,useState } from "react"; 
import { useParams } from "react-router-dom";
import { getApartmentById } from "../../services/apartments.service";


function DetailApartmentPage(){
    const params = useParams()
    const [apartment,setApartment] = useState({})

    const getData = ()=>{
        getApartmentById(params.idAparment)
        .then((response)=>{
           setApartment(response.data)
           //response.data.result || response.data.info || response.data.user   
        })
        .catch((error)=>{
            console.log("error detail",error)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div  className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
        </div>
    )
}

export default DetailApartmentPage;