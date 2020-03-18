import React, { useContext } from "react";
import { DataContext } from "../App";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: '50%',
    height: '50%',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};
Modal.setAppElement('#root')
const MyModal = () => {
  const data = useContext(DataContext);

  function closeModal() {
    data.setSelectedModal(null);
  }

  return (
    <>
      {data.selectedModal && (
        <Modal
          isOpen={data.selectedModal != null}
          onRequestClose={closeModal}
          contentLabel="Country Modal"
          style={customStyles}
          overlayClassName="modal-overlay"
        >
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h3>{data.selectedModal[0]}</h3>
          <p>
              cases: {data.selectedModal[1]}
          </p>
          <p>
              deaths: {data.selectedModal[2]}
          </p>
          <p>
              active: {data.selectedModal[8]}
          </p>
          <p>
              critical: {data.selectedModal[7]}
          </p>
          <p>
              recovered: {data.selectedModal[4]}
          </p>
          <p>
              new cases: {data.selectedModal[6]}
          </p>
          <p>
              new deaths: {data.selectedModal[5]}
          </p>
          <p>
              per 1M population: {data.selectedModal[9]}
          </p>
        </Modal>
      )}
    </>
  );
};
export default MyModal;
