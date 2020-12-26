import './app.css';
import Habits from './components/Habits';

import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    /*아래는 PureComponent 2번째 방법 */
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name, count: 0 },
      //spread 연산자 앞에만큼 복사하고 뒤에 새로운 데이터를 추가!
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 }; // 이미 0인거는 reset할 필요없다.
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}
export default App;

/* my code 
class App extends Component {
  id = 4;
  state = {
    habits_count: 0,
    input_habits: '',
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); // page 리로딩 방지
    const { habits } = this.state;
    this.setState({
      habits: habits.concat({
        id: this.id++,
        name: this.state.input_habits,
        count: 0,
      }),
    });
  };

  handleSetHabits_count = (habits_count) => {
    this.setState({ habits_count });
  };

  handleSetHabits = (habits) => {
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.map((item) => {
      item.count = 0;
    });
    this.setState({ habits_count: 0, habits });
  };
  render() {
    const { habits_count, habits } = this.state;
    return (
      <React.Fragment>
        <span className='HabitTracker'>
          <i className='fas fa-leaf leaf_icon'></i>
          <span>Habit Tracker</span>
          <span className='habits-count'>{habits_count}</span>
        </span>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Habit'
            className='inputHabit'
            onChange={this.handleChange}
            name='input_habits'
            value={this.state.input_habits}
          />
          <button type='submit'>Add</button>
        </form>
        <Habits
          habits={habits}
          habits_count={habits_count}
          onSetHabits_count={this.handleSetHabits_count}
          onSetHabits={this.handleSetHabits}
        />
        <button className='ResetButton' onClick={this.handleReset}>
          Reset All
        </button>
      </React.Fragment>
    );
  }
}
*/
