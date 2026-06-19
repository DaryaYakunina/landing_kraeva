// import {Link} from "react-router-dom";
// import {ROUTES} from "../../routes/routes.ts";
import MainScreen from '../../components/mainScreen/MainScreen.tsx';
import Services from "../../components/services/Services.tsx";
import TestimonialsSlider from '../../components/testimonials/Testimonials.tsx';
import About from '../../components/about/About.tsx';
import Gallery from '../../components/gallery/Gallery.tsx';
import FeedbackForm from '../../components/feedbackForm/FeedbackForm.tsx';
import author_photo from '../../../public/images/author_photo.png'


function Home() {
    return (
        <>
            <MainScreen />
            <Services />
            <About
                photoUrl={author_photo}
                title="ОБ АВТОРЕ"
                text={`Меня зовут Надежда, и я занимаюсь дизайном интерьеров уже более 10 лет.\n\nМоя философия проста: интерьер должен быть продолжением вас. Я не навязываю стиль, а помогаю раскрыть ваш. В основе каждого проекта — внимательное слушание, продуманная эргономика и любовь к деталям. Я верю, что красивое пространство способно менять жизнь к лучшему. И я здесь, чтобы сделать ваш дом именно таким.`}
                caption="Надежда Краева"
            />
            <Gallery />
            <TestimonialsSlider />
            <FeedbackForm />
        </>
    );
}

export default Home;