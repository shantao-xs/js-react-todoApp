/**返回并导出TodoList组件的显示效果: 
 * 1.将todos以列表形式呈现： ul+Array.map()
 */
//todo 这个map()怎么理解？

import React from "react";
import { TodoListItem } from "./TodoListItem.tsx";
export const TodoList = ()=>{
    return(
        <ul className="todos">
            {['01','02','03'].map((todo)=><TodoListItem/>)}
        </ul>
    );
}