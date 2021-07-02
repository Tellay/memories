import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Post from './Post'

import axios from 'axios';

function Posts() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(result => result.data)
    .then(function(response) {
      setPosts(response);
      setLoading(false);
    });
  }, [posts]);

  return loading ? (
    <>
    </>
  ) : (
    <Container>
      {
        posts.map((item) => (
          <Post creator={item.creator} message={item.message} createdAt={item.createdAt} image={item.selectedFile}/>
        ))
      }
    </Container>
  )
}

export default Posts;