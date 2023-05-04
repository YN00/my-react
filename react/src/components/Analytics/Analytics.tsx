import React from 'react';
import { test } from '../../api/apollo/modules/test.module';

const Analytics = (): JSX.Element => {
  console.log(test());

  return (
    <>
      <div>123</div>
    </>
  );
};

export default Analytics;
