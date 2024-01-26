/**
 * Apps对TodoFooter组件的要求：
 * <TodoFooter todos={todos} clearCompleted={clearCompleted}/>
 * 传入一个数组变量，一个清零方法
 * 要求返回footer的样式，并根据status统计目前剩余active的项目数量，实现clear的方法
 */
//? 为什么clearCompleted不直接在Footer组件定义呢？是因为还想复用在其他组件里吗？
//js tips: 筛选某种状态用filter

import React from "react";

export const TodoFooter = (props) =>{
    const {todos, clearCompleted} =props;
    const activeCount = todos.filter((todo)=>todo.status==='active').length;


    return(
        //框架：footer有专有元素，span确保在同行
        //样式：button统一沿用submit的样式
        //方法：若点击clear completed(onClick)，则调用clearCompleted方法
        <footer>
            <span>{activeCount} todo {activeCount>1?'items':'item'} left</span>
            <button className="submit" onClick={clearCompleted}></button>
        </footer>
    )
}