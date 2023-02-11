import { useParams, Link } from 'react-router-dom';

function CountryDetails({countries,...props}) {
  const params = useParams()
  //find
  // console.log("find:",
  //   countries.find((country)=> country.alpha3Code === params.idCountry )    
  //   ) //diffFind regresa un elemento
// //filter
//   console.log("filter:",
  
//   countries.filter((country)=> country.alpha3Code === params.idCountry )
  
//   )//diffFilter regresa un Array

const countryDetail =  countries.find((country)=> country.alpha3Code === params.idCountry );
const countryDetailFilters =  countries.filter((country)=> country.alpha3Code === params.idCountry );

console.log("filtrer",countryDetailFilters)
const getName = (border)=>{
  const country =  countries.find((country)=> country.alpha3Code === border);
  if(country){
    return country.name.common
  }else{
    return border
  }
}

  return (

    <div className="col-7">
      <h1>{countryDetailFilters[0].name.common}</h1> 
      {/* <h1>{countryDetail.name.common}</h1> */}
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryDetail.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetail.borders.map((border,index_border)=>(
                  <li key={index_border}>
                    <Link to={`/${border}`}>
                      {getName(border)}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails;
