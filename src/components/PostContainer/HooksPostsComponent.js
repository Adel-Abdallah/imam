import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from '../../redux';
import Spinner from "../Spinner";
// import Pokeball from '../../img/Pokeball'


function HooksPostsComponent({ postData, fetchPosts }) {
    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line
    }, []);
    return postData.loading ? (
        <Spinner />
    ) : postData.error ? (
        <h2>{postData.error}</h2>
    ) : (
                <div>
                    <h2>Hooks Posts List</h2>
                    <div className="card-panel grey lighten-2">
                        <div>
                            {postData &&
                                postData.posts &&
                                postData.posts.map(post =>

                                    <div className="card-panel hoverable " key={post.id}>
                                        <p>{post.id}</p>
                                        <p class='section flow-text'>{post.title}</p>
                                        <p class='section flow-text'>{post.body}</p>
                                    </div>)}
                        </div>



                    </div>
                </div>
            );
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

export default connect(mapStateToProps, mapDispatchToProps)(HooksPostsComponent);
