import { Menu, Image, Input, Button, Layout, Row, Col, Checkbox, Form, Typography, Card} from 'antd';
import { NotificationOutlined, MessageOutlined, UserAddOutlined, SearchOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faBell, faComment, faUserPlus } from '@fortawesome/fontawesome-free-solid'
import React from 'react';
const { Header, Content, Sider, Footer } = Layout;
const style = {
    background: 'none',
    padding: '8px 0',
    outerHeight: '140px'
};

class Login extends React.Component {
    state = {
        current: 'logo',
    }
    handleClick = e => {
        console.log('click', e);
        this.setState({ current: e.key })
    }

    render() {
        const { current } = this.state;
        return (
            <Layout style={{ backgroundSize: 'cover', background: '#f7f4f4', border: 0, height: "100%" }}>
                <Header className="App-header" style={{ background: "none", border: 0, marginTop: 20 }}>
                    <Menu height={40} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: "transparent", border: 0 }}>
                        <Menu.Item key="logo" style={{ backgroundColor: "transparent" }}>
                            <Image height={50} width={50} style={{ marginBottom: 3 }} src="https://ulatroi.net/themes/wondertag/img/logo.png" />
                        </Menu.Item>

                        <Menu.Item style={{ alignItems: "flex-end" }}>
                            <Button style={{ marginLeft: "1000px", color: '#ffffff', border: 0, backgroundColor: '#a52729', marginBottom: 10, borderRadius: 10 }} type="primary" size="large">Register</Button>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Row gutter={[24, 8]}>
                        <Col className="gutter-row" span={12}>
                            <div style={{ textAlign: 'left', margin: 100 }}>
                                <Typography style={{ fontSize: 35, fontWeight: 'bolder', marginBottom: 30 }}>Share what's new and life moments with your friends.</Typography>
                                <Typography style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 10 }}>Trending!</Typography>
                                <Typography style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 10 }}>Joined users</Typography>
                                <Row gutter={[10, 10]}>
                                    <Col className="gutter-row" span={4}>
                                        <Image height={44} width={44} style={{ marginBottom: 3, width: 100, height: 100, borderRadius: 100 }} src="https://images.vexels.com/media/users/3/145922/raw/eb6591b54b2b6462b4c22ec1fc4c36ea-female-avatar-maker.jpg" />
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <Image height={44} width={44} style={{ marginBottom: 3, width: 100, height: 100, borderRadius: 100 }} src="https://images.vexels.com/media/users/3/145922/raw/eb6591b54b2b6462b4c22ec1fc4c36ea-female-avatar-maker.jpg" />
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <Image height={44} width={44} style={{ marginBottom: 3, width: 100, height: 100, borderRadius: 100 }} src="https://images.vexels.com/media/users/3/145922/raw/eb6591b54b2b6462b4c22ec1fc4c36ea-female-avatar-maker.jpg" />
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <Image height={44} width={44} style={{ marginBottom: 3, width: 100, height: 100, borderRadius: 100 }} src="https://images.vexels.com/media/users/3/145922/raw/eb6591b54b2b6462b4c22ec1fc4c36ea-female-avatar-maker.jpg" />
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <Image height={44} width={44} style={{ marginBottom: 3, width: 100, height: 100, borderRadius: 100 }} src="https://images.vexels.com/media/users/3/145922/raw/eb6591b54b2b6462b4c22ec1fc4c36ea-female-avatar-maker.jpg" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={7}>
                            <div style={{ marginTop: 50, padding: 20,height:600 }}>
                                <Card bordered={false} style={{ borderRadius: 30, height: 370 }}>
                                    <Typography style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', paddingLeft: 20, marginBottom: 10 }}>Welcome!</Typography>
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{ remember: true }}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[{ required: true, message: 'Please input your Username!' }]}
                                        >
                                            <Input style={{ backgroundColor: '#f5f5f5', width: 250, height: 56, alignContent: 'left', borderRadius: 5, borderBottomColor: 'black' }} placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input
                                                style={{ backgroundColor: '#f5f5f5', width: 250, height: 56, alignContent: 'left', borderRadius: 5, borderBottomColor: 'black' }}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                                <Checkbox>Remember this device</Checkbox>
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button style={{ fontSize: 20, color: '#ffffff', border: 0, backgroundColor: '#a52729', marginBottom: 10, borderRadius: 10, width: 100, height: 50 }} type="primary" htmlType="submit" className="login-form-button">
                                                Login
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div style={{fontSize:15,marginTop:50,fontWeight:'bold'}}>
                                        Dont'have account? <a style={{color:'#a52729',fontWeight:'bold'}}>Register</a>
                                    </div>
                                </Card>

                            </div>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{background: '#f7f4f4'}}>
                  <a style={{fontSize:15,color:'black'}}>
                  © 2022 U là Trời · Terms of Use · Privacy Policy · Contact Us · About · Market ·  Language
                  </a>
                </Footer>
            </Layout>
        );
    }
}

export default Login;