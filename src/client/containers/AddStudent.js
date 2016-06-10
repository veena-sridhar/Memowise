import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions'

let AddStudent = ({ dispatch, courseId }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addStudent(courseId, input.value))
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