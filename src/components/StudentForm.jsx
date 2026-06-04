function StudentForm({ studentName, handleNameChange }) {
  return (
    <div className="student-box">
      <h2>Hello {studentName}</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleNameChange}
      />
    </div>
  )
}

export default StudentForm