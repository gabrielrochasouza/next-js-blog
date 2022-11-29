import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  process.env.GRAPHQLURL
);

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
    }
  }
`;

export const singleCategoryQuery = gql`
  query Post($category: String!) {
    posts(where: { categories_some: { name: $category } }, orderBy: createdAt_DESC) {
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
