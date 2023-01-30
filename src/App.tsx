// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Clock(props:any) {
  return (
      <div>
        <h1>Hello, world!Clock1</h1>
        <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
      </div>
  );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

// setInterval(tick, 1000);


//------------------------------------------------

interface ClockProps { // Added this interface for props
    date: Date
}

class Clock2 extends React.Component<ClockProps> {
    render() {
        return (
            <div>
                <h1>Hello, world!Clock2</h1>
                <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick2() {
    ReactDOM.render(
        <Clock2 date={new Date()} />,
        document.getElementById('root')
    );
}

// setInterval(tick2, 1000);

//------------------------------------------------

let myStyle = {color:'red',textAlign:'center'}

interface NameProps {
    name: String
}

interface UrlProps {
    url: String
}

interface NicknameProps {
    nickname: String
}

class Name extends React.Component<NameProps> {
    render() {
        return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
    }
}
class Url extends React.Component<UrlProps> {
    render() {
        return <h1>网站地址：{this.props.url}</h1>;
    }
}
class Nickname extends React.Component<NicknameProps> {
    render() {
        return <h1>网站地址：{this.props.nickname}</h1>;
    }
}

function App(props:any) {
    return (
        <div>
            <Name name={props.name}/>
            <Url  url={props.url}/>
            <Nickname  nickname={props.nickname}/>
        </div>
    );
}

//---------------------------------------------------------

var myDivElement = <div className="foo" >  good man </div>;
ReactDOM.render(myDivElement, document.getElementById('root'));
//由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。

//---------------------------------------------------------
//我们可以在以上代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它，实例中的 p 元素添加了自定义属性 data-myattribute，添加自定义属性需要使用 data- 前缀。

ReactDOM.render(
    <div>
        <h1>菜鸟教程</h1>
        <h2>欢迎学习 React</h2>
        <h1>{1+1}</h1>
        <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
    ,
    document.getElementById('root')
);

//---------------------------------------------------------
let i = 1;
ReactDOM.render(
    <div>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('root')
);

//---------------------------------------------------------
//React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式

let myStyle2 = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle2}>菜鸟教程
        {/*注释...*/}

    </h1>,
    document.getElementById('root')
);


//---------------------------------------------------------
let arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('root')
);

//---------------------------------------------------------

class Clock3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),//箭头函数 this只的是Clock3
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

setTimeout(function (){

    ReactDOM.render(
        <Clock3 />,
        document.getElementById('root')
    );

},100);




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
