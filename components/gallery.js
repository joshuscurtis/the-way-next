import Image from 'next/image'
import gallery from '../styles/Gallery.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};



function GalleryMob() {
    return (
    <div className={gallery.instagram}>
            <ScrollAnimation animateOnce={true} animateIn="fadeIn">

    <div className={gallery.container}>
    <Image
        src={"/insta/insta"+"_1.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>
        <Image
        src={"/insta/insta"+"_2.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image> 
            <Image
        src={"/insta/insta"+"_3.webp"} 
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>      <Image
        src={"/insta/insta"+"_4.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>
        <Image
        src={"/insta/insta"+"_5.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image> 
            <Image
        src={"/insta/insta"+"_6.webp"} 
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>      <Image
        src={"/insta/insta"+"_7.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>
        <Image
        src={"/insta/insta"+"_8.webp"}
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image> 
            <Image
        src={"/insta/insta"+"_9.webp"} 
        width={115}
        height={115}
        className={gallery.insta}
        >
        </Image>  
    </div>
    </ScrollAnimation>

    </div>
    )}

    function GalleryDesk() {
        return (
        <div className={gallery.instagram}>
                <ScrollAnimation animateOnce={true} animateIn="fadeIn">
    
        <div className={gallery.container}>
        <Image
            src={"/insta/insta"+"_1.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>
            <Image
            src={"/insta/insta"+"_2.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image> 
                <Image
            src={"/insta/insta"+"_3.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>  <Image
            src={"/insta/insta"+"_4.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>
            <Image
            src={"/insta/insta"+"_5.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image> 
                <Image
            src={"/insta/insta"+"_6.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>  <Image
            src={"/insta/insta"+"_7.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>
            <Image
            src={"/insta/insta"+"_8.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image> 
                <Image
            src={"/insta/insta"+"_9.webp"}
            width={300}
            height={300}
            className={gallery.insta}
            >
            </Image>  
        </div>
        </ScrollAnimation>
    
        </div>
        )}


 export default function Gallery() {
    const isBreakpoint = useMediaQuery(768)
    return (
     <div>
       { isBreakpoint ? (
         <div>
           <GalleryMob />
         </div>
       ) : (
         <div>
            <GalleryDesk />
         </div>
    )
       }
       </div>
       )}

 