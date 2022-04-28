import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        {/*<button onClick={() => {
            dispatch(removeExpense({id})); // dispatch bierze się z connect
        }}>Remove
        </button>*/}
    </div>
);

export default ExpenseListItem;