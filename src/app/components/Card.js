import React from 'react';
import {
  Toast,
  ToastHeader,
  ToastBody,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
  };

  click() {
      this.setState({
          active: !this.state.active
      });
  }
  render() {
    return (
      <div className="p-3 my-2 rounded container-md" >
        <Toast>
          <div className='card__header-container' onClick={() => this.click()}>
          <ToastHeader>
            <div className='header__content' ><h3>{this.props.toastHeader}</h3><div className="arrow__container">{this.state.active ? "<" : ">"}</div></div>
          </ToastHeader>
          </div>
          <ToastBody>
            { this.state.active ? this.props.toastBody: ""}
          </ToastBody>
        </Toast>
      </div>
    );
  }
};