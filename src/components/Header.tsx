import React from 'react';
import theme from '../utils/theme';

type Props = {
  headerTitle: string;
};

function Header({ headerTitle }: Props) {
  return <div>{headerTitle}</div>;
}

export default Header;
