/* eslint-disable no-undef */
import styled from "styled-components";

export const MainContainer = styled.div`
   {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
  }
`;

export const Button = styled.a`
  padding: 0.8rem 2.5rem;
  border-radius: 30px;
  cursor: pointer;
  background-color: #0f548c;
  border: none;
  font-weight: 300;
  color: #eee;
  font-size: 1rem;
  text-decoration: none;
  ${(props) =>
    props.primary &&
    `
      background: #eee;
      color: #aaa;
      &hover: {
        color: #0f548c
      }
    `}
  &:hover {
    transition: 0.2s;
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

export const Choice = styled.button`
  padding: 0.8rem 2.5rem;
  border-radius: 30px;
  cursor: pointer;
  background-color: #0f548c;
  position: relative;
  border: none;
  font-weight: 300;
  color: #eee;
  font-size: 1rem;
  text-decoration: none;
  ${(props) =>
    props.primary &&
    `
      background: #eee;
      color: #aaa;
      &hover: {
        color: #0f548c
      }
    `}
  &:hover {
    transition: 0.2s;
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

export const Input = styled.input`
  width: 350px;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: 1px solid #ddd;
  color: #aaa;
  &:focus {
    transition: 0.5s;
    border: 1px solid #0f548c;
  }
  &:valid {
    border: 1px solid #0f548c;
  }
`;
