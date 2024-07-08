import React from 'react';
import './Wishes.css'

export default function Wishes() {
    return (
        <div className='wishes'>
            <div className='wishes__permissions'>
                <h4 className='wishes__title'>Пожелания</h4>
                <div className='wishes__flex'>
                    <div className='wishes__cart'>
                        <p className='wishes__paragraph'>
                        -1-
                        <br />
                        <span className='wishes__span'>"Горько!"</span>
                        <br />
                        От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного таинства
                        </p>
                    </div>
                    <div className='wishes__cart-center'>
                        <p className='wishes__paragraph'>
                        -2-
                        <br />
                        <span className='wishes__span'>"Цветы"</span>
                        <br />
                        Пожалуйста, не дарите нам живые цветы. Мы не успеем насладиться их красотой до отъезда в свадебное путешествие
                        </p>
                    </div>
                    <div className='wishes__cart'>
                        <p className='wishes__paragraph'>
                        -3-
                        <br />
                        <span className='wishes__span'>"Подарки!"</span>
                        <br />
                        Если хотите подарить ценный и нужный нам подарок - поместите его в конверт
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}