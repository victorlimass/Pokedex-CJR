import styled from "styled-components"

export const DivApp = styled.div`
  text-align: center;
  margin-inline: auto;
  width: 500px;
  > * {     // style all children
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-left: 0;
  justify-content: center;
`