import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

 const ExpenseListItem = ({ id, description, amount, note, createdAt }) => {
    return(

        <div>
            <Link to={`/edit/${id}`} description={description}>
                <h3>{description}</h3>
            </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
        </div>
    );
};

// export default connect()(ExpenseListItem);
export default ExpenseListItem;