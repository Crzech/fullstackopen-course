import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
  <h1>{props.course}</h1>
);

const Content = (props) => (
  <>
    <p>
      {props.part1} {props.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </>
);

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
);

const Part = (props) => {
  switch(props.type) {
    case 1:
      return (<Header course={props.course} />);
    case 2:
      return (
        <Content
          part1={props.part1} 
          part2={props.part2} 
          part3={props.part3}
          exercises1={props.exercises1}
          exercises2={props.exercises2}
          exercises3={props.exercises3} 
        />
      );
    case 3:
      return (
        <Total 
          total={props.total}
        />
      );
  }
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part type={1} course={course} />
      <Part
        type={2}
        part1={part1} 
        part2={part2} 
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3} 
      />
      <Part 
        type={3}
        total={exercises1 + exercises2 + exercises3}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))