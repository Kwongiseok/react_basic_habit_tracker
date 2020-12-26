import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  // 이 컴포넌트는 부모로 부터 받아온 정보를 사용하므로 따로 state가 필요하지 않다.
  // state object 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 한다.

  /* Lifecycle 예시 */
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} wiil unmount`);
  }
  handleIcrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIcrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
