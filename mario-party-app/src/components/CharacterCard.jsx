import Form from "./Form"
export default function CharacterCard({name, characterType}){
    const characterImages = [
        {
            Mario: "/src/assets/mario.png",
            Luigi: "/src/assets/luigi.png",
            Peach: "/src/assets/peach.png",
            Bowser: "/src/assets/bowser.png",
            Yoshi: "/src/assets/yoshi.png",
            Toad: "/src/assets/toad.png", 
        }
    ]
    const imageSrc = characterImages[name];
    return(
        <div className="w-[300px] h-[200px] border-2 border-gray-400">
            <img src={imageSrc} />
            <h1>Name: {name}</h1>
            <h1>Character Type: {characterType}</h1>
            
        </div>
    )
}