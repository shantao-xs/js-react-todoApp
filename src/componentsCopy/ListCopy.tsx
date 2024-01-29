/**
 * 先看Apps对TodoList组件的要求：
 * <TodoList todos={todos} toggleCompleted={toggleCompleted} />
 * 传入一个数组变量，一个点击完成的方法，一个status状态filter
 * 要求根据status返回todo list（每一个todo都由todolist item友情提供，控制status的变化由footer中的筛选按钮友情提供），每一个todo都能够用点击完成的方法改变完成的status
 */
//*js tips: 遍历变量数组，对每一个变量进行同样的批量处理操作：.map(obj => {...})
//*js tips: filter的两种用法：1.普通表达式，如todos.filter((todo)=>{todo.id>3}) 2.回调函数（有return），如todos.filter((todo)=>{if A return true; else if B return true;... return false})

import React from "react";
import { TodoListItem } from './ListItemCopy.tsx';

export const TodoList= (props)=>{
    const {todos, toggleCompleted,filter} = props;
    //todo（对接TodoFooter组件）预先处理数组，用户点击不同status后，返回不同status的todos数组 ——怎么做到的？这里没显示啊？
    //todo 不懂为什么这样return t/f就可以筛选出对应filter了，不是应该return对应的todos数组吗？
    //todo 答：因为filter后面的都是应用筛选方法的条件，依据这个f/t条件来筛选返回出对应的todos数组todos.filter

    const FilteredTodos = todos.filter((todo)=>{
        if (filter === 'all') {
            return true;
          } else if (filter === 'completed') {
            return todo.status === 'completed';
          } else if (filter === 'active'){
            return todo.status === 'active';
          };
      
          return false;
    })


    return(
        //框架：将todolistitem以列表的形式呈现 ul+todolistitem
        //样式：todo们的列表样式
        //方法：针对每一条todo，实现TodoListItem组件
        <ul className="todos">
            {todos.map((todo)=><TodoListItem key={todo.id} {...todo} toggleCompleted={toggleCompleted}/>)}
        </ul>
    )
}

