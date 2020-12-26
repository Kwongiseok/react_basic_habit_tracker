import React, { memo, PureComponent } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef(); // React.createRef()를 사용하게되면
  // 함수가 반복해서 실행될 때마다 변수가 생성되는 비효율적인 일이 발생한다.
  // 따라서 이를 해결해주기 위해 react Hook 을 사용하는 코드도 고려해야한다.
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault(); // 브라우저 기본 기능을 취소 ( 페이지 리로딩 방지)
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = ''; // 추가한뒤 입력한 값 초기화
    formRef.current.reset(); // 초기화 동일하다 (정석)
  };
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef} // input이라는 요소가 inputRef와 연결이 되어서 이 요소에 접근해서 해당하는 데이터를 읽어올 수 있다.
        type='text'
        className='add-input'
        placeholder='Habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   // DOM 요소에 접근해서 그 요소에 value 나 클릭 이벤트나 이런 걸 등록했던 것 처럼
//   // 리액트는 바로 DOM 요소에 접근하지 않고 필요할 때 리액트에서 제공하는 createRef를 이용해서 멤버변수를 정의 한다음에
//   // 그것을 원하는 해당하는 리액트 컴포넌트에 ref로 연결하면 된다.

//   onSubmit = (e) => {
//     e.preventDefault(); // 브라우저 기본 기능을 취소 ( 페이지 리로딩 방지)
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     //this.inputRef.current.value = ''; // 추가한뒤 입력한 값 초기화
//     this.formRef.current.reset(); // 초기화 동일하다 (정석)
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef} // input이라는 요소가 inputRef와 연결이 되어서 이 요소에 접근해서 해당하는 데이터를 읽어올 수 있다.
//           type='text'
//           className='add-input'
//           placeholder='Habit'
//         />
//         <button className='add-button'>Add</button>
//       </form>
//     );
//   }
// }

export default HabitAddForm;
