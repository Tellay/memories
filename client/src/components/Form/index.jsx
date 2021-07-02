import React, { useState } from 'react';

import { Container, Divider, Input, Submit, Clear } from './styles';

import FileBase from 'react-file-base64';

import { createPost } from '../../api'

function Form() {

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(postData);
    await setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  const handleClear = (e) => {
    e.preventDefault();
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  return (
    <Container>
        <h1>Creating a Memorie</h1>
        <Divider/>
        <Input placeholder="Your name..." value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value })}/>
        <Input placeholder="Your title..."  value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })}/>
        <Input placeholder="Your message..." value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })}/>
        <Input placeholder="Your tags..."  value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value })}/>

        <FileBase
          type="file"
          multiple="false"
          onDone={(base64) => setPostData({ ...postData, selectedFile: base64[0].base64 })}
        />

        <Submit onClick={handleSubmit}>Submit</Submit>
        <Clear onClick={handleClear}>Clear</Clear>

    </Container>
  );
}

export default Form;