import React from "react";
import "../style/hexagon.scss";

interface iProps {
  [key: string]: string;
  icon: string;
  h2: string;
  h4: string;
}
class Hexagon extends React.Component<iProps> {
  render() {
    return (
      <div className='hex_wrap1'>
        <div className='hex_wrap'>
          <div className='hexagon'>
            <i className={`${this.props.icon} hexagon__icon`}></i>
          </div>
        </div>
        <h2 className='skills__h2'>{this.props.h2}</h2>
        <h4 className='skills__h4'>
          {/* h4의 문자열에 \n가 포함되어 있을 경우 줄바꿈 해준다. */}
          {this.props.h4.split("\\n").map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </h4>
      </div>
    );
  }
}
export default Hexagon;
