//返回并导出TodoFooter组件的显示效果: 剩余未完成数量显示，清除所有完成项按钮
/**在不同组件的html中，都用className来写样式
 * 在src的css文件中，统一设置这些样式
 * 
 * 功能1：统计未完成数量
 * 功能2：一键清除所有完成todo
 */
import React from "react";

export const TodoFooter = (props)=>{
    const {todos,clearCompleted} =props;
    const activeCount = todos.filter((todo)=> todo.status === 'active').length;

    return(
        <footer>
            <span>{activeCount} {activeCount===1? 'item' : 'items'} left</span>
            <button className="submit" onClick={clearCompleted}>Clear Completed</button>
        </footer>
        
    )
}