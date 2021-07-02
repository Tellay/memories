import React from 'react';

import { Container, Header, Image, Footer } from './styles';

import moment from 'moment';

function Post(props) {
  return (
    <Container>
      <Header>
        <h2>@{props.creator}</h2>
      </Header>
      <Image src={props.image}/>
      <Footer>
        <p>{props.message} ({moment(props.createdAt).format('L')})</p>
      </Footer>
    </Container>
  );
}

export default Post;