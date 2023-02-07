import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';


function AddFoodForm({addFood}){
    const initalData ={
        name:'',
        image:'',
        calories:0,
        servings:0
    }// para resetar mi form

    const [formData,setFormData] = useState(initalData)
    
    const handleChange =(name,value) =>{

        setFormData(prevState=> ({...prevState, [name]:value })  )
        
        //   setFormData(prev=>{
        //   return {}
        //  })
        // const newObj = {...formData}
        // newObj[name]= value;
        // una nueva llave a un obj [varible]  .nombreKey
        // setFormData(newObj)

    }

    const sendFood = (e)=>{
    
        e.preventDefault()
        addFood(formData)
        setFormData(initalData)
    }
    //unmounting/mounting
    useEffect(()=>{
        console.log("Dentro del FORM para food")
        //unmounting
        return ()=>{
            console.log("Me woa morir bye :(")
        }

    },[])
    return(
        <form onSubmit={sendFood}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input className='red' value={formData.name} type="text" onChange={(event) =>handleChange("name", event.target.value)} />
  
        <label>Image</label>
        {/* render antd <Input /> type="text" here */}
        <Input type='text' value={formData.image} onChange={(event) =>handleChange("image", event.target.value)}  />
  
        <label>Calories</label>
        {/* render antd <Input /> type="number" here */}
        <Input type='number' value={formData.calories} onChange={(event) =>handleChange("calories", event.target.value)}  />

  
        <label>Servings</label>
        {/* render antd <Input /> type="number" here */}
        <Input type='number' value={formData.servings} onChange={(event) =>handleChange("servings", event.target.value)}  />

        <button type="submit">Create</button>
      </form>
    )
}

export default AddFoodForm;