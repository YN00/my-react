import { gql, useQuery } from '@apollo/client';
import type { DocumentNode } from '@apollo/client';

export const TEST_QUERY: DocumentNode = gql`
  query getTest {
    getTest {
      testId
      testName
      testNumber
      testEmail
    }
  }
`;
