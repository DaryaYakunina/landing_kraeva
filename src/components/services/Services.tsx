import styles from './Services.module.scss';
import type { IServicesItem } from './ServicesItem.tsx'
import { ServicesItem } from './ServicesItem.tsx'
import { ROUTES } from '../../routes/routes.ts'

const servicesData: IServicesItem[] = [
    {
        id: '1',
        className: styles.item1,
        data: 'КОНСУЛЬТАЦИЯ ДИЗАЙНЕРА',
        link: ROUTES.CONSULTATION
    },
    {
        id: '2',
        className: styles.item2,
        data: 'КОМПЛЕКТАЦИЯ И ПОДБОР МАТЕРИАЛОВ',
        link: ROUTES.EQUIPMENT
    },
    {
        id: '3',
        className: styles.item3,
        data: 'РАЗРАБОТКА ПРОЕКТА',
        link: ROUTES.DEVELOPMENT
    },
    {
        id: '4',
        className: styles.item4,
        data: 'АВТОРСКИЙ НАДЗОР',
        link: ROUTES.SUPERVISION
    },
]

function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.container}`}>
        {servicesData.map((item) => (
            <ServicesItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;