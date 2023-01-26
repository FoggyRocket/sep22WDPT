// componente de clase 
//regla muy importante importar React from 'react'
import React, {Component} from 'react'
import photo from '../../assets/images/dylan.jpg'

export default class CardProfile extends Component {
    // utilizamos el metod render
    //  condicion ? true : false; 

    render(){
        console.log("this====>", this)
        return(
            <div className='card'>
                <img src={photo} alt="Foto de Dylan Sexy" className="card-avatar" />

                <div className='card-container'>
                    <h4>name: {this.props.nameDemo} </h4>
                    <p>hobby: {this.props.hobby} </p>
                </div>

            </div>
        )
    }
}

//export default CardProfile