import { useEffect, useRef, useState } from 'react'

function useScrollAnimation() {
  const [isIntersecting, setisIntersecting] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // const targetElement = entries[0].target;
      setisIntersecting(entries[0].isIntersecting);
  
      console.log(entries[0].target.id + " " + entries[0].isIntersecting);
    }, {
      threshold: 0.5
    });
  
    const elementToObserve = ref.current;
    observer.observe(ref.current);

    return () => {
      observer.unobserve(elementToObserve);
    };
  }, [ref]);
  
  return [ref, isIntersecting];
}

export default useScrollAnimation