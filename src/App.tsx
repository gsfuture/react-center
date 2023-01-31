// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types'

import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const mainDiv = [];

function Clock(props:any) {
  return (
      <div>
        <h1>Hello, world!Clock1</h1>
        <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
      </div>
  );
}
mainDiv.push(<hr/>)
mainDiv.push(<Clock date={new Date()} />)
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
mainDiv.push(<hr/>)
mainDiv.push(<Clock2 date={new Date()} />);

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
mainDiv.push(<hr/>)
mainDiv.push(myDivElement);

//由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。

//---------------------------------------------------------
//我们可以在以上代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它，实例中的 p 元素添加了自定义属性 data-myattribute，添加自定义属性需要使用 data- 前缀。

mainDiv.push(<hr/>)
mainDiv.push(
    <div>
        <h1>菜鸟教程</h1>
        <h2>欢迎学习 React</h2>
        <h1>{1+1}</h1>
        <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
);

//---------------------------------------------------------
let i = 1;
mainDiv.push(<hr/>)
mainDiv.push(
    <div>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
);

//---------------------------------------------------------
//React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式

let myStyle2 = {
    fontSize: 100,
    color: '#FF0000'
};
mainDiv.push(<hr/>)
mainDiv.push(
    <h1 style = {myStyle2}>菜鸟教程
        {/*注释...*/}

    </h1>
);


//---------------------------------------------------------
let arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
mainDiv.push(<hr/>)
mainDiv.push(
    <div>{arr}</div>
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

mainDiv.push(<hr/>)
mainDiv.push(
        <Clock3 />
    );


//---------------------------------------------------------
//default props

class HelloMessage extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

HelloMessage.defaultProps = {
    name: 'Runoob'
};

const element = <HelloMessage/>;
mainDiv.push(<hr/>)
mainDiv.push(element)

//---------------------------------------------------------
class WebSite extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "菜鸟教程",
            site: "https://www.runoob.com"
        }
    }
    render() {
        return (
            <div>
                <WebName name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
}



class WebName extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<WebSite />);

//---------------------------------------------------------


// var title = "菜鸟教程";
var title = 123;
class MyTitle extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.title}</h1>
        );
    }
}

MyTitle.propTypes = {
    title: PropTypes.string
};


mainDiv.push(<hr/>)
mainDiv.push(<MyTitle title={title} />);


//---------------------------------------------------------

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);

    }

    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick2 = () => {
        console.log('this is:', this);
    }


    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>,

            <button onClick={this.handleClick2}>
                Click me
            </button>
            </div>
        );
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<Toggle />);

//---------------------------------------------------------


class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<Popper />);


//---------------------------------------------------------

function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
    return <h1>请先注册。</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

mainDiv.push(<hr/>)
mainDiv.push(
    //     // 尝试修改 isLoggedIn={true}:
 <Greeting isLoggedIn={false} />
);

//---------------------------------------------------------

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            登陆
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            退出
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <div>
                    {isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick} />
                    ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                </div>

                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}



mainDiv.push(<hr/>)
mainDiv.push(<LoginControl />);
//---------------------------------------------------------



function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            { unreadMessages.length > 0 &&
            <h2>
                您有 {unreadMessages.length} 条未读信息。
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];


mainDiv.push(<hr/>)
mainDiv.push(<Mailbox unreadMessages={messages} />);



//---------------------------------------------------------


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            警告!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏' : '显示'}
                </button>
            </div>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<Page />)
//---------------------------------------------------------



const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
);

mainDiv.push(<hr/>)
mainDiv.push(<ul>{listItems}</ul>)


//---------------------------------------------------------

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers2 = [1, 2, 3, 4, 5];
mainDiv.push(<hr/>)
mainDiv.push(<NumberList numbers={numbers2} />)


//---------------------------------------------------------

function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
}

function NumberList3(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ListItem key={number.toString()}
                  value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers3 = [1, 2, 3, 4, 5];
mainDiv.push(<hr/>)
mainDiv.push(<NumberList3 numbers={numbers3} />);

//当你在 map() 方法的内部调用元素时，你最好随时记得为每一个元素加上一个独一无二的 key。

//---------------------------------------------------------
//元素的 key 在他的兄弟元素之间应该唯一

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

mainDiv.push(<hr/>)
mainDiv.push(<Blog posts={posts} />);

// const content = posts.map((post) =>
//     <Post
//         key={post.id}
//         id={post.id}
//         title={post.title} />
// );
// 上面例子中，Post 组件可以读出 props.id，但是不能读出 props.key。


//---------------------------------------------------------

var ListItem4 = (props) => {       //es6中箭头函数
    return <li>{props.value}</li>;
}

function NumberList4(props) {
    var numbers;    //声明在外面是因为 {} 中不能出现var,const,let等这种关键字
    return (
        <ul>
            {
                numbers = props.numbers,   //注意这里要加逗号

                numbers.map((number) =>
                <ListItem4 key={number}
                value={number} />
                )}
        </ul>
    );
}

var arr4 = [1,2,3];   //要传递的参数
mainDiv.push(<hr/>)
mainDiv.push(
    <NumberList4 numbers={arr4}/>  //这里的numbers就是props下的numbers,即props.numbers
);


//---------------------------------------------------------

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clickCount: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(state) {
            return {clickCount: state.clickCount + 1};
        });
    }
    render () {
        return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<Counter />);



//---------------------------------------------------------
// isMounted 的方法在 ES6 中已经废除。主要的原因是它经过实际使用与测试可能不足以检测组件是否挂载，尤其是对于有一些异步的程序情况，以及逻辑上造成混乱。现在用以下方法代替：
//
// componentDidMount() {
//     this.mounted = true;
// }
//
// componentWillUnmount() {
//     this.mounted = false;
// }


//---------------------------------------------------------

class Clock33 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
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
                <h1>Hello, Runoob!</h1>
                <h2>现在时间是：{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<Clock33 />);

//---------------------------------------------------------
class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 1.0};
    }

    componentDidMount() {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    }

    render () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(
    <Hello name="world"/>
);

//---------------------------------------------------------



class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}


class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
mainDiv.push(<hr/>)
mainDiv.push(
    <div>
        <Button />
    </div>
);

//---------------------------------------------------------

class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', lastGistUrl: ''};
    }


    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.username} 用户最新的 Gist 共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(
    <UserGist source="https://api.github.com/users/octocat/gists" />
);

//---------------------------------------------------------
class HelloMessage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <h4>{value}</h4>
        </div>;
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<HelloMessage2 />);

//---------------------------------------------------------

class Content5 extends React.Component {
    render() {
        return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>{this.props.myDataProp}</h4>
        </div>;
    }
}
class HelloMessage5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <div>
            <Content5 myDataProp = {value} updateStateProp = {this.handleChange}/>
        </div>;
    }
}
mainDiv.push(<hr/>)
mainDiv.push(
    <HelloMessage5 />
);

//---------------------------------------------------------
//Select 下拉菜单

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择您最喜欢的网站
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="gg">Google</option>
                        <option value="rn">Runoob</option>
                        <option value="tb">Taobao</option>
                        <option value="fb">Facebook</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<FlavorForm />);

//---------------------------------------------------------
// 多个表单
// 当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    是否离开:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    访客数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

mainDiv.push(<hr/>)
mainDiv.push(<Reservation />);
//---------------------------------------------------------
//React 事件

class HelloMessage6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: '菜鸟教程'})
    }
    render() {
        var value = this.state.value;
        return <div>
            <button onClick={this.handleChange}>点我</button>
            <h4>{value}</h4>
        </div>;
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<HelloMessage6 />);
//---------------------------------------------------------
// React 事件
class Content7 extends React.Component {
    render() {
        return  <div>
            <button onClick = {this.props.updateStateProp}>点我</button>
            <h4>{this.props.myDataProp}</h4>
        </div>
    }
}
class HelloMessage7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: '菜鸟教程'})
    }
    render() {
        var value = this.state.value;
        return <div>
            <Content7 myDataProp = {value} updateStateProp = {this.handleChange}/>
        </div>;
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<HelloMessage7 />);

//---------------------------------------------------------
// 父组件和子组件都用表单:
class HelloMessageChild extends React.Component {
    render(){
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>子组件显示：{this.props.myDataProp}</h4>
        </div>;
    }
}
class HelloMessage8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '父组件',value1:"子组件"};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChange1(event) {
        this.setState({value1: event.target.value});
    }
    render() {
        var value = this.state.value;
        var value1 = this.state.value1;
        return <div>
            <table><tbody>
            <tr>
                <td>
                    <input type="text" value={value} onChange={this.handleChange} />
                    <h4>父组件显示：{value}</h4>
                </td>
                <td>
                    <HelloMessageChild myDataProp = {value1} updateStateProp = {this.handleChange1} />
                </td>
            </tr>
            </tbody></table>
        </div>;
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<HelloMessage8 />);

//---------------------------------------------------------
// React Refs

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    handleClick() {
        // 使用原生的 DOM API 获取焦点
        this.myRef.current.focus();
    }
    render() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}
mainDiv.push(<hr/>)
mainDiv.push(<MyComponent />);

//---------------------------------------------------------
// state.js模块 对应上面的A.js
let state = null;

// @ts-ignore
const useState = (value) => {
    // 第一次调用的时候没有初始值，因此使用传入的初始值赋值
    state = state || value
    function dispatch(newValue) {
        state = newValue
    }
    return [state, dispatch]
}

// 在其他模块中引入并使用 对应上面的B.js 相当于是一个hooks组件
// import React from 'react'
// import { useState } from './state'

function Demo() {
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(count + 1)}>{count}</button>
}
mainDiv.push(<hr/>)
mainDiv.push(<Demo />);


//---------------------------------------------------------








//---------------------------------------------------------

setTimeout(function (){
    ReactDOM.render(
        mainDiv,
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
