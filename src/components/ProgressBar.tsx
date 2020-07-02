import React from "react";
import "../style/progressbar.scss";

interface iProps {
  [key: string]: string;
  title: string;
  per: string;
  clas: string;
}
class ProgressBar extends React.Component<iProps> {
  render() {
    return (
      <div className='skills__one_set'>
        <div className='skills__description'>
          <span className={this.props.clas}>{this.props.title}</span>
          <span>{this.props.per}</span>
        </div>
        <div className='skills__bar'>
          <div className='skills__value' style={{ width: this.props.per }}></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
