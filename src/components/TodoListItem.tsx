/**返回并导出TodoListItem组件的显示效果:
 * 1.勾选完成状态： input（checkbox）
 * 2.todo具体文本： label
 */
import React from "react";

export const TodoListItem = ()=>{
    return(
        <li className="todo">
            <label>
                <input type="checkbox" /> Todo1
            </label>
        </li>
    );
}