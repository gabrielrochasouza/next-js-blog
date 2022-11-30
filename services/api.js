import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.GRAPHQLURL, {
  headers: {
    contentType: "application/json",
    authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjY5MjM4NzAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w5cnZmaGVyMTltcjAxdDhkNWw3NGlvaC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzdiMjU1OWYtZDM5Ny00YzYxLTk2NTQtNzk4M2UyMzcxZDQ0IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.vVEEBzOU1n0sZEqSorGjdTrOdC-8ybVLbXvJW32fDVqXTFFNKHzFjVt2DrjZ9dPgWRfwsvvOGMnGmlCxaQKgB9PvzPlCFBKH-FT6tk2asYJ056Rwo1arPhFoDCQJ0dElgjPqhx9WHAHmiCy4XI6MbRuPw8QWPfES4YueVYaDJjeRwH3DME1cBd6ocU7r6xL12-qCWVMCEpXfswDE9rBc8Aii36CusxD8pMpYU2yv7tIjv3FlpdsmSaXEvBV33VP4KPtkp-TEcw2yPoO5eWLxg3BzJZxVURXBK-JO0PCnQxd7hOzcj2FS3nl1GjG-OH00ZXrpdDGKg50V5Z7rbLAGYUoRY0vzeM6uMjzEgtu7-aDtVbWsA1Spfd0vLoe9q_I0VEyIQIszBLsYRfI0WWSzGDToOjRLbDGuosWHaTwN1BPBYRghCjamfY65uBnk6Ayd6gySgHHeBWgzwBQ18dA8ay26T_C7opi1SMCsSo0gHE5Tqb_6z3occHzRH_2-ebIjI700ggesURRssGWd_1bH5Sy_tBBjm_QEym5AbFOKf5p-HJA3GDtokcikCJw-UaLegrsPTs1Cqh1Tv44XuXyIm-lm5J8pb2bfK3x_EgK_tc0Xx_OS0PjLUMrk5fnUaYycRf9edHEzGJt61Piv81Q-CwK4aokEQSD08RPsXYZ-ULA",
  },
});

export const queryHomePage = gql`
  {
    posts(orderBy: createdAt_DESC) {
      id
      createdAt
      title
      slug
      excerpt
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
      }
    }
    categories {
      name
    }
  }
`;

export const queryFirstThreePosts = gql`
  {
    posts(orderBy: createdAt_DESC, first: 3) {
      id
      createdAt
      title
      slug
      excerpt
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
      }
    }
    categories {
      name
    }
  }
`;

export const querySinglePost = gql`
  query Post($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      createdAt
      title
      slug
      excerpt
      content {
        html
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
      }
      comments(orderBy: createdAt_DESC) {
        id
        name
        comment
        createdAt
      }
    }
  }
`;

export const singleCategoryQuery = gql`
  query Post($category: String!) {
    posts(
      where: { categories_some: { name: $category } }
      orderBy: createdAt_DESC
    ) {
      id
      createdAt
      title
      slug
      excerpt
      content {
        html
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
      }
    }
    categories {
      name
    }
  }
`;

export const slugList = gql`
  {
    posts {
      slug
    }
  }
`;

export const categoryList = gql`
  {
    categories {
      name
    }
  }
`;

export const newsLetterMutation = gql`
  mutation createNewsletter($email: String!) {
    createNewsletter(data: { email: $email }) {
      id
    }
  }
`;

export const makeCommentMutation = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const submitNewsletter = async (obj) => {
  const result = await fetch("/api/newsletter/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const getPost = async (slug) => {
  const result = await fetch("/api/post/" + slug, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};
export const publishComment = gql`
  mutation PublishComment($id: ID!) {
    publishComment(where: { id: $id }) {
      id
    }
  }
`;
