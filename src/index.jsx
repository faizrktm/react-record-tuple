import React, {useState, memo, useEffect, Suspense, lazy} from 'react';
import { render } from 'react-dom';

const LazyComponent = lazy(() => import('./LazyComponent'));

const MyComponent = memo(({ data, name }) => {
  useEffect(() => {
    console.log(`run effect! for ${name}`);
  }, [data]);

  return (
    <div>
      Component {name}
    </div>
  )
});

const App = () => {
  const [count, setCount] = useState(0);
  const regularObj = {name: 'Faiz'};
  const record = #{name: 'Faiz'};
  const regularArrObj = [{name: 'Aloha'}];
  const tuple = #[#{name: 'Aloha'}];

  const onClickCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const onClickLazy = () => {
    import('./helpers').then(({ multiple }) => {
      console.log(multiple(5, 2));
    });
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={onClickCount}>click me to trigger re-render</button>
      <button type="button" onClick={onClickLazy}>lazy load</button>
      <MyComponent data={regularObj} name="Regular Object Data" />
      <MyComponent data={record} name="Record Data" />

      <MyComponent data={regularArrObj} name="Regular Array Object Data" />
      <MyComponent data={tuple} name="Tuple Data" />
      <Suspense fallback={null}>
        {count > 3 && (
          <LazyComponent />
        )}
      </Suspense>
    </div>
  )
};

render(<App />, document.getElementById('root'));

