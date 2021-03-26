import Head from 'next/head'
import Layout from "../components/Layout";
import {Table} from 'react-bootstrap'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return { props: { posts: data } };
  };

  export default function Posts({ posts }) {
    return (
     <>
      <Head>
      <title>List Posts</title>
          <link rel="icon" href="/favicon.svg" />
      </Head>
       <Layout>
      <div>
        <h1 align="center">Posts</h1>
        <hr/>
        <Table>
          <thead>
            <tr>
            <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
          {posts.map((posts) => (
            <tr key={posts.userId}>
              <td>{posts.userId}</td>
              <td>{posts.id}</td>
              <td>{posts.title}</td>
              <td>{posts.body}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      </Layout>
      </>
    )
  }