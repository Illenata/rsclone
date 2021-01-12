import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';

const Navbar: React.FC = () => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <NavLink to="/">Дэшборд</NavLink>
    </Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>
  </Menu>
);

export default Navbar;
