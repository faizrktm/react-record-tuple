import * as React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = React.memo(({ data, name }) => {
  React.useEffect(() => {
    console.log(`run effect! for ${name}`);
  }, [data]);

  return (
    <div>
      Component {name}
    </div>
  )
});

const App = () => {
  const [count, setCount] = React.useState(0);
  const regularObj = {name: 'Faiz'};
  const record = #{name: 'Faiz'};
  const regularArrObj = [{name: 'Aloha'}];
  const tuple = #[#{name: 'Aloha'}];

  console.log(Record.from(regularObj));

  const onClickCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={onClickCount}>click me to trigger re-render</button>
      <MyComponent data={regularObj} name="Regular Object Data" />
      <MyComponent data={record} name="Record Data" />

      <MyComponent data={regularArrObj} name="Regular Array Object Data" />
      <MyComponent data={tuple} name="Tuple Data" />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

