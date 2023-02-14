import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAllApartments} from '../../services/apartments.service'
const CardComponent = (props) => {
  return (
    <div  className="card">
      <img src={props.img} alt="apartment" />
      <h3>{props.title}</h3>
      <p>Price: {props.pricePerDay}</p>
      <Link to={`/apartment-detail/${props._id}`}>Ir a...</Link>
    </div>
  );
};

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  //Mounting, Updating, UnMounting => useEffect(()=>{},[])

  //updating => useEffect(()=>{},[variable])
  const getData = async()=>{
    try{
      const response = await getAllApartments()
      console.log("que es:",response.data)
      setApartments(response.data)
    }catch(error){
      console.log("Error en Aparments List",error)
    }
  }
  //mounting
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h3>List of apartments</h3>
       {
        apartments.length ?
        apartments.map((apartment)=>(
          <CardComponent key={apartment._id}  {...apartment}  />
        ))
        :
        <h1>Aun no hay Apartamentos disponibles</h1>
       }
    </div>
  );
}

export default ApartmentsPage;
