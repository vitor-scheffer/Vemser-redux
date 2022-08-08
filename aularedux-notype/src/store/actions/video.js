export const handleLesson = (module, lesson) => {
  return {
    type: 'SET_LESSON',
    module,
    lesson
  }

}

export const deleteLesson = () => {
  return {
    type: 'DELETE_LESSON'
  }
}