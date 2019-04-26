import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Divider, Input, List, Button, Modal, Form,
} from 'antd';

const { Search } = Input;


export default function Task() {
  const [Taskers, setTaskers] = useState([]);
  const [Visible, setVisible] = useState([{ visible: false }]);
  const [Title, setTitle] = useState([{ title: 'Novo' }]);
  const [Description, setDescription] = useState([{ description: '.......' }]);


  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  useEffect(() => {
    setTaskers(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
  |--------------------------------------------------
  |  Modal functions
  |--------------------------------------------------
  */

  function showModal() {
    setVisible({ visible: true });
    console.log('showModal OK!');
  }

  function handleOk() {
    setVisible({ visible: false });
    console.log('handleOk OK');
  }

  function handleCancel() {
    setVisible({ visible: false });
    console.log('handleCancel ok');
  }

  /**
  |--------------------------------------------------
  | Forms
  |--------------------------------------------------
  */

  function handleSubmit() {
    console.log(Title, Description);
    setTaskers([...Taskers, { title: Title.title, description: Description.description }]);
    setVisible({ visible: false });
  }
  function onChangeTitle(e) {
    setTitle({ title: e.target.value });
  }

  function onChangeDesc(e) {
    setDescription({ description: e.target.value });
    console.log(Description);
  }


  return (
    <div>
      <div>
        <Modal
          title="Basic Modal"
          visible={Visible.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <span>Title: </span>

              <Input
                type="text"
                className="form-control"
                onChange={onChangeTitle}
              />
              <span>Description: </span>
              <Input
                type="text"
                className="form-control"
                onChange={onChangeDesc}
              />
            </div>
            <div className="form-group">
              <Input type="submit" value="Enviar" className="btn btn-primary" />
            </div>
          </Form>
        </Modal>
      </div>
      <h2 className="title gx-mb-4">Task</h2>
      <Card className="gx-card">
        <Row gutter={8}>
          <Col span={6} />
          <Search
            placeholder="Buscar task"
            onSearch={value => console.log(value)}
            style={{ width: 500 }}
          />
        </Row>
        <Button type="primary" onClick={showModal}>+ New task</Button>
        <Divider />
        <Row gutter={8}>
          <Col span={24} className="gx-text-left" />
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={Taskers}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>{item.description}</Card>
              </List.Item>
            )}
          />
        </Row>
      </Card>
    </div>
  );
}
