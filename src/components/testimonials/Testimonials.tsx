import { useState } from 'react';
import styles from './Testimonials.module.scss';
import type { ITestimonialsItem } from './TestimonialsItem.tsx'
import { TestimonialsItem } from './TestimonialsItem.tsx'

const testimonialsData: ITestimonialsItem[] = [
    {
    id: 1,
    name: 'ОЛЬГА',
    position: 'Квартира 110 м²',
    text: 'Я заказала у Надежды полный комплекс: разработку проекта, подбор материалов и авторский надзор. И это было лучшее решение! Она не только создала потрясающий дизайн-проект, но и взяла на себя всю "бумажную" работу — спецификации, сметы, общение с поставщиками. Благодаря авторскому надзору все строители работали строго по проекту, и я не переживала о качестве. Мы закончили ремонт на 3 недели раньше срока, а результат превзошёл все ожидания. Каждый раз, входя в квартиру, я чувствую, что это действительно моё идеальное пространство. Надежда, спасибо за вашу душу и профессионализм!',
    photo: '../../../public/images/testimonials/testimonials_olga.jpg'
  },
  {
    id: 2,
    name: 'ЕКАТЕРИНА',
    position: 'Квартира 85 м² для семьи с двумя детьми',
    text: 'Надежда — настоящий профессионал с чутким подходом к пожеланиям клиента. Мы переживали, что детская комната будет выглядеть слишком "взросло" или, наоборот, по-детски нелепо, но она нашла идеальный баланс. Теперь у каждого ребёнка есть своё функциональное пространство для игр и учёбы, а общая зона стала местом для наших семейных вечеров. Отдельное спасибо за то, что учла все наши "хотелки" по хранению — теперь каждая вещь на своём месте! Рекомендуем Надежду всем, кто ценит сочетание эстетики и комфорта.',
    photo: '../../../public/images/testimonials/testimonials_kate.jpg'
  },
  {
    id: 3,
    name: 'АЛЕКСЕЙ',
    position: 'Студия 38 м²',
    text: 'Мы очень боялись, что на наш скромный бюджет никто не возьмётся, а если и возьмётся — будет "эконом-вариант" без души. Но Надежда доказала, что стильный интерьер возможен даже с ограниченным бюджетом. Она предложила несколько вариантов отделки и помогла найти поставщиков с хорошими ценами. Результат превзошёл наши ожидания — студия выглядит дорого и уютно, а гости думают, что мы потратили в два раза больше. Огромное спасибо за чёткое соблюдение сметы и сроков!',
    photo: '../../../public/images/testimonials/testimonials_alex.jpg'
  },
  {
    id: 4,
    name: 'СЕРГЕЙ',
    position: 'Загородный дом 180 м² в скандинавском стиле',
    text: 'Заказывал у Надежды полный проект для загородного дома. Это был мой первый опыт работы с дизайнером, и я боялся, что меня не поймут или навяжут что-то своё. Оказалось, что Надежда — отличный слушатель. Она быстро уловила мои предпочтения по скандинавскому стилю и даже предложила такие детали, о которых я сам не додумался. Особенно понравилась 3D-визуализация — я видел каждую комнату ещё до начала ремонта. Благодаря этому все строители работали чётко, и я был спокоен. Теперь дом — моя гордость.',
    photo: '../../../public/images/testimonials/testimonials_serg.jpg'
  },
  {
    id: 5,
    name: 'АННА',
    position: 'Салон красоты 70 м²',
    text: 'Искала дизайнера, который сможет создать не просто красивый, но и функциональный интерьер для моего салона красоты. Надежда предложила концепцию, идеально вписавшуюся в наш бренд. Она помогла с зонированием, выбором освещения и материалов, устойчивых к частой уборке и высокой проходимости. Все клиенты отмечают атмосферу уюта и стиля, а сотрудники говорят, что работать стало гораздо комфортнее. Очень довольна, что выбрала именно Надежду!',
    photo: '../../../public/images/testimonials/testimonials_ann.jpg'
  }
];

function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  const goToPrev = () => {
    setCurrentIndex((index) => (index === 0 ? totalSlides - 1 : index - 1));
  };

  const goToNext = () => {
    setCurrentIndex((index) => (index === totalSlides - 1 ? 0 : index + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>ОТЗЫВЫ КЛИЕНТОВ</h2>
        <TestimonialsItem {...current}/>
        <div className={styles.controls}>
          <button className={styles.arrow} onClick={goToPrev} aria-label="Предыдущий">
            &#8592;
          </button>
          <div className={styles.dots}>
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={goToNext} aria-label="Следующий">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;