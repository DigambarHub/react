import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function ToDolist(props){

    // const DeletItem=()=>{
    //     console.log("delet")   
    // }

     return( 
     <>
         <div className='div_'>
           <li><DeleteForeverIcon onClick={()=>{props.onSelect(props.id)}} />{props.text}</li>
         </div>
     </>
     );
}
   
export default ToDolist;