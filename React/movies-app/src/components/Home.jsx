import React from 'react'
import Banner from './Banner'
import Movies from './Movies'
import Counter from './Counter'
import TodoRedux from './TodoRedux'

function Home() {
  return (
    <div>
        <Banner/>
        {/* <Movies/> */}
        <Counter/>
        <TodoRedux/>
    </div>
  )
}

export default Home