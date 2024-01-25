import { Modal } from "antd";

const MovieInfoModal = ({ movie, isOpen, setIsMovieInfoModalOpen }) => {
  return (
    <Modal
      title={movie.name}
      open={isOpen}
      onOk={() => setIsMovieInfoModalOpen(false)}
      onCancel={() => setIsMovieInfoModalOpen(false)}
      okType="default"
      okText="Book Now"
      width={1000}
      footer={(_, { OkBtn }) => (
        <>
          <OkBtn />
        </>
      )}
    >
      info
    </Modal>
  )
}

export default MovieInfoModal;