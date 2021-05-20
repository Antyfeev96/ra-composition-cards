import './Card.scss';
import PropTypes from 'prop-types'

export default function Card(props) {
  const { title, content, buttonText } = props;
  return (
    <div className="card">
      {props.children}
      <div className="card__content">
      <span className="card__title">{title}</span>
      <div className="card__text">{content}</div>
      <button className="card__button">{buttonText}</button>
      </div>
    </div>
  )
}

Card.propTypes = {

}