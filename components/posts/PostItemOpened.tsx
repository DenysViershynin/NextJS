import Card from "../ui/Card";
import styled from 'styled-components'

const Item = styled.div`
  margin: 1rem 0;
`
const Title = styled.div`
  text-align: center;
  padding: 1rem 3rem 1rem 3rem;
  color: #2c292b;
  font-size: 1.25rem;
`
const Content = styled.div`
  text-align: justify;
  padding: 0 3rem 3rem 3rem;
  color: #2c292b;
  font-size: 1.25rem;
`

function PostItem(props): JSX.Element {

  return (
    <Item>
      <Card>
        <Title>
          <h3>{props.title}</h3>
        </Title>
        <Content>
          {props.text}
        </Content>
      </Card>
    </Item>
  );
}

export default PostItem;
