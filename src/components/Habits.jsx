import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  // Habits는 PureComponent 를 사용하지 않아도 괜찮을까?
  // Habits라는 habit의 리스트를 받아오는데 habit이 업데이트 되면 새로운 객체로 만들어지고 이는
  // Habits 또한 render를 유도하기 때문에 굳이 PureComponent로 만들 필요 없다.
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}
export default Habits;
/* my code 
  handleIncrement = (habit) => {
    // const id = habit.id;
    // const { habits } = this.state;
    // this.setState({
    //   habits: habits.map((m_habit) =>
    //     id === m_habit.id ? { ...m_habit, count: m_habit.count + 1 } : m_habit
    //   ),
    // });

    const habits = [...this.props.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count === 0) {
      const habits_count = this.props.habits_count + 1;
      this.props.onSetHabits_count(habits_count);
    }
    habits[index].count++; // spread 연산자로 복사될 때 객체 (주소) 가 복사되어서 어차피 같은 것을 가르치고 있다.
    // 배열안에 있는 object를 직접 수정했는데 이도 좋지 않다. 뒷 강의에서 설명!
    // this.setState({ habits }); // 자식 컴포넌트는 부모 컴포넌트의 state값을 동일하게 가지는가?? 궁금!
    this.props.onSetHabits(habits);
  };

  handleDecrement = (habit) => {
    // const id = habit.id;
    // const { habits } = this.state;
    // this.setState({
    //   habits: habits.map((m_habit) =>
    //     id === m_habit.id
    //       ? { ...m_habit, count: m_habit.count > 0 ? m_habit.count - 1 : 0 }
    //       : m_habit
    //   ),
    // });

    const habits = [...this.props.habits]; // ... spread operator => 하나하나씩 복사해오는 것.
    // spread를 사용한 이유 state를 직접적으로 접근하는 것 대신 껍데기를 하나 만들어줌.

    const index = habits.indexOf(habit); // indexOf를 주소 값으로 참조하는 것인가?! string일 때는 값을 참조했는데 확인 필요
    const count = habits[index].count - 1;
    if (count === 0) {
      const habits_count = this.props.habits_count - 1;
      this.props.onSetHabits_count(habits_count);
    }
    habits[index].count = count < 0 ? 0 : count; // bad code!!
    // this.setState({ habits }); // this.setState({ habits : habits }) 이지만, key와 value 이름이 같아서 habits 하나로 쓸 수 있다.
    this.props.onSetHabits(habits);
  };

  handleDelete = (habit) => {
    // const id = habit.id;
    // const { habits } = this.state;
    // this.setState({
    //   habits: habits.filter((m_habit) => id !== m_habit.id),
    // });
    
    const habitCp = [...this.props.habits];
    const index = habitCp.indexOf(habit);
    const count = habitCp[index].count;
    if (count > 0) {
      const habits_count = this.props.habits_count - 1;
      this.props.onSetHabits_count(habits_count);
    }
    const habits = this.props.habits.filter((item) => item.id !== habit.id);
    this.props.onSetHabits(habits);
  };
  render() {
    const { habits } = this.props;
    return (
      <div>
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
} */
