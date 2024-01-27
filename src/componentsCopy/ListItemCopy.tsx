/**
 * 先看TodoList对TodoListItem组件的要求：
 * <TodoListItem key={todo.id} {...todo} toggleCompleted={toggleCompleted}/>
 * 传入一个数组变量的所有属性+定义key=id，一个点击完成的勾选框
 * 要求对每个todo bar，都有点击完成勾选框+todo具体文本
 */


//*重点：传入key=todo.id的作用是？作为List的一部分，每个ListItem在html框架上要注意什么？
//*答： ；每个listitem都是一个li
import React from "react";

export const TodoListItem = (props)=>{
    const {todo,toggleCompleted} = props;

    return(
        //框架：点击完成按钮-input(checkbox)，todo具体文本-label，具体搭配用法如下图
        //样式：每个label设计样式
        //方法：每次勾选时(onChange)，都触发toggleCompleted方法，让对应id的todo bar的status改变
        //*html tips： 在复选框<input type="inbox">中，通过onchange可以改变后台状态，通过checked则改变前端呈现（如只有在props.status === 'completed'的时候，小蓝勾才会勾在框框上）
        <li>
            <label className="">
                <input type="checkbox" onChange={toggleCompleted(props.id)} checked={props.status === 'completed'}/>
                {todo.label}
            </label>
        </li>
    )
}