import styles from './ServicesDescription.module.scss';

export interface IServicesDescription {
    id: string;
    title: string;
    data: string[];
    className: string;
    img?: string;
}

export function ServicesDescription (props: IServicesDescription) {
    return (
        <div className={`${styles.card} ${props.className ? styles[props.className] : ''}`}>
            {
                (  props.img?.includes('.jpg')||props.img?.includes('.jpeg')||props.img?.includes('.png') ) 
                ? 
                (
                    <img
                        src={props.img}
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.info}>
                        <h3 className={styles.title}>{props.title}</h3>
                        <div className={styles.dataList}>
                            <ul>
                                {props.data.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
}