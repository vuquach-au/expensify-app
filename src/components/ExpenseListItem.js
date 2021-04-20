import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt}) => {
    return(

        <div>
            <Link to={`/edit/${id}`} description={description}>
                <h3>{description}</h3>
            </Link>
    <p>{amount} - {note} - {createdAt}</p>
                
                
        </div>
    );
};

export default connect()(ExpenseListItem);