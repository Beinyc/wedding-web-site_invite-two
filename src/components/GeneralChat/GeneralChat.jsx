import React from 'react';
import './GeneralChat.css'

import generalChatImage from '../../images/general-chat__imege.jpg'

export default function GeneralChat() {
    return (
        <div className='general-chat'>
            <div className='general-chat__permissions'>
                <div className='general-chat__cart'>
                    <h4 className='general-chat__title'>Общий чат</h4>
                    <p className='general-chat__paragrapg-up'>Для вашего удобства мы создали чат в WhatsApp, где вы будете получать информацию обо всех изменениях, связанных с нашей свадьбой. После свадьбы этот чат будет использован для обмена фотографиями. Присоединяйтесь и будем на связи!</p>
                    <a className='general-chat__paragrapg-down' href="#">Вступить в чат</a>
                </div>
                <img className='general-chat__image' src={generalChatImage} alt="" />
            </div>
        </div>
    );
}