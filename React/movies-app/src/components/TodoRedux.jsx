import {useSelector, useDispatch} from 'react-redux'
import {addTask, setValue} from '../redux/todoSlice'

function TodoRedux() {
    const dispatch = useDispatch()
    const handleChange = (e) => {
      dispatch(setValue(e.target.value))  // payload -> e.target.value
    }
    const handleAdd = () => {
      dispatch(addTask())
    }
    const {value, todoList} = useSelector((state) => state.todo)

  const list = [];
  return (
    <>
      <h2>Todo</h2>
      <div>
        <input className='border border-gray-500' onChange={handleChange} value={value} type="text" placeholder="Add todo" />
        <button className='p-2 m-2 border border-gray-500' onClick={handleAdd}>Add Task</button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoRedux;