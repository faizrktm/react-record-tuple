# React with Record and Tuple
This experimental project is to shown the advantages of Record and Tuple within React. Record and Tuple is currenly on Stage 2 proposal so its not been released yet, but we can try it now using polyfill.

I also use this project to learn esbuild to build react project.

## Why
In certain places, memoization happen in react is shallow for object. It does compare primitive data type like string or number and we can get immediate advantage of it when using it with memo, useMemo, useEffect, etc. But for object and array, we either need to wrap it on useMemo or deeply freeze the object using Object.freeze. To avoid that complication, i believe Record and Tuple play nicely in this case.


## How
For the love of simplicity, we only need to do this and the magic happen.
```javascript
const data = #{
  name: "Faiz"
};
```

For nested object, we can do
```javascript
const data = #{
  name: "Faiz",
  clothes: #{
    top: "Polo Shirt",
    bottom: "HnM"
  }
};
```

Same goes with array
```javascript
const data = #[1,2,3];
```

### Convert current object to record

More on this: https://github.com/tc39/proposal-record-tuple