import {useContext, useEffect, useState} from "react";
import axios from "axios"
import { UserContext } from "../UserContext";
import { Redirect} from "react-router";

export default function User() {
    const [pokemons, setPokemons] = useState([])
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        async function getPokemons(){
            await axios.get("https://pokedex20201.herokuapp.com/users/"+user)
            .then(response => setPokemons(Object.values(response.data.pokemons)))
            .catch(error => alert(error))
    }
        getPokemons()
    },[user, pokemons])


    if(user === undefined){
        return(<Redirect to="/"/>)
    }

    }

