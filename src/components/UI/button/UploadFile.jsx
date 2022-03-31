import React from 'react';
import styles from './UploadFile.module.scss';

const UploadFile = (props) => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <button type={"button"} className={styles.button} onClick={handleClick}>
      <img src={process.env.PUBLIC_URL + "/assets/icons/add.svg"}></img>
      <div className={styles.buttonText}>{"Загрузить фото"}</div>
    </button>
      <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
    </>
  );
};
export default UploadFile;