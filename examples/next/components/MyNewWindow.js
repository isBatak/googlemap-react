import React from "react";
import ReactDOM from "react-dom";

export class MyNewWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { win: null, el: null };
  }

  componentDidMount() {
    let win = window.open('', '', 'width=600,height=400');
    win.document.title = 'A React portal window';
    let el = win.document.createElement('div');
    el = win.document.body.appendChild(el);
    this.setState({ win, el });
  }

  componentWillUnmount() {
    this.state.win.close();
  }

  render() {
    const { el, win } = this.state;
    if (!el) {
      return null;
    }
    console.log(win.document.title)
    return ReactDOM.createPortal(this.props.children, el);
  }
}
