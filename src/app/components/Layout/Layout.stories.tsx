import React, { ReactNode } from 'react';

import Layout from './Layout';

export default {
  title: 'Component/Layout',
  component: Layout,
};

export const Default = (props: { children: ReactNode }): JSX.Element => <Layout>{props.children}</Layout>;
