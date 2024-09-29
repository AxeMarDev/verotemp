import logo from "../assets/verotemplogo.png"
import {Link} from "react-router-dom";
export default function Headerview(){
    return(
        <div className={"bg-stone-900 w-screen h-14  text-white grid content-center pl-2"}>
            <Link to={"/"}><img className={"h-10"} src={logo}/></Link>
        </div>
    )
}

