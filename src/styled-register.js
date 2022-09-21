import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 888px;
  /* background: green; */
  padding-bottom: 200px;

  /* background: #f2f2f2; */
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`

export const DivListagemProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 10px;
    margin-left: -32px;
    width: 100%;
  }
`
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  /* margin-left: 5px; */
  border-radius: 15px;
  width: 100vw;

  @media screen and (max-width: 900px) {
    /* margin-top: 20px; */
    /* margin-left: 15px; */

    /* width: 100%; */
  }
`
export const Input = styled.input`
  /* background: #ffffe6; */
  border-radius: 5px;
  height: 45px;
  margin-bottom: 15px;
  /* margin-top: 5px; */
  border: 1px solid #cccccc;
  width: 25rem;

  @media screen and (max-width: 900px) {
    /* margin-left: -14px; */
    width: 18rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  width: 100vw;

  @media screen and (max-width: 900px) {
    /* width: 100%; */
  }
`

export const Label = styled.label`
  /* margin-left: -350px; */
  font-family: 'Roboto';
  display: flex;
  align-items: flex-start;
  justify-content: left;
  font-size: 16px;
  color: #004d4d;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 3px;
`

export const InputFile = styled.input`
  /* background: red; */
  border-radius: 12px;
  height: 30px;
  width: 90%;
  margin-bottom: 10px;
  margin-top: 20px;
`
export const Button = styled.button`
  width: 32%;
  height: 75px;
  cursor: pointer;
  background: #2eb8b8;
  color: white;
  border: 1px solid #80c1ff;
  border-radius: 5px;
  font-size: 36px;
  font-family: Arial;
  margin-top: -30px;
  transition: ease 0.6s;

   display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background: green;
    color: #ffff99
  }


  @media screen and (max-width: 900px) {
    width: 18.5rem;
  height: 45px;
  font-size: 17px;


  }
  /* display: none; */
`

export const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  width: 80%;
  background: #ffffe6;
  width: 30rem;

  @media screen and (max-width: 900px) {
    width: 18rem;
  }
`

export const ListContainer = styled.div`
  color: #004d4d;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* background: blue; */

  @media screen and (max-width: 900px) {
    /* width: 80%; */
  }
`
