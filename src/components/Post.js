import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";

const mapStateToProps = state => {return {articles: state.remoteArticles.slice(0,10)}}

function Post(props){

    useEffect(() => props.getData());
   
    
    return (
        <ul>
            {props.articles.map(elem =>(
            <li key={elem.id}>{elem.id}</li>
            ))}
        </ul>
        );
}

export default connect(mapStateToProps,{getData})(Post);

