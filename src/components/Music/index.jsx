import './style.css'

export function Music(props) {
  return (
    <div className="music">
      <h3 className="music-title">{props.title}</h3>
      <img className="music-img" src={props.img}/>
      <p className="music-data">{props.data}</p>
    </div>
  )
}