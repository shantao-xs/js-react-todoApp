//1 filter储存的三种type和todo bar的三种type
//2 todo bar的接口（3个属性），todo对象数组
//各种方法应该接收的参数类型和return的数据类型

export type FilterTypes = 'all' | 'active' | 'completed';
export type TodoTypes = 'active' | 'completed' | 'cleared';
export interface Todo {
    id:string;
    label:string;
    status:TodoTypes;
}

export type Todos = Todo[];
