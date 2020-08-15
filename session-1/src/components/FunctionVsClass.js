import React, { useState, Component, useEffect } from "react";
import '../index.css';

function CustomButton(props) {
  return (
    <button className="bg-yellow" onClick={() => props.handleClick(7)}>
      Custom Button
    </button>
  )
}

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // debugger
    console.log('mount component');

    return function cleanup() {
      // debugger
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    // debugger
    console.log('count updated: ', count);
    console.log('count2 updated: ', count2);
  }, [count, count2])

  function updateCount(inc) {
    setCount(count + inc)
  }
  
  return (
    <>
      <style jsx="true">{`
        .bg-yellow {
          background-color: yellow;
        }
      `}</style>
      <h1 className="text-red">{props.title}</h1>
      <h2
        style={{
          fontSize: '12px',
          fontWeight: 'bold',
          border: '1px solid yellow',
          color: 'blue',
        }}
      >
        {props.subTitle}
      </h2>
      
      <p>You clicked {count} times</p>
      <CustomButton handleClick={updateCount} />
      <button className="bg-yellow" onClick={() => updateCount(4)}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button>
    </>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
      count2: 2
    };
    this.setCount = this.setCount.bind(this);
  }

  setCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  incCount2() {
    this.setState(state => {
      return {
        count2: state.count2 + 1
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.setCount}>
          Click me
        </button>
        
        <p>You clicked {this.state.count2} times</p>
        <button onClick={() => this.incCount2()}>
          Click me
        </button>
      </div>
    );
  }
}

function FunctionVsClass() {
  return (
    <div className="App">
      <FunctionComponent  title="Funtion Comp" subTitle="12345xx"/>

      <hr />

      <ClassComponent title="Class Comp" initialCount={4}/>
    </div>
  );
}

export default FunctionVsClass;
