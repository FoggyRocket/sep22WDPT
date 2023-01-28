
//los props llegan en un solo parametro que es un {}
function CardAlumno({name,age,hobby }) {
  return (
    <div className="MovieCard">
      <h3>{name}</h3>
      <p>edad: {age}</p>
      <p>hobby: {hobby} </p>
    </div>
  );
}

export default CardAlumno