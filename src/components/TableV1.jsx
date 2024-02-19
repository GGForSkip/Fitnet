import { useEffect,useState } from "react";

export const TableV1=({params})=>{

    const [headers,setHeader]=useState([]);
    const [values,setValues]=useState([]);

    useEffect(()=>{
        
        if(params && params.headers!=null && params.rows!=undefined){
            setHeader(params.headers.map((header,index)=>{
                return(
                    <th scope="col" key={index}>{header}</th>
                )
            }));

            setValues(params.rows.map((value,index)=>{
                value.index=index;
                return params.rowCreator(value);
            }));
        }

       
    },[])
    


    return(
        <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                       {headers}
                    </tr>
                </thead>
                <tbody>
                    {values}
                </tbody>
        </table>
    )
}


export default TableV1;