/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

/*1. (Stateless Component)无状态组件
 由于没有状态的影响所以就是纯静态展示的作用。一般来说，各种UI库里也是最开始会开发的组件类别。如按钮、标签、输入框等。它的基本组成结构就是属性（props）加上一个渲染函数（render）。由于不涉及到状态的更新，所以这种组件的复用性也最强。
 */

class PureComponent extends Component {
    //
    render() {
        return (
            <Text>Stateless Component</Text>
        );
    }
}

//or:
const ConstPureComponent = (props) => {
  <div>
    //jajaja
  </div>
}

/**2. 有状态组件
 在无状态组件的基础上，如果组件内部包含状态（state）且状态随着事件或者外部的消息而发生改变的时候，这就构成了有状态组件（Stateful Component）。有状态组件通常会带有生命周期(lifecycle)，用以在不同的时刻触发状态的更新。这种组件也是通常在写业务逻辑中最经常使用到的，根据不同的业务场景组件的状态数量以及生命周期机制也不尽相同。
 * */

class StatefulComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //定义状态
            loading: false
        }
    }

    //life cycles
    componentWillMount() {
        //
    }

    componentDidMount() {

    }

    render() {
        return (
            <Text>StatefulComponent</Text>
        );
    }
}

/**3. 容器组件
 在具体的项目实践中，我们通常的前端数据都是通过Ajax请求获取的，而且获取的后端数据也需要进一步的做处理。为了使组件的职责更加单一，引入了容器组件(Container Component)的概念。我们将数据获取以及处理的逻辑放在容器组件中，使得组件的耦合性进一步地降低。
 * */

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            users: []
        })

    }

    componentDidMount() {
        var _this = this;
        axios.get('/path/to/user-api').then(function(response) {
            _this.setState({users: response.data});
        });
    }

    render() {
        return (<UserList users={this.state.users}/>);
    }
}
//上面这个容器组件，就是负责获取用户数据，然后以props的形式传递给UserList组件来渲染。容器组件也不会在页面中渲染出具体的DOM节点，因此，它通常就充当数据源的角色

/*4.Higher-Order Component(高阶组件)
 对于一般的中小项目来说, 你只需要用到以上的这三种组件方式就可以很好地构造出所需的应用了。但是当面对复杂的需求的时候，我们往往可以利用高阶组件(Higher-Order Component)编写出可重用性更强的组件。那么什么是高阶组件呢？其实它和高阶函数的概念类似，就是一个会返回组件的组件。或者更确切地说，它其实是一个会返回组件的函数。就像这样：

 const HigherOrderComponent = (WrappedComponent) => {
      return class WrapperComponent extends Component {
          render() {
          //do something
         }
      }
 }
 **/

/**
 * 高阶组件, 可以再原有的组件基础上, 对其增加新的功能和行为.
 * 类似于Swift中有默认实现的的Protocol
 * https://daveceddia.com/extract-state-with-higher-order-components/
 * */

//常见的高阶函数
// It's a function...
function myHOC() {
    // Which returns a function that takes a component...
    return function(WrappedComponent) {
        // It creates a new wrapper component...
        class TheHOC extends React.Component {
            render() {
                // And it renders the component it was given
                return <WrappedComponent {...this.props} />;
            }
        }

        // Remember: it takes a component and returns a new component
        // Gotta return it here.
        return TheHOC;
    }
}


//提取共享的state->如果有两个组件都需要加载同样的数据，那么他们会有相同的 componentDidMount 函数。
//这里有2个组件, 显示同样的数据
import React, { Component } from 'react';
import * as API from '../api';  // let's just pretend this exists

// class BookDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             book: null
//         };
//     }
//
//     componentDidMount() {
//         API.getBook(this.props.bookId).then(book => {
//             this.setState({ book });
//         })
//     }
//
//     render() {
//         const { book } = this.state;
//
//         if(!book) {
//             return <div>Loading...</div>;
//         }
//
//         return (
//             <div>
//               <img src={book.coverImg}/>
//               <div>{book.author}</div>
//               <div>{book.title}</div>
//             </div>
//         );
//     }
// }
//
// class BookSummary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             book: null
//         };
//     }
//
//     componentDidMount() {
//         API.getBook(this.props.bookId).then(book => {
//             this.setState({ book });
//         })
//     }
//
//     render() {
//         const { book } = this.state;
//
//         if(!book) {
//             return <div>Loading...</div>;
//         }
//
//         return (
//             <div>
//               <div>{book.summary}</div>
//             </div>
//         );
//     }
// }

//1.找出重复的代码
//2.迁移重复的代码到高阶组件
function loadBook() {
    return function (WrappedComponent) {
        // It creates a new wrapper component...
        class BookLoader extends Component {
            constructor(props) {
                super(props)
                this.state = ({
                    book: null
                })
            }

            componentDidMount() {
                API.getBook(this.props.bookId).then(book => {
                    this.setState({ book });
                })
            }
            render() {
                const { book } = this.state;

                if(!book) {
                    return <div>Loading...</div>;
                }

                // Notice how "book" is passed as a prop now
                return (
                    <WrappedComponent
                        {...this.props}
                        book={book} />
                );
            }
        }

        // Remember: it takes a component and returns a new component
        // Gotta return it here.
        return BookLoader;
    }
}
//在 BookLoader 高阶组件中处理 book state，并且作为prop传递给已包裹的组件，使用相同的办法来处理Loading state，我们需要做的是拉取state，并且更新到组件中去。

//3.包裹组件，并且使用props替换state
//更新BookDetail
class BookDetails extends Component {
    render() {
        // Now "book" comes from props instead of state
        const { book } = this.props;

        return (
            <div>
                <img src={book.coverImg}/>
                <div>{book.author}</div>
                <div>{book.title}</div>
            </div>
        );
    }
}

class BookSummary extends Component {
    render() {
        // Now "book" comes from props instead of state
        const { book } = this.props;

        return (
            <div>
                <div>{book.summary}</div>
            </div>
        );
    }
}
//尽可能的简化
function BookDetails({ book }) {
    return (
        <div>
            <img src={book.coverImg}/>
            <div>{book.author}</div>
            <div>{book.title}</div>
        </div>
    );
}
//export
export default loadBook()(BookDetails);

function BookSummary({ book }) {
    return (
        <div>
            <div>{book.summary}</div>
        </div>
    );
}
//export
export default loadBook()(BookSummary);
//or
export default loadBook(BookSummary);


/**
 * Render Callback组件
 *还有一种组件模式是在组件中使用渲染回调的方式，将组件中的渲染逻辑委托给其子组件。就像这样：
 * */
class RenderCallbackCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "hello"
        };
    }

    render() {
        return this.props.children(this.state.msg);
    }
}

const ParentComponent = () =>
    (<RenderCallbackCmp>
        {msg =>
            //use the msg
            <div>
                {msg}
            </div>}
    </RenderCallbackCmp>);

//父组件获取了内部的渲染逻辑，因此在需要控制渲染机制时可以使用这种组件形式。


export default class components extends Component {

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});