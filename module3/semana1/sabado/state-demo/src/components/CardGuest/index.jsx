
function CardGuest({name,email,onDelete }) {
    return (
      <div className="MovieCard">
        <p>Name: {name}</p>
        <p>email: {email} </p>
        <button 
        onClick={onDelete}
        className="btn-delete">
              Delete 
        </button>
      </div>
    );
  }
  
  export default CardGuest