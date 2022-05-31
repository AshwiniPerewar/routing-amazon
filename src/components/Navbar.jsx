import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import { Flex } from '@chakra-ui/react'
import styles from  "./Navbar.module.css"
const Navbar = () => {
    const navigate=useNavigate();
    const handleOnclick=(id)=>
    {
        navigate(`/products/${id}`)
    };
    
  return (
    <div className={styles.div}>
      <Flex justify="flex-start" bgColor="wheat" height="30px" color="white" padding="20px" gap={30}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>

        </Flex>
    </div>
  )
}

export default Navbar