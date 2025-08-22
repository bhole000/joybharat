import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="lGgXRDkI_FE" onClose={() => setOpen(false)} />
      <button className="popup-youtube slide-play-button border-0" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></button>
    </React.Fragment>
  )
}


const VideoPopup2 = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />
      <button className="popup-youtube slide-play-button border-0" onClick={()=> setOpen(true)} ><i className="fa fa-play" style={{color:'#a6611c'}}></i></button>
    </React.Fragment>
  )
}
export  {VideoPopup2};
export default VideoPopup;