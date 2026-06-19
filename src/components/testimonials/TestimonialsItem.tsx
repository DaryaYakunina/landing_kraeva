import styles from './TestimonialsItem.module.scss';

export interface ITestimonialsItem {
    id: number;
    name: string;
    position: string;
    text: string;
    photo: string;
}

export function TestimonialsItem (props: ITestimonialsItem) {
    return (
        <div className={styles.card}>
            <img src={props.photo} alt={props.name} className={styles.photo} />      
            <div className={styles.authorInfo}>
                <div className={styles.testimonialHeader}>
                    <p className={styles.authorName}>{props.name}</p>
                    <p className={styles.authorPosition}>{props.position}</p>
                </div>
                <p className={styles.testimonialText}>{props.text}</p>
            </div>            
        </div>
    )
}
