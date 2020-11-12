import {useState, useEffect, useRef} from "react"

const useHover = () =>  {

    const ref = useRef(null);
    
    useEffect(() => {

        
        const node = ref.current;

        node.addEventListener("mouseenter", enter)
        node.addEventListener("mouseleave", leave)
        return () => {
            node.removeEventListener("mouseenter", enter)
            node.removeEventListener("mouseleave", leave)
        }

    }, [])

    const [isHovered, setIsHovered] = useState(false);
    
    const enter = () => {
        setIsHovered(true)
    }

    const leave = () => {
        setIsHovered(false)
    }
    return [isHovered, ref]
}

export default useHover