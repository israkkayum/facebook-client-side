import React from 'react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';

const Post = ({ post }) => {

    const { description } = post;

    return (
        <div>
            <Card sx={{ width: '100%', marginBottom: '10px' }}>
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

                <CardContent>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default Post;
