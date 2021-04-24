import { useRouter } from 'next/router'

import Card from '../ui/Card';
import styled from 'styled-components'
import classes from './PostItem.module.css';

const LiItem = styled.li`
  margin: 1rem 0;
`
const DivContent = styled.div`
  text-align: center;
  padding: 1rem;
`
const HeadingH3 = styled.h3`
  text-align: center;
  padding: 1rem;
  font-size: 1.25rem;
  color: #2c292b;
`
const DivActions = styled.div`
  padding: 1.5rem;
  text-align: center;
`
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 1px solid #77002e;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
    &:hover {
      background-color: #ffe2ed;
    }
    &:active {
      background-color: #ffe2ed;
    }
`

function PostItem(props): JSX.Element {
  const router = useRouter();

  function showDetailsHandler(): void {
    router.push('/posts/' + props.id);
  }

  return (
    <LiItem>
      <Card>
        <DivContent>
          <HeadingH3>{props.title}</HeadingH3>
        </DivContent>
        <DivActions>
          <Button onClick={showDetailsHandler}>View Post</Button>
        </DivActions>
      </Card>
    </LiItem>
  );
}

export default PostItem;