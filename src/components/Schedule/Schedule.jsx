import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Schedule.css';

const Schedule = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            once: true, // Анимация происходит только один раз
        });
    }, []);

    const events = [
        {
            time: '14:00',
            title: 'Сбор гостей и фуршет',
            description: 'Время пролетит незаметно за общением с другими гостями. Кроме того, ожидание скрасит приветственный фуршет.',
        },
        {
            time: '17:00',
            title: 'Торжественная церемония',
            description: 'Пожалуй, самый трогательный момент этого дня. Молодожены обмениваются кольцами в окружении самых близких.',
        },
        {
            time: '18:00',
            title: 'Свадебный ужин',
            description: 'С официальной частью покончено, да начнется веселье! Готовьте удобные туфли и хорошее настроение, обещаем, что скучно не будет.',
        },
        {
            time: '00:00',
            title: 'Окончание вечера',
            description: 'На часах полночь - время завершения торжества. Спасибо, что были с нами в этот важный день!',
        },
    ];

    return (
        <div className="schedule">
            <h1 className="schedule-title">Расписание дня</h1>
            <p className="schedule-date">Воскресенье, 28 сентября</p>
            <div className="schedule-events">
                {events.map((event, index) => (
                    <div className="schedule-event" key={index} data-aos="fade-up" data-aos-delay={index * 300}>
                        <div className="event-time">{event.time}</div>
                        <div className="event-details">
                            <h2 className="event-titles">{event.title}</h2>
                            <p className="event-description">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
