import { useRouter } from "next/router";
import PostItemOpened from "../../components/posts/PostItemOpened";
import { GetServerSideProps } from 'next'

export default function Post(data) {
  const router = useRouter();
  const curId = router.query.postId
  const postList = data.data;
  const curPost = postList.filter(post => post.id == curId)[0]

  return <PostItemOpened title={curPost.title} text={curPost.body} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://simple-blog-api.crew.red/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
