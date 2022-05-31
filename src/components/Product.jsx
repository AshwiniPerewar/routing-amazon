import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Image,Flex} from '@chakra-ui/react'
const Product = () => {
    const[product,setProduct]=useState({});

    const{id}=useParams();
    useEffect(()=>
    {
       if(id)
        {

            fetch(`http://localhost:3004/products/${id}`)
            .then((r)=>r.json())
            .then((d)=> setProduct(d));
        }
       
    },[id])

  return (
    <div>
    <Image src={`${product.image}`} height="400px" width="500px" marginTop="30px"/>
     <Flex direction="column">Product ID:{id}
    <div>{product.name}  |  ${product.price}  </div>
    <div>{product.details}</div>
    </Flex> </div>
  )
}

export default Product