import axios from "axios";
import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { UserContext } from "../UserContext";

export default function SignIn(){
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState();
    const [userName, setUserName] = useContext(UserContext);

    if(redirect){
        return(
            <Redirect to={redirect}/>
        )
    }

    const handleSubmit = event =>{
        async function signin(){
            await axios.post('https://pokedex20201.herokuapp.com/users', {"username": name})
            .then(response => {
                setUserName(name)
                setRedirect("/")
            })
            .catch(error => {
                alert("Usuário já cadastrado. Por favor, faça o login.")
                console.log(error)
                setRedirect("/Login")
            })
        }
        event.preventDefault();
        signin()
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Cadastro:</h2>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}