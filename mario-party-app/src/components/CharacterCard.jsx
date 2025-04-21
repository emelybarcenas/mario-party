import Form from "./Form"
export default function CharacterCard({name, characterType}){
    const characterImages = {
            Mario: "/mario.png",
            Luigi: "/public/luigi.png",
            Peach: "/peach.png",
            Bowser: "/bowser.png",
            Yoshi: "/yoshi.png",
            Toad: "/toad.png", 
    }
    const imageSrc = characterImages[name];
    return(
        <div className="w-[300px] h-[200px] border-2 border-gray-400">
            <img src={imageSrc} alt={name}/>
            <h1>Name: {name}</h1>
            <h1>Character Type: {characterType}</h1>
            
        </div>
    )
}