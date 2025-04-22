import Form from "./Form"
import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import { Link, useNavigate } from "react-router-dom";

export default function CharacterCard({id, name, characterType}){
    const characterImages = {
            Mario: "/mario.png",
            Luigi: "/luigi.png",
            Peach: "/peach.png",
            Bowser: "/bowser.png",
            Yoshi: "/yoshi.png",
            Toad: "/toad.png", 
    }

    const imageSrc = characterImages[characterType];



    return(
        <div className="w-[300px] h-[400px] border-2 border-gray-400 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <img src={imageSrc} alt={characterType} className="flex w-3/4 h-5/6 object-cover "/>
            <h1>Name: {name}</h1>
            <h1>Character Type: {characterType}</h1>
            <button className="m-5" >
             <Link to={`/edit/${id}`}>
            <Icon path={mdiSquareEditOutline} size={1} />
            </Link>
           </button>
        </div>
        </div>
    )
}