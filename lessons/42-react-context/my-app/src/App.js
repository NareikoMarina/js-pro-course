import classNames from 'classnames/bind';
import styles from './App.module.css';
import Posts from './Component/Posts';
import {BrowserRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import User from './Component/User/User';
import { themeContext }from './Context/themeContext';
import PostDetails from './Component/PostDetails/PostDetails';
import Button from './Component/Button/Button';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function App() {

  const { currentTheme, changeTheme } = useContext(themeContext);

  return (
    <BrowserRouter>
    <div className={cx('root', 'dark')} >
      
      <Button className={styles.change__button} onClick={changeTheme}>
        Theme is {currentTheme === 'dark' ? 'light' : 'dark'}
      </Button>
      <header className={styles.change__link}>
        <NavLink to='/posts' activeClassName={styles.selected} className={styles.change__link_post} exact>Posts</NavLink>
        <NavLink to='/user' activeClassName={styles.selected} className={styles.change__link_user} exact>User</NavLink>
      </header>
        <Switch>
          <Route path='/posts' component={Posts} exact/>
          <Route path='/user' component={User} />
          <Route path='/posts/:postId' component={PostDetails}/>
          <Redirect to ='/posts'/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
