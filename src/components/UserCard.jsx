import React from 'react';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const UserCard = ({item}) => (
  <Card className='!border-[3px] !border-slate-600 !shadow-lg !shadow-[#777]'
    style={{width: 300, height: 350}}
    cover={<img className='w-[150px] h-[150px]' alt="img" src={item.img} width={150} height={250}/>}
    actions={[
      <DeleteOutlined className='scale-[1.8] !text-red-500' key="delete" />,
      <EditOutlined className='scale-[1.8] !text-green-500' key="edit" />,
      <EllipsisOutlined className='scale-[1.8] !text-blue-500' key="ellipsis" />,
    ]}
  >
    <Meta title={<h2 className='text-[22px]'>{`${item.name} - ${item.surname}`}</h2>} description={<p className='text-[18px]'>{`Study: ${item.study} - Age: ${item.age}`}</p>}/>
  </Card>
);
export default UserCard;