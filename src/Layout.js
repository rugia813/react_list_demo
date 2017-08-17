import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react'

class TopMenu extends Component {
    
  render(){
    return <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a' header>
                <Image
                  size='mini'
                  src='/logo.png'
                  style={{ marginRight: '1.5em' }}
                />
                React List Demo
              </Menu.Item>
              <Menu.Item as='a'>Home</Menu.Item>
            </Container>
          </Menu>
  }
}

class Content extends Component {
    
  render(){
    return <Container style={{ marginTop: '7em' }}>
            {this.props.children}
          </Container>
  }
}




export { TopMenu, Content };