import { useEffect, useState } from 'react'

function useLoadImage(image) {
    const [imageSrc, setImageSrc] = useState("");
    useEffect(()=>{
        const loadImage = async ()=>{
            const {default : src} = await import(`../assets/images/${image}`)
            setImageSrc(src);
        }
        loadImage();
    }, [image])
  return imageSrc;
}

export default useLoadImage