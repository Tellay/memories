import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 580px;
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  align-items: center;
  grid-area: form;

  position: fixed;
  top: 2rem;
  right: 10rem;
  
  h1 {
    color: var(--title);
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border);
  width: calc(100% - 15%);
  margin: 1.5rem 0;
`;


export const Input = styled.input`
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1rem;

  width: calc(100% - 15%);
  margin: 0.5rem 0;
  color: var(--input);
  font-weight: bold;

  &:nth-last-child(4) {
    margin-bottom: 2.5rem;
  }
`;

export const Submit = styled.button`
  width: calc(100% - 40%);
  height: 40px;
  background: var(--submit);
  border-radius: 25px;
  border: 5px solid var(--submit-stroke);
  font-weight: bold;
  color: var(--button-text);
  cursor: pointer;
  margin-top: 2.5rem;

  &:hover {
    background: var(--submit-hover);
  }
`;

export const Clear = styled.button`
  width: calc(100% - 40%);
  height: 40px;
  background: var(--clear);
  border-radius: 25px;
  border: 5px solid var(--clear-stroke);
  font-weight: bold;
  color: var(--button-text);
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: var(--clear-hover);
  }
`;
