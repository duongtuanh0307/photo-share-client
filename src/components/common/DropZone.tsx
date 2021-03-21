import React, { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  className?: string;
};

const DropZone: FC<Props> = ({ className }) => {
  const onDrop = useCallback((acceptedFile) => {
    alert(acceptedFile.size);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className={className} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DropZone;
