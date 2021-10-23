import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  max-width: 100%;
  box-sizing: border-box;

  > h1 {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    color: #313131;
  }

  > form {
      display:flex;
      gap: 10px;
      padding: 2em 0;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  padding: 0;
  margin: 2rem 0;
`

export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1em;
  font-size: 1rem;
  background-color: #DEDEDEAA;
  border: 2px solid #DEDEDEAA;
  outline: none;
  border-radius: 16px;
  &:focus {
    border: 2px solid #AAAAAA;
  }
`

export const SearchBtn = styled.button`
  width: 150px;
  height: 3rem;
  font-size: 1em;

  
  border: none;
  outline: none;
  border-radius: 16px;
  
  background-color:  #dc0a2d;
  color: white;
  cursor: pointer;
`