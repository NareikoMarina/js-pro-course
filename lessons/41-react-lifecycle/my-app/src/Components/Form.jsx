import React, {useState, useEffect} from 'react';
import EmojiContainer from './EmojiContainer';
import './Form.css';

const Form = () => {
    const [emoji, setEmoji] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/asimonok/42-js-pro-course/lesson/41-react-lifecycle/lessons/41-react-lifecycle/emojiList.json')
        .then((r) => r.json())
        .then((r) => setEmoji(r))
    }, []);

    const [emojiSearch, setEmojiSearch] = useState([]);

    const searchEmoji = (element) => {
        setEmojiSearch(emoji.filter((item) => 
            item.title.includes(element.target.value.toLowerCase()) ||
            item.keywords.includes(element.target.value.toLowerCase())
        )
    )};

    return (
        <div className = 'form-container'>
            <input className = 'search-input' type = 'text' onClick = {searchEmoji.length >= 15 ? searchEmoji.slice(0, 15) : searchEmoji} onChange = {searchEmoji}/>
            <EmojiContainer emojiSearch = {emojiSearch.length >= 15 ? emojiSearch.slice(0, 15) : emojiSearch} />
        </div>
    )
};

export default Form;