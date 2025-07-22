export const StarEffect = ({ count = 10, containerClass = '' }) => {
  const sizeClasses = ['star-large', 'star-medium', 'star-small']

  const stars = Array.from({ length: count }, (_, index) => {
    const top = Math.random() * 100
    const left = Math.random() * 100
    const sizeClass =
      sizeClasses[Math.floor(Math.random() * sizeClasses.length)]

    return (
      <span
        key={index}
        className={`star ${sizeClass}`}
        style={{ top: `${top}%`, left: `${left}%` }}
      ></span>
    )
  })

  return (
    <div className={`star-container ${containerClass}`} aria-hidden="true">
      {stars}
    </div>
  )
}
