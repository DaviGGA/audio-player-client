import './style.css'
import { IoPlay } from "react-icons/io5";

export function MusicControl() {
  return (
    <div className="music-control">
      <button className='button-play'>
        <IoPlay className='play-symbol'></IoPlay>
      </button>
    </div>
  )
}