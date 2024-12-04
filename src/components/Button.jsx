import PropTypes from 'prop-types';
import '../css/Button.css'

function Button({ color = 'primary', addClass = '', size = 'medium', onClick, children, disabled = false }) {
  return (
    <button
      className={`btn btn-${color} btn-${size} ${addClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'gray', 'info']), 
  size: PropTypes.oneOf(['small', 'medium', 'large']), 
  addClass: PropTypes.string, 
  children: PropTypes.node.isRequired, 
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
