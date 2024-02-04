import { Link, useLocation } from 'react-router-dom'
import '../styles/nav.css'
import PropTypes from 'prop-types'

Nav.propTypes = {
    nbItems: PropTypes.number,
}

function Nav({ nbItems }) {
    const location = useLocation()
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'Shop'}>Shop</Link>
                </li>
            </ul>
            {location.pathname === '/' ? null : (
                <div className="cart">
                    <p>Cart: {nbItems}</p>
                    <button>Checkout</button>
                </div>
            )}
        </nav>
    )
}

export default Nav
