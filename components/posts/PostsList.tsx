import PostItem from './PostItem';
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

function PostsList(props): JSX.Element {
  return (
    <List>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.body}
        />
      ))}
    </List>
  );
}

export default PostsList;