import {useEffect, useState} from "react";

export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakPoint = 768;


    useEffect(() => {
        console.log('попал в useEffect')
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return {width, breakPoint}
}