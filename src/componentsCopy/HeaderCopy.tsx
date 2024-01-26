import React from "react";

export const TodoHeader = (props)=>{
    const {addTodo,filter,setFilter} = props;

    const [inputText,setInputText] = React.useState('');

    //输入时 调用，将e.value录入inputText数组中
    const onInput = (e)=>{
        setInputText(e.target.value);
    }

    //点击时 调用，检查当前inputText长度，非空则调用addTodo()录入todos数组中
    const onSubmit = () =>{
        if(inputText !== ''){
            addTodo(inputText);
        }else{
            setInputText('');//这句不写也行吧
        }
    }

    //点击时调用，使filter变为鼠标点击的这个status
    //todo 虽然status变成了'active'，可怎么做到只呈现这些active的todo呢
    //todo 答：在todoList组件中使用filter参数进行if筛选实现
    const onFilter = (status) =>{
        setFilter(status);
    }


    return(
        <header>
            <h1>To Do</h1>
            
            //输入框
            //框架：预设显示字placeholder
            //! 注意：这个呈现只是footer部分的呈现，并不包括呈现点击了筛选status后list应有的变化
            //样式：输入框统一样式，输入栏、add按钮特定样式
            //方法：若点击(onClick)，则调用onSubmit方法以实现增加todo；若输入框有变化(onChange)，则调用
            //累计赊欠方法与变量：
            //方法：onSubmit, onInput
            //todo 为什么input里需要预设value={inputText}？
            <div className="addTodo">
                <input className="textfiled" type="text" placeholder="please add todos" onChange={onInput}/>
                <button className="submit" onClick={onSubmit}>Add</button>
            </div>

            //筛选栏
            //框架：filter button: nav是干嘛的？怎么实现三个button并排？
            //样式：filter框统一样式，被选中的按钮另有样式（判定条件：当前filter的值是哪个status，则对应的button施加该样式效果）
            //方法：若点击（onclick），则修改状态为点击对应的status
            //累计赊欠方法与变量：
            //变量：filter
            //方法：onFilter('status')改变状态，
            <nav className="filter">
                <button className={filter === 'all'? 'selected' : ''} onClick={()=>{onFilter('all')}}>All</button>
                <button className={filter === 'active'? 'selected' : ''} onClick={()=>{onFilter('active')}}>Active</button>
                <button className={filter === 'completed'? 'selected' : ''} onClick={()=>{onFilter('completed')}}>Completed</button>
            </nav>
        </header>
    )
}