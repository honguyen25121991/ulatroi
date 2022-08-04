import React, { useState } from "react";
import {Breadcrumb,Image, Row, Col, Divider, Card, Menu, Button, Badge,Avatar, Layout, Input, Space,Typography } from "antd";
import { SwapOutlined, SearchOutlined, AlignLeftOutlined, SettingOutlined,EditOutlined,EllipsisOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import styles from '../styles/home.css';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUserTie,faTree, faCamera, faVideo, faMusic, faFile, faMap, faPlus, faThumbsUp, faComment, faShare} from '@fortawesome/fontawesome-free-solid'

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
            <Layout style={{background:"#f9f9f9"}}>
                <SiderLeft ></SiderLeft>     
                <Content className='site-layout-background'>   
          
                <div style={{margin: '16px 0 16px 15px'}}>
                <Typography style={{textAlign:'left', fontSize: 25, fontWeight: 500,color:'#3f51b5',marginBottom: 10 }}>Good evening, hoang0605</Typography>
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
                        <Space>
                                <Button shape="round" size="large" icon={<SwapOutlined />}></Button>
                           
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faTree} />All</Space></Button>
                            
                                <Button shape="round" size="large" icon={<AlignLeftOutlined />}>Text</Button>
                           
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faCamera} />Photos</Space> </Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faVideo} />Videos</Space></Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faMusic} />Sounds</Space></Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faFile} />Files</Space></Button>
                          
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faMap} />Maps</Space></Button>

                        </Space>

                        <Row>
                            <Col span={16} style={{width:"60%",padding:"10px 10px 10px 0px"}}>

                                {/* <Space>
                                    <Card>
                                        <Space>
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                            <Input prefix={ <SearchOutlined/> }  style={{ borderRadius:"2em", border:0,padding:"10px 19px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>

                                        </Space>
                                    </Card>
                                </Space> */}

                                <Card style={{marginBottom:20,borderWidth:1,borderColor:'sliver',borderRadius:10}}>
                                    <Space style={{backgroundColor:"transparent",border:0}}>
                                        <Avatar style={{width:50,height:50}} src="https://joeschmoe.io/api/v1/random" />
                                        <Input style={{backgroundColor:'#ebeef0',borderRadius:10, border:0,width:450,height:50,padding:"10px 19px 10px 19px",color:'black'}}  size="large"  color='black' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                        <Button style={{marginLeft:"0px",color:'#4caf50',backgroundColor:'#ebeef0',border:0}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faCamera} />}></Button>
                                    </Space>
                                {/* <Menu mode="horizontal" style={{backgroundColor:"transparent",border:0}}>
                                        <Menu.Item> 
                                        <Avatar style={{width:50,height:50}} src="https://joeschmoe.io/api/v1/random" />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Input style={{backgroundColor:'#ebeef0',borderRadius:10, border:0,width:340,height:50,padding:"10px 19px 10px 19px",color:'black'}}  size="large"  color='black' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                        </Menu.Item>
                                        <Menu.Item style={{alignItems:'center'}}>
                                            <Button style={{marginLeft:"0px",color:'#4caf50',backgroundColor:'#ebeef0',border:0}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faCamera} />}></Button>
                                        </Menu.Item>
                                </Menu> */}
                                </Card>

                                <Card style={{padding:"10px 0px",borderWidth:1,borderColor:'sliver',borderRadius:10}} actions={[
                                <span><FontAwesomeIcon icon={faThumbsUp} key="like" /> Like </span>,
                                <span><FontAwesomeIcon icon={faComment} key="comment" /> Comments </span>,
                                <span><FontAwesomeIcon icon={faShare} key="share" /> Shares </span>,
                                ]}>
                                    <Button style={{zIndex:10,float:'right',paddingBottom:20}} shape="circle" size="large"><Space><FontAwesomeIcon icon={faChevronDown} /></Space></Button>
                                    <Meta avatar={<Avatar style={{width:60,height:60}} src="https://joeschmoe.io/api/v1/random" />}
                                    title="Phan Hoàng"
                                    description="4d | Translate"  
                                                           
                                    />
                         
                                    <img style={{marginTop:30,marginBottom:10,width:"95%",height:400}} alt="example" src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg"/>
                                </Card>

                            </Col>
                            <Col span={8} style={{width:"60%",padding:"10px 10px 10px 0px"}}>
                                <Card style={{borderRadius:10}}>
                                    <Meta avatar={<Avatar style={{width:30,height:30}} src="https://joeschmoe.io/api/v1/random" />}
                                    title="Pro Members"
                                    />
                                    <Card style={{ marginTop:10, marginBottom:10, borderRadius:10 }}>
                                        {/* <a style={{backgroundColor:"#ffd5c8",height:123,margin:"0 0 12px",display:"block",borderRadius:10,padding:12,position:"relative",width:"100%",overflow:"hidden"}}>
                                            <img src="https://ulatroi.net/themes/wondertag/img/pro-me.png"/>
                                            <p>Upgrade To Pro & Put Me Here</p>
                                            <Button>Upgrade</Button>
                                        </a> */}
                                    </Card>
                                </Card>
                            </Col>
                        </Row>                 
                     
                      

                </div>
                </Content>
                <Sider width={80}  style={{marginLeft:20,float:"right",maxWidth:0, backgroundColor:"transparent"}}> <SiderRight/></Sider>
        </Layout>
        </div>
        )
    }


export default Home;


         