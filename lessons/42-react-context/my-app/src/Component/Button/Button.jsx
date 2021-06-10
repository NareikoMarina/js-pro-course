import classNames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

const Button = ({ children, styleType = 'default', ...restProps }) => (
    <button
        className={cx(
            'root',
            styleType,
        )}
        {...restProps}
    >
        {children}
    </button>
)

export default Button