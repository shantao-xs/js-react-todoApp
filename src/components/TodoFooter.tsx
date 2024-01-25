//返回并导出TodoFooter组件的显示效果: 剩余未完成数量显示，清除所有完成项按钮
/**在不同组件的html中，都用className来写样式
 * 在src的css文件中，统一设置这些样式
 */
import React from "react";

export const TodoFooter = ()=>{
    return(
        <footer>
            <span>4 items left</span>
            <button className="submit">Clear Completed</button>
        </footer>
        
    )
}