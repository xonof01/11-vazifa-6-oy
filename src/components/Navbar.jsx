import React, { useState } from 'react';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const items = [
  {
    label: <NavLink to={"/"}>Students</NavLink>,
    key: 'students',
    icon: <TeamOutlined />,
	},
	{
    label: <NavLink to={"/teachers"}>Teachers</NavLink>,
    key: 'teachers',
    icon: <UserOutlined />,
	}
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu className='p-2' theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
};
export default Navbar;
