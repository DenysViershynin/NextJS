import Link from 'next/link'
import React from 'react';
import classes from './MainNavigation.module.css';
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`
const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`
const UnordList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`
const Li = styled.li`
  margin-left: 3rem;
`
const LinkEl = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;
    &:hover {
      color: white;
    }
    &:active {
      color: white;
    }
`

const MainNavigation = () => {
  return (
    <Header>
      <Logo>Next.js Posts</Logo>
      <nav>
        <UnordList>
          <Li>
            <Link href='/' passHref>
              <LinkEl>
                All Posts
              </LinkEl>
            </Link>
          </Li>
          <Li>
            <Link href='/posts/new' passHref>
              <LinkEl>
                Add New Post
              </LinkEl>
            </Link>
          </Li>
        </UnordList>
      </nav>
    </Header>
  );
}

export default MainNavigation;