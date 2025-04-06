import ReactDOM from 'react-dom'

export const Registering = () => {
  return ReactDOM.createPortal(
    <div className="registering">
      <div className="registering_message">등록중입니다...</div>
    </div>,
    document.getElementById('portal-root') as HTMLElement
  )
}
