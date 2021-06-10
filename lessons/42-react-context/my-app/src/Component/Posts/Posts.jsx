import Card from "../Card";
import Button from "../Button";
import {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import ThemeProvidor, {themeContext} from "../../Context/themeContext";
import styles from './Posts.module.css';
import {Link} from 'react-router-dom';

const CardFooter = ({ author, id }) => (
    <>
        Author: <Button styleType='link'>{author.name}</Button><br />
        <Link to={`/posts/${id}`} className={styles.link}>Show details</Link>
    </>
)

const Posts = () => {
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [renderedCount, setRenderedCount] = useState(4);

    const renderedPosts = useMemo(() => {
        return posts.slice(0, renderedCount);
    }, [posts, renderedCount]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_expand=user')
            .then((r) => r.json())
            .then((results) => {
                setPosts(results);
                setLoading(false);
            })
    }, [])

    const onLoadMore = useCallback(() => {
        setRenderedCount(renderedCount + 4);
    }, [renderedCount])


    return isLoading ? 'Loading...' : (
        <>
            <ul className={styles.list}>
                {renderedPosts.map((post) => (
                    <li className={styles.item}>
                        <Card
                            footer={<CardFooter author={{ name: post.user.name }} id={post.id}/>}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Card>
                    </li>
                ))}
            </ul>

            <div className={styles.showMore}>
                <Button onClick={onLoadMore} className={styles.change__button}>Show more</Button>
            </div>
        </>
    )
}

export default Posts;