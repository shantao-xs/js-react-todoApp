//应用的主要组件和总框架所在地，汇总所有的组件，返回一个整合的html结构
//方法的编写步骤：先在return中写需要实现的位置（在什么变化下调用这个方法？取得什么效果？），然后再写对应的方法内容；写完方法后，在return的html部分页面中调用这个方法


//功能1：动态显示todo内容(todolist)
//功能2：让todo勾选框和active&completed status挂钩(todolist)
//功能3：依据status增加filter属性(todofooter)
//功能4：addTodo方法（todoheader）
//功能5：一键清除所有完成todo

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
  const [filter, setFilter] = React.useState('all'); //是默认显示all的意思吗
  
  //点击add新增todo(label)，伴随更新status
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
    const newTodos = todos.filter((todo)=>todo.status != 'completed')
    setTodos(newTodos);
  }


  

  return (
    <div>
      <TodoHeader filter={filter} setFilter={setFilter} addTodo={addTodo}/>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      <TodoFooter todos={todos} clearCompleted={clearCompleted}/>
    </div>
  )
}