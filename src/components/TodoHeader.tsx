//返回并导出TodoHeader组件的显示效果:输入框+占位符，增加按钮，all/active/completed筛选按钮

import React from "react";

export const TodoHeader = ()=>{
    return(
        <header>
            <h1>To Do</h1>
            <div className="addTodo">
                <input className="textfield" placeholder="please add todo"/>
                <button className="submit">Add</button>
            </div>
            <nav className="filter">
                <button className="selected">all</button>
                <button>active</button>
                <button>completed</button>
            </nav>
        </header>
    )
}