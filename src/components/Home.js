import React, { useState } from "react";
import {Breadcrumb, Row, Col, Divider, Card, Menu, Button, Badge,Avatar, Layout, Input } from "antd";
import { SwapOutlined, SearchOutlined, AlignLeftOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import styles from '../styles/home.css';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faTree, faCamera, faVideo, faMusic, faFile, faMap, faPlus } from '@fortawesome/fontawesome-free-solid'

const {Header,Content,Sider} = Layout;
const {Meta} = Card;
const style = {
    background: 'none',
    padding: '8px 0',
    outerHeight: '140px'
  };


const Home = ()=>{
    const [loading, setLoading] = useState(true);

    const onChange = (checked) => {
        setLoading(!checked);
    };

        return(
            <div>
            <Header className="App-header">
                <Navbar />
            </Header>
            <Layout style={{background:"none"}}>
                <SiderLeft ></SiderLeft>     
                <Content className='site-layout-background'>   
          
                <div style={{margin: '16px 0 16px 15px',}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Good morning, hoang0650</Breadcrumb.Item>
                        
                    </Breadcrumb>
                    <Row gutter={[24,8]}>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>                              
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                                    </Card>
                                
                                </Menu>
                            
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faPlus}/>}></Button>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                    </Row>
                    <Divider style={ { margin: "10px 0"}  }></Divider>
                        <Menu mode="horizontal" style={styles.menu} >
                            <Menu.Item>
                                
                                <Button shape="round" size="large" icon={<SwapOutlined />}></Button>
                           
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faTree} />}> All</Button>
                            
                                <Button shape="round" size="large" icon={<AlignLeftOutlined />}>Text</Button>
                           
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faCamera} />}> Photos</Button>
                            
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faVideo} />}> Videos</Button>
                            
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faMusic} />}>Sounds</Button>
                            
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faFile} />}>Files</Button>
                          
                                <Button shape="round" size="large" icon={<FontAwesomeIcon icon={faMap} />}>Maps</Button>
                            </Menu.Item>
                        </Menu>
                        <Layout style={{background:"none"}}>
                            <Content style={{width:"65%",padding:"10px 10px 10px 0px"}}>
                                <Card style={{padding:"10px 0px"}}>
                                <Menu mode="horizontal">
                                        <Menu.Item style={{alignItems:"center"}}> 
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Input prefix={ <SearchOutlined/> }  style={{borderRadius:"2em", border:0,padding:"10px 19px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                        </Menu.Item>
                                </Menu>

                                </Card>
                                <Card style={{padding:"10px 0px"}}>
                                    sssasd
                                </Card>
                            </Content>
                            <Sider style={{width:"35%", padding:"10px 0px 0px 0px", background:"none"}}>
                                <Card >
                                    sadd
                                </Card>

                            </Sider>

                        </Layout>

                </div>
                </Content>
                <Sider width={80}  style={{marginLeft:20,float:"right",maxWidth:0, backgroundColor:"transparent"}}> <SiderRight/></Sider>
        </Layout>
        </div>
        )
    }


export default Home;


         