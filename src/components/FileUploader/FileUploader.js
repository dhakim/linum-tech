import React, { useState } from "react";
import './FileUploader.scss';
import uploadIcon from '../../assets/images/upload-icon.svg';
import FileUploadIcon from '../../assets/images/fileupload.svg';
import closeIcon from '../../assets/images/close.svg';

const FileUpload = () => {

  const [fileName, setFileName] = useState();
  const [showFileName, setShowFileName] = useState(false);

  const onUpload = (e) => {
    console.log('file ', e.target.files[0].name);
    setFileName(e.target.files[0].name);
    setShowFileName(true);
  }
  
  return (
    <React.Fragment>
      <label className="file-upload">
        <input type="file" onChange={onUpload} name="fileUpload" />
        <img src={uploadIcon} alt="upload" />
        <h4>Drag & Drop File here</h4>
        <h5>or</h5>
        <span className="upload-btn">Browse File</span>
      </label>

      {showFileName ? (
        <div class="uploaded-file">
          <img src={FileUploadIcon} alt="file" />
          {fileName}
          <span className="close" onClick={() => setShowFileName(false)}>
            <img src={closeIcon} alt="close" width="16" />
          </span>
        </div>
      ) : ('')}
    </React.Fragment>
  )
}

export default FileUpload;