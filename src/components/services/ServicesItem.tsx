import styles from './ServicesItem.module.scss';
import { Link } from 'react-router-dom';

export interface IServicesItem {
    id: string;
    className: string;
    data: string;
    link: string;
}

export function ServicesItem (props: IServicesItem) {
    return (
        <div className={`${styles.item} ${props.className}`}>
            <Link to={props.link}>{props.data}</Link>
        </div>
    )
}
