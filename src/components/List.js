import React from "react";
import { connect } from "react-redux";

//connects a part of Redux state to the props of the react component
const mapStateToProps = state => {
    return {articles:state.articles}
}

// articles is the props
const ConnectedList =({articles}) => (
    <ul>
        {articles.map(elem => (
            <li key={elem.id}> {elem.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;