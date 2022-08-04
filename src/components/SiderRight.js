import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Image, Row, Col } from 'antd';
import React from 'react';

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
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
    </div>
  );
};

export default SiderRight;