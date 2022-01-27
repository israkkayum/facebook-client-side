import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { sizing } from '@mui/system';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Body = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [post, setPost] = useState([]);
    const [active, setActive] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const addPost = { ...post };
        addPost[field] = value;
        setPost(addPost);
        setActive(true);
    }


    const handlePostSubmit = e => {

        const posts = {
            ...post
        }

        fetch('https://facebook-server-side.herokuapp.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(res => res.json())
            .then(data => {
            });

            setActive(false);
            
            post.target.value = '';

        e.preventDefault();
      
    }


    return (
        <div>
            <Container maxWidth="md" style={{ marginTop: "30px" }}>
                <Card sx={{ width: '100%' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                S
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Sabbir"
                    />

                    <Box
                        sx={{
                            width: '50',
                            height: 'auto',
                            padding: '20px'
                        }}
                    >
                        <form onSubmit={handlePostSubmit}>
                            <TextField
                                onBlur={handleOnBlur}
                                fullWidth
                                name='description'
                                id="standard-multiline-static"
                                placeholder="What's your mind, Sabbir?"
                                multiline
                                rows={6}
                                variant="standard"
                            />
                            {
                                active ?
                                    <Button type='submit' sx={{ marginTop: '20px', width: '100%' }} variant="contained">Post</Button> :
                                    <Button type='submit' disabled sx={{ marginTop: '20px', width: '100%' }} variant="contained">Post</Button>
                            }
                        </form>
                    </Box>

                </Card>
            </Container>
        </div>
    );
};

export default Body;