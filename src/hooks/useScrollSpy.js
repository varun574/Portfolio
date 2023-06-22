import { useEffect, useRef } from 'react'

function useScrollSpy(id) {
  const ref = useRef(null)
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      document.querySelectorAll(`#side-menu-nav a.active`).forEach((Element)=>{
        Element.classList.remove("active")
      })
      document.querySelector(`#side-menu-nav a[href='#${id}']`).classList.toggle("active", entries[0].isIntersecting);
    },{
      rootMargin:"-50%"
    })
    observer.observe(document.getElementById(id));
    return ()=>{
      observer.disconnect();
    }
  }, [id])
  return ref;
}

export default useScrollSpy