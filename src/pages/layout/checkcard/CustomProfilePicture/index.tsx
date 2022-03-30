import React from 'react';
import { CheckCard } from '@ant-design/pro-card';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <CheckCard
      title="示例标题"
      avatar={
        <Avatar style={{ backgroundColor: '#7265e6' }} icon={<UserOutlined />} size="large" />
      }
    />
  );
};
