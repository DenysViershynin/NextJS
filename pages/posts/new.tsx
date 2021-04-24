import styled from 'styled-components'
import React, { useState } from 'react';
import axios from 'axios'
import NewPostForm from '../../components/posts/NewPostForm'
import { Data } from '../../components/interfaces/Data'

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: black;
    `

export default function NewPost(): JSX.Element {
    const[visibile, setVisibile] = useState(true);

    function addPostHandler(enteredPostData: Data): void {
    
        setVisibile(false)
        setTimeout(() => {
            setVisibile(true)
        }, 2000)
        axios.post('https://simple-blog-api.crew.red/posts', {
            title: enteredPostData.title,
            body: enteredPostData.body
        })
    }

    let result: JSX.Element;
    visibile
    ? result = <><h1>New post:</h1><NewPostForm onAddPost={addPostHandler} /></>
    : result = <Title>Congrats! You created a post</Title>

    return (
        <>
            {result}
        </>
    )
}
