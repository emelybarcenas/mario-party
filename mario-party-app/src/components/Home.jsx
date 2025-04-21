import Form from "./Form"
export default function Home(){
    return(
<div className="scroll-m-0 pt-30">
<h1 className='font-bold text-4xl text-red-600 '>Let's Party!</h1>
<p className='p-10 flex flex-col'>Build your dream team from the Mushroom Kingdom! <span>Choose your ultimate Mario Squad from your favorite characters.</span></p>
<img src="/src/assets/mario-squad.svg" alt="Mario squad" className="w-full h-[500px]"/>
</div>
    )
}