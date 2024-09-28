

type pTableView = {title:string}
export default function TableView({title}:pTableView){
    return(
        <div className={"bg-stone-700  h-full flex w-96 rounded p-2 text-white "}>
            <p className={"font-bold text-stone-400"}>{title}</p>
        </div>
    )
}