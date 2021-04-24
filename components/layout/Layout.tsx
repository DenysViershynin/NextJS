import MainNavigation from './MainNavigation';
import styled from 'styled-components'

const Main = styled.main`
  margin: 3rem auto;
  max-width: 550px;
`

function Layout(props): JSX.Element {
  return (
    <div>
      <MainNavigation />
      <Main>{props.children}</Main>
    </div>
  );
}

export default Layout;
