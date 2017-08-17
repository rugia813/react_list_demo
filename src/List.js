import React, { Component } from 'react';

class List extends Component {
    
  render(){
    return <div className="ui padded one column grid">
            <div className="column rendered-example collections-table-variations-table-example-fixed-line">
              <table className="ui celled fixed single line table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Orgnization</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.item}
                </tbody>
              </table>
            </div>
          </div>
  }
}

class ItemDetail extends Component {
    
  render(){
    const obj = this.props.object;
    return <div className="ui text container">
              <a href={"#"+obj.ID} onClick={ () => this.props.click() }>Back</a>
              <h2 className="ui header">{obj.NAME}</h2>
              <p>{obj.DESCRIPTION}</p>
            </div>
  }
}

export { List, ItemDetail };