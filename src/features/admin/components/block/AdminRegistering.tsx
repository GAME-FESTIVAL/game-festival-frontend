import ReactDOM from 'react-dom'

export const AdminRegistering = ({ text }: { text?: string }) => {
  return ReactDOM.createPortal(
    <div className="registering">
      <div className="registering_message">{text || '등록'}중입니다...</div>
    </div>,
    document.getElementById('portal-root') as HTMLElement
  )
}
