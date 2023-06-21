import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react'

function useScrollSpy(id) {
  const ref = useRef(null)
  const isInView = useInView(ref);
  useEffect(()=>{
    if(isInView){
      console.log(id +" "+isInView)
      document.querySelector('#side-menu-nav a.active').classList.remove("active");
      document.querySelector(`#side-menu-nav a[href='#${id}']`).classList.add("active");
    }
  }, [isInView, id])
  return ref;
}

export default useScrollSpy