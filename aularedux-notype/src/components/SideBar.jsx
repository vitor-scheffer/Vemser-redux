import { useState } from "react"
import { connect } from "react-redux"
import * as VideoActions from '../store/actions/video'

const SideBar = ({modules, handleLesson, deleteLesson}) => {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => handleLesson(module, lesson)}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={deleteLesson}>Apagar</button>
    </aside>
  )
}

const mapStateToProps = state => ({
  modules: state.videoReducer.modules
})

const mapDispatchToProps = dispatch => ({
  handleLesson: (module, lesson) => dispatch(VideoActions.handleLesson(module, lesson)),
  deleteLesson: () => dispatch(VideoActions.deleteLesson())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)