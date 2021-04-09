import Image from 'next/image'
import gallery from '../styles/Gallery.module.css'

export default function Hero() {
    return (
    <div className={gallery.instagram}>
    <div className={gallery.container}>
        <Image
        src={"/insta/insta"+"_1.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>
        <Image
        src={"/insta/insta"+"_2.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_3.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_4.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_5.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_6.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image><Image
        src={"/insta/insta"+"_7.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_8.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>       <Image
        src={"/insta/insta"+"_9.webp"}
        width={330}
        height={330}
        className={gallery.insta}>
        </Image>
    </div>
    </div>
    )}