import { useState } from "react";
import {createApartment} from '../../services/apartments.service'
 
function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);
 
  
  const handleSubmit = (e) => {          // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { title: headline, pricePerDay: price };
    
    createApartment(body)
    .then((response)=>{ 
      console.log("response",response)
      setHeadline("")
      setPrice("")
    })
    .catch(error=>{
      console.log("error create",error)
    })
  };
 
  
  return (
    <div className="AddApartmentPage">    
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>   {/* <== ADD EVENT  */}
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />
 
        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}
 
export default AddApartmentPage;