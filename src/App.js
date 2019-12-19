import React, { useState } from 'react';
import './App.css';
import { Input, Row, Col, Button, Tabs } from 'antd';
import { getPredict } from './services/call-API'

const { TextArea } = Input

const { TabPane } = Tabs;

function App() {
  const [sentences, setSentences] = useState("");
  const [pred, setPred] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSentences(e.target.value);
  }

  const handleClick = async () => {
    const data = {
      "data": sentences
    }
    setLoading(true);
    const pre = await getPredict('predict', 'POST', data);
    setLoading(false);
    pre && pre.data && pre.data.result && setPred(pre.data.result)
  }

  return (
    <div className="App">
      <div className="header-title"><h1 className="title">THÊM DẤU CHO TIẾNG VIỆT KHÔNG DẤU</h1></div>
      <Row className="App-block">
        <Col lg={10}>
          <Tabs>
            <TabPane tab="TIẾNG VIỆT KHÔNG DẤU" key="1">
              <TextArea className="App-text" autoSize={{ minRows: 6, maxRows: 20 }} onChange={handleChange} allowClear></TextArea>
            </TabPane>
          </Tabs>
        </Col>
        <Col lg={4}>
          <Button className="btn-add" onClick={handleClick} loading={loading}>Thêm dấu</Button>
        </Col>
        <Col lg={10}>
          <Tabs>
            <TabPane tab="TIẾNG VIỆT CÓ DẤU" key="2" tabPosition={"left"}>
              <TextArea className="App-text App-result" autoSize={{ minRows: 6, maxRows: 20 }} disabled value={pred}></TextArea>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default App;
