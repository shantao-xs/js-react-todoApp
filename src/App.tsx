//应用的主要组件和总框架所在地，汇总所有的组件，返回一个整合的html结构
//方法的编写步骤：先在return中写需要实现的位置（在什么变化下调用这个方法？取得什么效果？），然后再写对应的方法内容；写完方法后，在return的html部分页面中调用这个方法


//功能1：动态显示todo内容(todolist)
//功能2：让todo勾选框和active&completed status挂钩(todolist)
//功能3：依据status增加filter属性(todofooter)
//功能4：addTodo方法（todoheader）
//功能5：一键清除所有完成todo
/**新增功能：
 * 每个todo可以用×单独清除了（status=cleared)
 * 
 * todo: 待更新功能：
 * todo: todo的×按钮怎么把样式设计到最右边？
 */



import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';

const defaultTodos = [
  {
      id:'01',
      label:'example1: swimming',
      status:'active',
  },
  {
      id:'02',
      label:'example2: read <bullshit jobs>',
      status:'completed',
  }
]

//? TodoList todos这个todos怎么理解？
export const TodoApp = props => {
  const [todos, setTodos] = React.useState(defaultTodos);
  //todo 这里的filter是内置函数吗？
  const [filter, setFilter] = React.useState('all'); //是默认显示all的意思吗 
  
  //点击add新增todo(label)，伴随更新status
  //! 注意：这里设计了每个数据的类型，应该有哪些属性
  const addTodo = (label)=>{
    const getId = ()=> Date.now().toString(); //根据输入时间先后生成id，然后调用这个函数获得id字段
    const newTodo = {
      id:getId(),
      label:label,
      status:'active',
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  //点击时伴随改变status
  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo)=>{
      if (todo.id === id){
        return {...todo, status: todo.status === 'active' ? 'completed' : 'active'};
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  //点击清除所有完成todo
  const clearCompleted = ()=>{
    const updateTodos = todos.filter((todo)=>todo.status!=='completed');
    setTodos(updateTodos);
  }

  //点×清除该条todo
  //*js tips: map vs filter: map的作用类似于遍历-修改特定条件的数据，可以返回整个或部分数组；filter的作用类似于遍历-只筛选返回特定条件的部分数组，而不能对数组进行修改）。如下列函数就只能使用map。
  const handleCancelClick = (id) => {
    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: 'cleared' };
      }
      return todo;
    });
    setTodos(updateTodos);
  };


  
  //! 错误点：1. 在集成List组件的时候，没有把filter传入给这个组件，导致它接收不到状态 2.在给子组件传参的时候，小心核对，不要传错组件！
  //* tips:函数编写思路： 1.想要全局通用的方法，在App组件中定义如handleCancelClick 2.想要在某个子组件中使用它，需要从App-子组件-子子组件-...-目标子组件一路把参数传递下来 3.注意参数不要传错组件
  return (
    <div>
      <TodoHeader filter={filter} setFilter={setFilter} addTodo={addTodo}/>
      <TodoList todos={todos} filter={filter} toggleCompleted={toggleCompleted} handleCancelClick={handleCancelClick}/>
      <TodoFooter todos={todos} clearCompleted={clearCompleted} />
    </div>
  )
}