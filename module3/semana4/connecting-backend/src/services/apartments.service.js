//importar mi archivo _api

import _api from './api';

export const getAllApartments = () => {
            //heroku.algo.com
            //... mas codigo
    return _api.get("/apartments")
}

//con return implicito
export const getApartmentById = (id) => _api.get(`/apartments/${id}`);

//getAparmentById("9182739812739812738912789372189").then().catch()

export const createApartment = (data) => _api.post("/apartments",data  )  ;
//createAparment( {img:"",title:"",pricePerDay:2}).then().catch()