import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from './Gallery.module.scss';
import { useState } from 'react';
import img1 from '../../../public/images/img1.jpg';
import img2 from '../../../public/images/img2.jpg';
import img3 from '../../../public/images/img3.jpg';
import img4 from '../../../public/images/img4.jpg';
import img5 from '../../../public/images/img5.jpg';
import img6 from '../../../public/images/img6.jpg';
import img7 from '../../../public/images/img7.jpg';
import img8 from '../../../public/images/img8.jpg';
import img9 from '../../../public/images/img9.jpg';

interface IGalleryItem {
    src: string;
}

const galleryData: IGalleryItem[] = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 }
];

function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <>
        <section id="gallery" className={styles.section}>
            <div className={`container ${styles.container}`}> 
                {galleryData.map((img, i) => (
                <div key={i} className={styles.image}>
                <img 
                    src={img.src}
                    onClick={() => {
                        setIndex(i);
                        setOpen(true);
                    }}           
                />
                </div>
                ))}  
            </div> 
        </section>
        <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={galleryData}
                index={index}
            />
        </>
    );
}

export default Gallery;