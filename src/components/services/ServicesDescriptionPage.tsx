import type { IServicesDescription } from './ServicesDescription.tsx';
import { ServicesDescription } from './ServicesDescription.tsx';
import styles from './SecvicesDescriptionPage.module.scss'
import { useEffect } from 'react';

export interface IServicesDescriptionPage {
    title: string;
    subtitle: string;
    data: IServicesDescription[];
}

export function ServicesDescriptionPage(props:IServicesDescriptionPage) {

    useEffect(() => {
    if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subtitle}>{props.subtitle}</p>
                <div className={styles.descriptionCards}>
                    {props.data.map((item) => (
                        <ServicesDescription key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}