import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../../redux'
import Spinner from './../Spinner';

class ClassPostComponent extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const { postData } = this.props
        return postData.loading ? (
            <Spinner />
        ) : postData.error ? (
            <h2>{postData.error}</h2>
        ) : (
                    <div>
                        <h2 >Class Posts List</h2>
                        <div className='card-panel grey lighten-2 '>
                            <div>
                                {postData &&
                                    postData.posts &&
                                    postData.posts.map(post =>

                                        <div className="card-panel hoverable" key={post.id}>
                                            <p>{post.id}</p>
                                            <p className='card-title'>{post.title}</p>
                                            <p className='card-content'>{post.body}</p>
                                        </div>)}
                            </div>


                        </div>
                    </div>

                );
    }
}

const mapStateToProps = state => {
    return {
        postData: state.post,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ClassPostComponent);