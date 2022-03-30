import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default () => {
  return (
    <div style={{ background: '#f5f7fa' }}>
      <PageContainer
        fixedHeader
        header={{
          title: '页面标题',
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: '一级页面',
              },
              {
                path: '',
                breadcrumbName: '二级页面',
              },
              {
                path: '',
                breadcrumbName: '当前页面',
              },
            ],
          },
        }}
        tabList={[
          {
            tab: '已选择',
            key: '1',
          },
          {
            tab: '可点击',
            key: '2',
          },
          {
            tab: '禁用',
            key: '3',
            disabled: true,
          },
        ]}
      >
        <ProCard direction="column" ghost gutter={[0, 16]}>
          <ProCard style={{ height: 200 }} />
          <ProCard gutter={16} ghost style={{ height: 200 }}>
            <ProCard colSpan={16} />
            <ProCard colSpan={8} />
          </ProCard>
        </ProCard>
      </PageContainer>
    </div>
  );
};
