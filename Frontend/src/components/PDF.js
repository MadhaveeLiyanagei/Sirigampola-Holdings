import React from 'react';
import Pdf from 'react-to-pdf'
import ListInventoryComponent from './ListInventoryComponent';

//import { ListInventoryComponent } from './ComponentToPrint';

const ref = React.createRef();

const PDF = (props) =>{
    return(
      <>
         <div className="Post" ref={ref}>
             
         </div>
         < Pdf targetRef={ref} filename="Inventory.pdf">
           {({toPdf}) => <button onClick ={toPdf}>Generate Report</button>}
           </Pdf>
      </>
    )
}

export default PDF;