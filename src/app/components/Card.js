import React, { Component } from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import ArrowSVG from '../assets/images/arrow.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends Component {
  state = {
    active: true
  };

  click = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    const { active } = this.state;
    const { toastHeader, toastBody } = this.props;

    return (
      <div className="p-3 my-2 rounded">
        <Toast>
          <div className="card__header-container" onClick={this.click}>
            <ToastHeader>
              <div className="header__content">
                <h3>{toastHeader}</h3>
                <div className={`arrow__container ${active ? 'arrow__container-active' : ''}`}>
                  <img src={ArrowSVG} alt="arrow svg" />
                </div>
              </div>
            </ToastHeader>
          </div>
          <ToastBody className={active ? 'toast-body' : 'toast-body toast-body-inactive'}>
            {active ? toastBody : ""}
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default Card;