import TableCard from "./TableCard.tsx";


type pTableView = {title:string}
export default function TableView({title}:pTableView){
    return(
        <div className={"bg-stone-800 h-full  w-96 rounded  text-white  flex flex-col"}>
            <p className={"font-bold text-sm text-stone-400 p-2"}>{title}</p>
            <div className={"w-full h-[1px] bg-stone-800 flex"}/>
            <div className={" overflow-scroll flex flex-col"}>
                <div className={"flex-col "}>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>
                    <TableCard/>

                </div>

            </div>
        </div>
    )
}