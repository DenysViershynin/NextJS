import { useRef } from "react";
import styled from 'styled-components'

import Card from "../ui/Card";

const Form = styled.form`
    padding: 1rem;
  `
  const Div = styled.div`
    margin-bottom: 0.5rem;
  `
  const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  `
  const Input = styled.input`
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
    resize: vertical;
  `
  const TexArea = styled.textarea`
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
    resize: vertical;
  `
  const DivActions = styled.div`
    margin-top: 1rem;
    text-align: right;
  `
  const Button = styled.button`
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;
      &:hover {
        background-color: #a50e48;
        border-color: #a50e48;
      }
      &:active {
        background-color: #a50e48;
        border-color: #a50e48;
      }
  `

const NewPostForm = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(undefined);
  const bodyInputRef = useRef<HTMLTextAreaElement>(undefined);

  

  function submitHandler(event) {
    event.preventDefault();
    
    const enteredTitle = titleInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;

    const postData = {
      title: enteredTitle,
      body: enteredBody,
    }

    props.onAddPost(postData);
  }

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Div>
          <Label htmlFor="title">Post Title</Label>
          <Input type="text" required id="title" ref={titleInputRef} placeholder="title" />
        </Div>
        <Div>
          <Label htmlFor="body">Post Text</Label>
          <TexArea
            placeholder="text"
            id="body"
            required
            rows={5}
            ref={bodyInputRef}
          ></TexArea>
        </Div>
        <DivActions>
          <Button>Add Post</Button>
        </DivActions>
      </Form>
    </Card>
  );
}

export default NewPostForm;
