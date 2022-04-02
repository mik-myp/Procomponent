import React, { useState } from 'react';
import { Button, message, Space } from 'antd';
import ProForm, { ModalForm, ProFormText, DrawerForm } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

export default () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >
          <PlusOutlined />
          Modal 展示
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDrawerVisit(true);
          }}
        >
          <PlusOutlined />
          Drawer 展示
        </Button>
      </Space>
      <ModalForm
        title="新建表单"
        visible={modalVisit}
        onFinish={async () => {
          message.success('提交成功');
          return true;
        }}
        onVisibleChange={setModalVisit}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />

          <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
        </ProForm.Group>
      </ModalForm>
      <DrawerForm
        onVisibleChange={setDrawerVisit}
        title="新建表单"
        visible={drawerVisit}
        onFinish={async () => {
          message.success('提交成功');
          return true;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />

          <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
        </ProForm.Group>
      </DrawerForm>
    </>
  );
};
