import React from 'react';
import './EmojiRow.css';

function EmojiRow({img, title}) {
    return (
      <div className = 'show-emoji'>
        <span className = 'emoji-img' >{img}</span>
        <span className = 'emoji-title' >{title}</span>
      </div>
    );
  }

export default EmojiRow;