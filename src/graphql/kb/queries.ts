import { gql } from '@apollo/client';

const articleDetail = gql`
  query kbArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      title
      summary
      content
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;

const articles = gql`
  query ($page: Int, $perPage: Int, $categoryIds: [String]) {
    knowledgeBaseArticles(
      page: $page
      perPage: $perPage
      categoryIds: $categoryIds
    ) {
      _id
      title
      summary
      content
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;

const kbCategoryId = gql`
  query knowledgeBaseCategoryId($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
    }
  }
`;
const queries = {
  articleDetail,
  articles,
  kbCategoryId,
};

export default queries;