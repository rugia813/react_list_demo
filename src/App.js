import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {TopMenu, Content} from './Layout';
import {List, ItemDetail} from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      show_list: true,
      current_idx: null,
    };

    //fetch list data
    fetch('http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=O').then(
      (response) => {
        return response.json();
      }
    ).then(
      (data) => {
        let list = [];
        for (let i in data) {
          list.push(data[i]);
        }
        this.setState({ list: list })
      }
    );
    
    this.handleListClick = this.handleListClick.bind(this);
    this.handleBackToList = this.handleBackToList.bind(this);
  }

  render() {
    const list = this.state.list;
    let current_idx = this.state.current_idx;
    const items = list.map((o, i) => {
      return <tr key={o.ID}>
              <td> <a id={o.ID} href={"#"+o.ID} onClick={ () => { this.handleListClick(i) } }>{o.NAME}</a> </td>
              <td>{o.ORGNAME}</td>
              <td>{o.PLACE}</td>
            </tr>
    });
    let obj = list[current_idx];

    return (
      <div>
        <TopMenu />

        <Content>
          { (this.state.show_list) ? <List item={items} /> : <ItemDetail object={ obj } click={this.handleBackToList} /> }
        </Content>
      </div>
    );
  }

  handleListClick(idx) {
    this.setState({
      show_list: false,
      current_idx: idx,
    })
    window.scroll(0, 0)
  }

  handleBackToList() {
    this.setState({
      show_list: true,
    })
  }

}




export default App;
