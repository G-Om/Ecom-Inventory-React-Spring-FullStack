import { useState } from "react"


export const TableComponent= ()=>{
    const [products,setProducts] = useState(
        [
        {id:1, name:"Om", age:12 , post:"engg"},
        {id:2, name:"Kiki", age:12 , post:"engg"},
        {id:3, name:"Jade", age:12 , post:"engg"},
        {id:3, name:"Jade", age:12 , post:"engg"}
        ]
    )
    const [attr,serAttr] = useState(["id", "name", "age", "post","has"])

    return(
        <div>
            Table Component
            <table className="table">
                <thead>
                    <tr>
                        {attr.map(attribute =>
                            <th>{attribute}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>
                        <tr>
                            {attr.map(attribute =>
                                <td>{product[attribute]}</td>
                                )}
                        </tr>
                        )}  
                </tbody>
            </table>
        </div>
    )
}