import "./styles.css"
import {useNavigate} from 'react-router-dom'



const Home = (props) => {
  //hook de naviagate 
  const navigate = useNavigate()
  console.log("los props",navigate)

  const goToSignup = ()=>{
    navigate("/signup")
  }
    return (
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Welcome to the Hero Home Screen</h1>
          <p className="hero-subtitle">This is a sample hero home screen for a React app.</p>
          <button
          onClick={goToSignup}
          className="hero-button">Learn More</button>
        </div>
      </section>
    );
  };
  
  export default Home;