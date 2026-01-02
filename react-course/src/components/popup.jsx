function Popup({ question, cancelpopup }) {
  return (
    <>
      <div className="popup">
        <span>{question}</span>

        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={() => console.log("Confirm clicked")}
          >
            Confirm
          </button>

          <button
            className="popup__btn popup__btn--cancel"
            onClick={cancelpopup}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="backdrop" onClick={cancelpopup}></div>
    </>
  );
}

export default Popup;
