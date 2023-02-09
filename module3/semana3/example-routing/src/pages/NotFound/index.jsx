import './styles.css'
const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif"
const NotFound = ()=>{
    //...
    //console.log()
    //useState
    return (
        <div>
            <h1>404</h1>
            <img src={imgURL} alt="404 error" className="notFound" />
        </div>
    )
}

export default NotFound;

const dummy = (props) => (
    <div>
        only read {props.name}
    </div>
)





