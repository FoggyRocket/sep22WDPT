
function CardGuest({name,email }) {
    return (
      <div className="MovieCard">
        <p>Name: {name}</p>
        <p>email: {email} </p>
        <button className="btn-delete">
              Delete 
        </button>
      </div>
    );
  }
  
  export default CardGuest