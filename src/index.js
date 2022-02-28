/* index.js */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';

function CreditCard( { cardInfo } ) {
	const { name, expiration, number, bank } = cardInfo;
	return (
		<aside className="credit-card">
			{ bank && <h2 className="card-title">{ bank }</h2> }
			{ number && <p className="card-number">{ number }</p> }
			{ number && <p className="card-first-four">{ number.slice( 0, 4 ) }</p> }
			{ expiration && (
				<div className="card-exp">
					<small className="card-exp-label">Valid<br/>Thru</small>
					<span className="card-exp-date">{ expiration }</span>
				</div>
			) }
			{ name && <p className="card-name">{ name }</p> }
		</aside>
	)
}

CreditCard.propTypes = {
	cardInfo: PropTypes.exact( {
		name: PropTypes.string.isRequired,
		expiration: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		bank: PropTypes.string.isRequired,
	} ).isRequired,
}

function Main() {
	const userCard = {
		name: 'BRUCE WAYNE',
		expiration: '05/2024',
		number: '1234 5678 8765 4321',
		bank: 'Bank of America',
	}
	return (
		<CreditCard cardInfo={ userCard } />
	)
}

ReactDOM.render( <Main />, document.querySelector( '#root' ) );
