//返回并导出TodoHeader组件的显示效果:输入框+占位符，增加按钮，all/active/completed筛选按钮
//方法的编写步骤：先在return中写需要实现的位置（在什么变化下调用这个方法？取得什么效果？），然后再写对应的方法内容

import React from "react";

export const TodoHeader = (props)=>{
    const [inputText, setInputText] = React.useState('');
    const { filter, setFilter, addTodo } = props; //从todoApp传递来的参数，创建变量接受它

    //定义addtodo需要的各种方法，如果字段有内容，调用addTodo方法（传自todoApp），反之不懂
    //定义筛选需要的方法，接收并处理不同status应该呈现的内容
    const onInput = (e)=>{
        setInputText(e.target.value);
    }
    const onSubmit =()=>{
        if(inputText.length>0){
            addTodo(inputText);
        }else{
            setInputText('');
        }
    }
    const onFilter =(filterValue)=>{
        setFilter(filterValue);
    }

    //当点击某按钮（onclick），则会调用onFilter函数
    //当input输入框发生变化时（onchange)，调用onInput函数
    //当点击add按钮时（onclick），调用onSubmit函数
    return(
        <header>
            <h1>To Do</h1>
            <div className="addTodo">
                <input className="textfield" placeholder="please add todo"
                       value={inputText} onChange={onInput}/>
                <button className="submit" onClick={onSubmit}>Add</button>
            </div>
            <nav className="filter">
                <button className={filter==='all'? 'selected' : ''} onClick={() => onFilter('all')}>all</button>
                <button className={filter==='active'? 'selected' : ''} onClick={() => onFilter('active')}>active</button>
                <button className={filter==='completed'? 'selected' : ''} onClick={() => onFilter('completed')}>completed</button>
            </nav>
        </header>
    )
}