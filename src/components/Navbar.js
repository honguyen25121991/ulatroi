import { Menu, Image, Input, Button } from 'antd';
import { NotificationOutlined, MessageOutlined, UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faBell, faComment, faUserPlus} from '@fortawesome/fontawesome-free-solid'
import React from 'react';
const { SubMenu } = Menu;
class Navbar extends React.Component{
    state = {
        current: 'logo',
    }
    handleClick = e => {
        console.log('click',e);
        this.setState({ current: e.key})
    }

    render() {
        const { current } = this.state;
        return (
          <Menu height={40} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor:"#1e2321"}}>
            <Menu.Item key="logo" style={{backgroundColor:"transparent"}}>
                <Image height={44} width={44} style={{marginBottom:3}} src="https://ulatroi.net/themes/wondertag/img/logo.png"/>
            </Menu.Item>
            <Menu.Item key="search" style={{width:684,maxHeight:10}}>    
            {/* style={{color:'#ffffff',backgroundColor:"#0f1110", borderRadius:"2em", border:0}}  */}
              <Input prefix={ <SearchOutlined/> }  style={{borderRadius:"2em", border:0,padding:"10px 10px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="Search for people, pages, groups and #hashtags"  />
            </Menu.Item>

            <Menu.Item style={{alignItems:"center"}}>
              <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserPlus} />}></Button>
              <Button style={{marginLeft:"8px",color:'#ffffff',backgroundColor:'#333333',border:0}} type="primary"  shape="circle" size="large" icon={<FontAwesomeIcon icon={faComment}/>}></Button>
              <Button style={{marginLeft:"8px",color:'#ffffff',backgroundColor:'#333333',border:0}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faBell} />}></Button>
              <Button style={{marginLeft:"8px",color:'#ffffff',backgroundColor:'#333333',border:0}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
            </Menu.Item>
          </Menu>
          
        );
    }
}

export default Navbar;