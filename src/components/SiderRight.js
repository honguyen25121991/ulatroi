import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Breadcrumb,Image, Row, Col, Divider, Card, Menu, Button, Badge,Avatar, Layout, Input, Space,Typography } from "antd";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faUserFriends,faObjectGroup,faChevronDown, faUserTie,faTree, faCamera, faVideo, faMusic, faFile, faMap, faPlus, faThumbsUp, faComment, faShare} from '@fortawesome/fontawesome-free-solid'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Me', 'sub1', '', [
    getItem('News Feed', 'new'),
    getItem('Albums', 'album'),
    getItem('Saved Posts', 'post'),
  ]),
  getItem('Community', 'sub2', '', [
    getItem('Events', 'event'),
    getItem('Market', 'market'),
    getItem('My Products', 'product'),
    getItem('My Group', 'group'),
    getItem('My Pages', 'page'),
  ]),
  getItem('Navigation Three', 'sub3', '', [
    getItem('Explore', 'explore'),
    getItem('Popular Posts', 'ppost'),
    getItem('Movies', 'movie'),
    getItem('Offers', 'offer'),
    getItem('Memories', 'memory'),
    getItem('Find Friends', 'find'),
    getItem('Common Things', 'common'),
    getItem('Fundings', 'fund'),
  ]),
];

const SiderRight = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div style={{ float:'right',width: '80px',height: '500px',backgroundColor: '#ffffff'}}>
       <Button style={{marginTop:20,width:60,height:60,color:'#4caf50',backgroundColor:'#ebeef0',border:0}} type="primary" shape="circle" icon={<FontAwesomeIcon icon={faEdit} />}></Button>
       <br/>
       <Button style={{marginTop:20,width:60,height:60,color:'#4caf50',backgroundColor:'#ebeef0',border:0}} type="primary" shape="circle" icon={<FontAwesomeIcon icon={faUserFriends} />}></Button>
       <Divider/>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    </div>
  );
};

export default SiderRight;