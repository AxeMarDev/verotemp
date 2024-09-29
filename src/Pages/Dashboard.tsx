import Headerview from "../Components/Headerview.tsx";
import TableView from "../Components/TableView.tsx";


// note: manually calculating height fixed overflow issue
export default function Dashboard(){
    return(
        <div className={"bg-stone-900 w-screen  flex flex-col fixed"}>
            <Headerview/>
            <div className={"h-[calc(100vh-56px)]  flex p-2 space-x-2"}>
                <TableView title={"Clients"}/>
                <TableView title={"Documents"}/>
            </div>
        </div>
    )
}