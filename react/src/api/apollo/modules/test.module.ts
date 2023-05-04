import { makeVar, useLazyQuery, useQuery } from '@apollo/client';
import type { ReactiveVar } from '@apollo/client';
import { TEST_QUERY } from '../../graphQL/queries/testGQL';

export const test = makeVar([
  {
    testId: '',
    testName: '',
    testNumber: '',
    testEmail: '',
  },
]);

export const getTest = () => {
  const { data, loading, error } = useQuery(TEST_QUERY, {
    variables: {},
    fetchPolicy: 'network-only',
    // nextFetchPolicy: 'cache-first',
    // pollInterval: 500,
  });

  if (data) {
    test(data.getTest);
  }
};
