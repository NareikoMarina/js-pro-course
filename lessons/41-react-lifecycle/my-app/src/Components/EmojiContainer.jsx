import React from 'react';
import EmojiRow from '../Components/EmojiRow';
import './EmojiContainer.css';

const EmojiContainer = (props) => {
    return (
        <div className = 'emoji-container'>
            {props.emojiSearch.map((elem, index) => {
                return <EmojiRow key = {index} img = {elem.symbol} title = {elem.title} />
            })}
        </div>
    );
};

export default EmojiContainer;