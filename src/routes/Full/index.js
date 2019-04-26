import React from 'react';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Task from '../Task';

const { Header, Content, Footer } = Layout;


export default function Full() {
  return (
    <div>
      <Layout>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Task />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Task ©2019 Created by rhomE
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
