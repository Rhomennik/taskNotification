import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Divider, Input, List, Button, Modal, Form, DatePicker, TimePicker, Tag,
} from 'antd';

const { Search } = Input;

export default function Task() {
  const [Taskers, setTaskers] = useState([]);
  const [Visible, setVisible] = useState([{ visible: false }]);
  const [Title, setTitle] = useState([{ title: 'Novo' }]);
  const [Description, setDescription] = useState([{ description: '.......' }]);
  const [Date, setDate] = useState([{ date: '..' }]);
  const [Time, setTime] = useState([{ time: '...' }]);

  // ## Para testes
  // const data = [
  //   {
  //     title: 'Title 1',
  //   },
  //   {
  //     title: 'Title 2',
  //   },
  //   {
  //     title: 'Title 3',
  //   },
  //   {
  //     title: 'Title 4',
  //   },
  // ];
  useEffect(() => {
    // setTaskers(data);
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

  //  function handleOk() {
  //    setVisible({ visible: false });
  //    console.log('handleOk OK');
  //  }
  //
  //  function handleCancel() {
  //    setVisible({ visible: false });
  //    console.log('handleCancel ok');
  //  }

  /**
  |--------------------------------------------------
  | Forms
  |--------------------------------------------------
  */

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Date, Time);
    // console.log(Title, Description, Time, Date);
    setTaskers([...Taskers, {
      title: Title.title, description: Description.description, date: Date.date, time: Time.time,
    }]);
    setVisible({ visible: false });
  }
  function onChangeTitle(e) {
    setTitle({ title: e.target.value });
  }

  function onChangeDesc(e) {
    setDescription({ description: e.target.value });
    // console.log(Description);
  }

  function onChangeDate(date, dateString) {
    setDate({ date: dateString });
    // console.log('date: ', Date);
  }

  function onChangeTime(time, timeString) {
    setTime({ time: timeString });
    // console.log(timeString);
  }

  return (
    <div>
      <div>
        <Modal
          title="Basic Modal"
          visible={Visible.visible}
          footer={null}
        >
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
              Title
                {'  '}
                <Input
                  type="text"
                  className="form-control"
                  onChange={onChangeTitle}
                  style={{ width: 200 }}
                />
              </div>
              <div>
                Desc:
                {' '}
                <Input
                  type="text"
                  className="form-control"
                  onChange={onChangeDesc}
                  style={{ width: 400 }}
                />
              </div>
              <div>
              Date:
                {' '}
                <DatePicker onChange={onChangeDate} />

              </div>
              <div>
              Time:
                {' '}
                <TimePicker onChange={onChangeTime} />
              </div>
            </div>
            <br />
            <div className="form-group">
              <Input type="submit" value="Enviar" className="btn btn-primary" style={{ width: 100 }} />
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
                <Card title={item.title}>
                  <h2>{item.description}</h2>
                  <Tag color="orange">{item.date}</Tag>
                  {' '}
-
                  {' '}
                  <Tag color="purple">{item.time}</Tag>
                </Card>
              </List.Item>
            )}
          />
        </Row>
      </Card>
    </div>
  );
}
