import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트된 후에 1초마다 시간을 업데이트
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 interval을 정리
    clearInterval(this.intervalId);
  }

  getCurrentTime() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${year}.${this.addLeadingZero(month)}.${this.addLeadingZero(date)}   ` +
      `${this.addLeadingZero(hours)}:${this.addLeadingZero(minutes)}:${this.addLeadingZero(seconds)}`;
  }

  addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

  render() {
    return (
      <input type="hidden" className="clock" id="clock" name="date" value={this.state.currentTime} readOnly />
    );
  }
}

export default Clock;