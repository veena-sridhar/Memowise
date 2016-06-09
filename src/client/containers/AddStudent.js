import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions'

let AddStudent = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addStudent(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">Add a Student</button>
      </form>
    </div>
  )
}
AddStudent = connect()(AddStudent)

export default AddStudent