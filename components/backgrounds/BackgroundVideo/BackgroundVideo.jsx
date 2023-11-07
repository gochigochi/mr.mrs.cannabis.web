import { Overlay, Video, VideoContainer } from "./Elements"

const BackgroundVideo = ({ src, poster, setVideoLoaded }) => {

  return (
    <VideoContainer>
      <Overlay />
      <Video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src={src} type='video/mp4' />
      </Video>
    </VideoContainer>
  )
}

export default BackgroundVideo