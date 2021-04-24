import styled from 'styled-components'

const CardDiv = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-width: 550px;
  margin: 0 auto;
`

function Card(props): JSX.Element {
  return <CardDiv>{props.children}</CardDiv>;
}

export default Card;