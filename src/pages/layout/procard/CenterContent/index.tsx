import React from 'react';
import ProCard from '@ant-design/pro-card';

export default () => {
  return (
    <>
      <ProCard
        title="标题-column"
        extra="extra"
        layout="center"
        direction="column"
        style={{ maxWidth: 300, height: 200 }}
      >
        <div>123</div>
        <div>456</div>
        <div>789</div>
      </ProCard>

      <ProCard
        title="标题-row"
        extra="extra"
        layout="center"
        direction="row"
        style={{ maxWidth: 300, height: 200 }}
      >
        <div>123</div>
        <div>456</div>
        <div>789</div>
      </ProCard>
    </>
  );
};
