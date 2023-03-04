import { useEffect, useState } from "react"
import TableService from "../../api/Inventory/TableService"



export const TableComponent= (props)=>{
    const [products,setProducts] = useState([
        {"product_id":0}
    ])

    const [attr,serAttr] = useState([])
    // const 

    const [isAddPressed,setisAddPressed] = useState(false)
    const [isSubmitPressed,setisSubmitPressed] = useState(false)
    const [isUpdatePressed,setisUpdatePressed] = useState(false)

    const [newProduct,setnewProduct] = useState(new Map())
    
    const updateMap = (key, value) => {
        setnewProduct(newProduct.set(key, value));
      }

    const refreshProducts = () => {
        console.log('refresh')
        TableService.getAllProducts()
            .then((response)=>{
                setProducts(response.data)  
                serAttr(Object.keys(response.data[0]))

            })
    }
    const SubmitPressed =()=>{
        setisSubmitPressed(true)
        setisAddPressed(false)
        handleSubmit()
    }
    const updatePressed =(id)=>{
        console.log(isUpdatePressed)
        setisUpdatePressed(!isUpdatePressed)
        // handleUpdate(id)
    }

    const handleDelete = (id) => {
        TableService.deleteProduct(id)
            .then(()=>refreshProducts())
    }
    const handleUpdate = () => {
        const product = Object.fromEntries(newProduct)
        console.log(product)
        TableService.updateProduct(product)
            .then((response)=>{
                console.log(response)
                refreshProducts()
            })
            .catch((error)=>console.log(error))
    }

    const TableRow =(props)=>{
        if(!props.isUpdatePressed){
            if(props.attribute === "categories"){
                return <td>{
                        props.product[props.attribute].map(categories=>{
                        // console.log(categories["category"])
                        return <div>{categories["category"]}</div>
                        })
                    }   </td>
                }
            return <td>{props.product[props.attribute].toString()}</td>
        }
        else{
            if(props.attribute==="categories"){
                return <td>
                    <input type={"text"} className="attributes"
                        onChange={
                            (e)=>updateMap(props.attribute,e.target.value
                                .split(",")
                                .map((category)=>{
                                    return { "category" : category}
                                })
                    )}></input></td>
            }
                return <td><input type={"text"} className="attributes"
                 onChange={(e)=>updateMap(props.attribute,e.target.value)}>
                </input></td>
        }
    }

    const handleSubmit = (id)=>{
        const product = Object.fromEntries(newProduct)
        console.log(product)
        TableService.addNewProduct(product)
            .then((response)=>{
                console.log(response)
                refreshProducts()
            })
            .catch((error)=>console.log(error))
        

    }

    useEffect(
        ()=>{refreshProducts()},[]
    )
    return(
        <div className="container">
            <h2 className="text-center">Table</h2><br/>
            <table className="table">
                <thead>
                    <tr>
                        {attr.map(attribute =>{
                            // if(attribute==="categories"){
                            //     // console.log(products[0][attribute])
                            //     return products[0][attribute].map(categories=>{
                            //         // console.log(categories["category"])
                            //         return <th>{categories["category"]}</th>
                            //     })                            }
                            return <th key={attribute}>{attribute}</th>
                        }
                        )}
                        <button className="btn btn-success" onClick={()=>setisAddPressed(true)}>Add</button>
                    </tr>
                </thead>
                <tbody>
                    {isAddPressed &&
                                        <tr>
                                            {attr.map(attribute =>{
                                                if(attribute==="categories"){
                                                    return <td><input type={"text"} className="attributes"
                                                    onChange={(e)=>updateMap(attribute,e.target.value
                                                        .split(",")
                                                        .map((category)=>{
                                                            return { "category" : category}
                                                            }
                                                        )
                                                        )}>
                                                   </input></td>
                                                }
                                                    return <td><input type={"text"} className="attributes"
                                                     onChange={(e)=>updateMap(attribute,e.target.value)}>
                                                    </input></td>
                                                })
                                            }
                                            {isAddPressed && <button className="btn btn-normal" onClick={SubmitPressed}>Submit</button>}
                                        </tr>}
                                        
                    {products.map(
                        product=>
                            <tr key={product.product_id}>
                                {attr.map((attribute) =>{
                                    return <TableRow attribute={attribute} product = {product} 
                                    isUpdatePressed = {isUpdatePressed}></TableRow>
                                })}
                                <td>  
                                    <button className="btn btn-warning" onClick={()=>updatePressed(product.product_id)}>
                                        Update
                                    </button>
                                    <br></br>  
                                    <button className="btn btn-danger" onClick={()=>handleDelete(product.product_id)}>Delete</button>
                                </td>
                            </tr>
                        )}  
                </tbody>
            </table>
        </div>
    )
}

