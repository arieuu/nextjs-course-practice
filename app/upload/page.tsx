"use client";
import { CldUploadWidget } from "next-cloudinary";

const uploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="nutw9ny1">
        { ( { open }) => <button className="btn btn-primary" onClick={() => open()}> Upload </button> }
    </CldUploadWidget>
  )
}

export default uploadPage; 