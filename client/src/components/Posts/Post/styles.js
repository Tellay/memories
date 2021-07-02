import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height: 580px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 5px 5px 0 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  > h2 {
    font-weight: bold;
    font-size: 15px;
    color: var(--dark-grey)
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 511px;
  display: block;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 0 0 5px 5px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  > p {
    font-weight: normal;
    font-size: 15px;
    color: var(--dark-grey);
  }

  > span {
    text-decoration: underline;
    padding-left: 0.5rem;
    color: var(--dark-grey);
  }
`;