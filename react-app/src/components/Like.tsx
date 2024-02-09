import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

interface Props{
    onClick: () => void
}

const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);

    const toggle = () =>{
        setStatus(!status);
        onClick();
    }

    if(status)
        return(
            <FaHeart color="#ff6b81" size={20} onClick={toggle}></FaHeart>
        )
    return <FaRegHeart color="#ff6b81" size={20} onClick={toggle}></FaRegHeart>
}

export default Like