import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import React,{useReducer,useCallback,useRef} from 'react'
function createBulkTodos(){
  const array =[];
  for(let i =0; i<100; i++){
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked : false
    });
  }
  return array;
}

function todoReducer(todos,action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' :
      return todos.map(todo =>
      todo.id ===action.id ?{...todo, checked: !todo.checked}: todo,
      )
      default:
        return todos;
  }
}
const App=()=>{
  /**
   * 리듀서
   * 초기 값
   * 컴포넌트가 맨 처음 렌더링 될 때만 초기 값을 넣어줌
   */
  //const[todos, setTodos] = useState(createBulkTodos)
  // ([
  //   {
  //     id:1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true
  //   },
  //   {
  //     id:2,
  //     text: '컴포넌트',
  //     checked:true
  //   },
  //   {
  //     id:3,
  //     text:'일정 관리 앱',
  //     checked: false
  //   },

  // ])
  const[todos,dispatch]= useReducer(todoReducer,undefined,createBulkTodos);
  const nextId = useRef(101);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    //setTodos(todos=>todos.concat(todo));
    dispatch({type: 'INSERT',todo});
    nextId.current += 1;
    
  },[]);

  const onRemove = useCallback(id =>{
    dispatch({type: 'REMOVE',id});
    //setTodos(todos=>todos.filter(todo => todo.id !== id));
  },[]);
 
  const onToggle= useCallback(id =>{
    dispatch({type: 'TOGGLE',id});
    // setTodos(todos =>
    //   todos.map(todo =>
    //     todo.id === id?{...todo, checked: !todo.checked} : todo,
    //     ),
    // )

  },[])
  return (
  <TodoTemplate>
    <TodoInsert onInsert = {onInsert}> </TodoInsert>
    <TodoList todos={todos}
              onRemove={onRemove}
              onToggle={onToggle}/>
     </TodoTemplate>
  
 );
};

export default App;
