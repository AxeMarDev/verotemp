import Headerview from "../Components/Headerview.tsx";
import TableView from "../Components/TableView.tsx";


export default function Dashboard(){
    return(
        <div className={"bg-stone-800 w-screen h-screen fixed flex flex-col"}>
            <Headerview/>
            <div className={" h-full flex p-2 space-x-2"}>
                <TableView title={"Clients"}/>
                <TableView title={"Documents"}/>
            </div>
        </div>
    )
}