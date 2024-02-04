import PropTypes from 'prop-types'
import '../styles/card.css'
Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    setNbItems: PropTypes.func,
}

function Card({ image, title, setNbItems }) {
    function handleSubmit(e) {
        e.preventDefault()
        const nbItemsValue = parseInt(e.target.nbItems.value) || 1
        setNbItems((current) => current + nbItemsValue)
    }

    return (
        <div className="card">
            <img width={100} src={image} alt={title} />
            <p>{title}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="nbItems" type="number" defaultValue="1" />
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    )
}

export default Card
