import React, { useState, useEffect } from 'react';
import './Timer.css'; // Подключаем CSS файл
import backgroundImage from '../../images/bouquet.jpg'; // Импортируем изображение

export default function Timer() {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2024-08-10T23:59:59"); // Установи свою дату здесь
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="timer" style={timerStyle}>
            <div className="timer-segment">
                <span className="timer-number">{timeLeft.days || '0'}</span>
                <span className="timer-label">Дней</span>
            </div>
            <div className="timer-segment">
                <span className="timer-number">{timeLeft.hours || '0'}</span>
                <span className="timer-label">Часов</span>
            </div>
            <div className="timer-segment">
                <span className="timer-number">{timeLeft.minutes || '0'}</span>
                <span className="timer-label">Минут</span>
            </div>
            <div className="timer-segment">
                <span className="timer-number">{timeLeft.seconds || '0'}</span>
                <span className="timer-label">Секунд</span>
            </div>
        </div>
    );
}