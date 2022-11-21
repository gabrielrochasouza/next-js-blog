import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl9rvfher19mr01t8d5l74ioh/master"
);

export const queryHomePage = gql`
  {
    posts {
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

export const slugList = gql`
  {
    posts {
      slug
    }
  }
`;
