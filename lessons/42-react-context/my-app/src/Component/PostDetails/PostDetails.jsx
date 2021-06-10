import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";  
import styles from './PostDetails.module.css';

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
          .then((r) => r.json())
          .then((data) => setPost(data));
      }, [postId])

    useEffect(() => {
      fetch(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((r) => r.json())
        .then((data) => setComment(data));
    }, [postId])

    return post ? (
      <>
      <div className={styles.details}>
        <h1 className={styles.details__header}>Post Details</h1>
        <h2 className={styles.details__title}>{post.title}</h2>
        <h3 className={styles.details__body}>{post.body}</h3>
      </div>
      <div className={styles.comments}>
      <h2 className={styles.comments__header}>Post Comments</h2>
        {comment.map((value) => {
          return (
            <div key={value.id}>
                <h2 className={styles.comments__body}>{value.body}</h2>
                <h3 className={styles.comments__name}>{value.name}</h3>
                <h4 className={styles.comments__email}>{value.email}</h4>
            </div>
          )
        })}

      </div>
      </>
    ) : 'Loading...'
  }

  export default PostDetails; 