import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from './Gallery.module.scss';
import { useState } from 'react';

interface IGalleryItem {
    src: string;
}

const galleryData: IGalleryItem[] = [
    { src: "./public/images/img1.jpg" },
    { src: "./public/images/img2.jpg" },
    { src: "./public/images/img3.jpg" },
    { src: "./public/images/img4.jpg" },
    { src: "./public/images/img5.jpg" },
    { src: "./public/images/img6.jpg" },
    { src: "./public/images/img7.jpg" },
    { src: "./public/images/img8.jpg" },
    { src: "./public/images/img9.jpg" }
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