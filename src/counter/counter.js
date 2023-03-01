import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './counterSlice'

 function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
        className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;

