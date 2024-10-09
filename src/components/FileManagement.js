import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileManagement = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => ({
        name: file.name,
        createdAt: file.lastModifiedDate,
        duration: 'Unknown', // We'll need to calculate this later
        path: file.path
      }))
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - Created: {file.createdAt.toLocaleString()} - Duration: {file.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer'
};

export default FileManagement;