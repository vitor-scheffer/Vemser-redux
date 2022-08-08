import { connect } from "react-redux"

const Video = ({activeLesson, activeModule}) => {
  return (
    <div>
      <strong>Modulo: {activeLesson ? activeModule.title : 'Selecione um módulo'}</strong> 
      <br />
      <span>Aula: {activeLesson ? activeLesson.title : 'Selecione uma aula'}</span>
    </div>
  )
}
export default connect(state => ({
  activeModule: state.videoReducer.activeModule,
  activeLesson: state.videoReducer.activeLesson
}))(Video)