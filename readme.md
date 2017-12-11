 * http://docs.nativebase.io/docs/examples/ReduxCounterExample.html 
 * 
 * ACR: component连接了Action和Reducer
 * 1 用户交互component触发action，
 * 2 action传给Reducer拿到数据，
 * 3 然后反向传播，数据传给component的props，render。。

// Provider component makes the store available throughout our App
// Reducers will return the data needed by our app,然后把data传给控件的props
// We will simply create two actions Increment and Decrement. 