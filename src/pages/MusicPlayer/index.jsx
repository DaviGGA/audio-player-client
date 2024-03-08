import { Music } from '../../components/Music';
import caramellaImg from '../../assets/caramella.png';
import { MusicControl } from '../../components/MusicControl';

export function MusicPlayer() {
  return (
    <div>
      <div className='music-wrapper'>
        <Music
        title="Carameldansen"
        img= {caramellaImg}
        data="Caramella girls • Suppergot • 2001"
        >
        </Music>
      </div>
      <MusicControl></MusicControl>
    </div>

  )
}