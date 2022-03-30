import React from 'react';
import ProCard from '@ant-design/pro-card';

export default () => {
  return (
    <ProCard.Group ghost collapsible title="卡片组展开" gutter={8}>
      <ProCard layout="center" bordered>
        卡片内容
      </ProCard>
      <ProCard layout="center" bordered>
        卡片内容
      </ProCard>
      <ProCard layout="center" bordered>
        卡片内容
      </ProCard>
      <ProCard layout="center" bordered>
        卡片内容
      </ProCard>
    </ProCard.Group>
  );
};
