import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ClipLoader from 'react-spinners/ClipLoader';
import {getAllPosts} from '../../actions/Posts'

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.object.isRequired
    };


    componentDidMount() {
        console.log("test", this.props);
        this.props.getAllPosts();
    }


    render() {
        console.log("this.props.POSTS.fetching", this.props.posts.fetching);
        return (
            <div>
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.props.posts.fetching}
                    />
                </div>
                <h1>Posts</h1>
                {this.props.posts.posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.id}</h3>
                        <p>{post.title}</p>
                    </div>))}
                {/*{this.props.posts.error.response ? "Error occured" : "Success"}*/}
            </div>
        );
    }

}

/*const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}*/


const mapStateToProps = ({posts}) => {
    return {
        posts
    }
};

const mapDispatchToProps = {
    getAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);



