import { useState } from "react"

function Todolist(props){
    const [box,setBox]=useState(false)
    const [classnm,setClassNm]=useState("")
    const [color,setColor]=useState("")    
    function check(box) { 
        if(box==false){
            setBox(true);
            setClassNm("textcut")
        }
        else{
            setBox(false);
            setClassNm("")
        }
     }
     
        if(parseInt(props.line.index)%5==0 && classnm==""){
             setClassNm("blue")
         }if(parseInt(props.line.index)%5==1 && classnm==""){
             setClassNm("red")
         }if(parseInt(props.line.index)%5==2 && classnm=="") {
             setClassNm("green")
         }if(parseInt(props.line.index)%5==3 && classnm==""){
             setClassNm("yellow")
         }if(parseInt(props.line.index)%5==4 && classnm==""){
             setClassNm("pink")}
     
    
    // console.log("todolist",props)
    
    return(
        <div  className="tablealign">
        <table>
        <tr>
        <td><span class="badge bg-primary">{props.line.time} </span>&nbsp;&nbsp;</td>
        <td><input
            className="form-check-input"
            defaultChecked={box}
            type="checkbox"
            onChange={()=>check(box)}	
            id="flexCheckDefault"
            />
        &nbsp;&nbsp;<span 
        className={classnm} 
        >{props.line.todo}</span></td></tr>
        </table>
    </div>
    )
}

 export default Todolist;