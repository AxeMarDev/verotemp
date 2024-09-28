import logo from "../assets/verotemplogo.png"
export default function Headerview(){
    return(
        <div className={"bg-stone-800 w-screen h-14 text-white grid content-center pl-2"}>
            <img className={"h-10"} src={logo}/>
        </div>
    )
}