import './emptyMessage.css';

function EmptyMessage({ message }) {
  return (
    <div className="empty__message">
      <p className="empty__message-title">{message}</p>
    </div>
  );
}

export default EmptyMessage;
