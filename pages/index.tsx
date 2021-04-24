import { GetServerSideProps } from 'next'
import PostsList from "../components/posts/PostsList";

const HomePage = (data) => {

  return <PostsList posts={data.data} />
}

export const getServerSideProps: GetServerSideProps = async() => {
  const res = await fetch('https://simple-blog-api.crew.red/posts')
  const data = await res.json()

  return {
    props: {
      data
    },
  };
}

export default HomePage;