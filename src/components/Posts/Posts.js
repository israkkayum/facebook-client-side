import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://israkbook-server-side.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <Container maxWidth="md" style={{ marginTop: "30px", marginBottom: "30px"}}>
                {
                        posts.map(post => <Post
                                    key={post._id}
                                    post={post}
                                >

                                </Post>)
                }
            </Container>
        </div>
    );
};

export default Posts;