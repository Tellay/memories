import React from 'react';

import Posts from '../../components/Posts';

import Form from '../../components/Form';

import { Container } from './styles';

function Main() {
  return (
    <Container>
        <Posts/>
        <Form/>
    </Container>
  );
}

export default Main;