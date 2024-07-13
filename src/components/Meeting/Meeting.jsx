import React from 'react';
import './Meeting.css'

export default function Meeting() {
    return (
        <div className='meeting'>
            <div className='meeting__permissions'>
                <h4 className='meeting__title'>До встречи в сентябре</h4>
                <p className='meeting__paragraph-up'>Просим вас подтвердить свое присутствие не позднее 15 ноября 2024 года </p>
                <a className='meeting__form-href' href="#">Заполни форму</a>
                <p className='meeting__paragraph-down'>
                По всем вопросам вы можете обращаться к нам или организатору
                <br />
                Никита <span className='meeting__span'>8-888-888-88-88</span>
                </p>
            </div>
        </div>
    );
}