import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { Image,Flex,Grid} from '@chakra-ui/react'
const Products = () => {
    const[products,setProducts]=useState([]);


    useEffect(()=>
    {
        const fetchProducts=async()=>
        {

            let r=await fetch("http://localhost:3004/products");
            let d=await r.json();
            setProducts(d);
        };
        fetchProducts();
    },[])
  return (
    <div>Products
        <div>
            <Grid templateColumns="repeat(4,1fr)" marginTop={40}>
            {products.map((pr)=>
            (
                <div key={pr.id}>
                 <Flex direction="row"><Flex direction="column" gap={20}><Image src={`${pr.image}`} width="300px" height="300px"/>{pr.name}  |  ${pr.price}   <Link to={`/products/${pr.id}`} > more details</Link></Flex></Flex>
                </div>
                
            ))}
            </Grid>
        </div>
    </div>
  )
}

export default Products