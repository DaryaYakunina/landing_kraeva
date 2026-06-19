import React, { useState } from 'react';
import styles from './FeedbackForm.module.scss';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    phone: string;
    comment: string;
}

function FeedbackForm () {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        comment: '',
    });

    //   здесь будут храниться ошибки валидации полей формы
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({}); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // очищаем ошибку при изменении поля
        if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        if (!formData.name.trim()) {
        newErrors.name = 'Имя обязательно для заполнения';
        }
        if (!formData.phone.trim()) {
        newErrors.phone = 'Телефон обязателен для заполнения';
        } else if (!/^\+?[78][\s(]?\d{3}[\s)]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(formData.phone)) {
        newErrors.phone = 'Введите корректный номер телефона';
        }
        // if (!formData.email.trim()) {
        // newErrors.email = 'Email обязателен для заполнения';
        // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        // newErrors.email = 'Введите корректный email';
        // }
        // комментарий не проверяем

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

const sendEmail = (data: FormData) => {
  const templateParams = {
    name: data.name,
    phone: data.phone,
    email: 'darya.yakununa.1991@gmail.com', // почта, куда будет приходить письмо
    comment: data.comment
  };

  emailjs
    .send(
      'service_rs1mbkd',      // из панели EmailJS
      'template_tu3l9xn',     // из панели EmailJS
      templateParams,
      'f16QkcdZqAFK3-MYy'          // Public Key
    )
    .then(
      () => {
        alert('Письмо отправлено!');
      },
      (error) => {
        console.error('Ошибка:', error);
        alert('Не удалось отправить письмо');
      }
    );
};

const handleSubmit = (e: React.FormEvent) => {
    // отменяет браузерное поведение по умолчанию - не перезагружает страницу, данные не теряются
    e.preventDefault();  

    if (validate()) {
    // если передан onSubmit, вызываем его, иначе просто логируем
    sendEmail(formData);
    setFormData({ name: '', phone: '', comment: '' });
    }
};

return (
    <section id="consultation" className={styles.section}>
        <div className={styles.overlay}>
            {/* <div className={styles.container}> */}
            <h2 className={styles.title}>ОБСУДИМ ДЕТАЛИ?</h2>
            <h3 className={styles.subtitle}>Оставьте свои контактные данные для связи</h3>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldsLeft}>
                    <div className={styles.fieldGroup}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                            placeholder="Ваше имя"
                            autoComplete="off"
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                            placeholder="+7 (___) ___-__-__"
                            autoComplete="off"
                        />
                        {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    {/* <div className={styles.fieldGroup}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            placeholder="your@email.com"
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div> */}

                    <button type="submit" className={styles.submitButton}>
                        Получить консультацию
                    </button>
                </div>

                <div className={styles.fieldsRight}>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Дополнительная информация..."
                        rows={4}
                    />
                </div>
            </form>
            {/* </div> */}
        </div>
    </section>
);
};

export default FeedbackForm;