"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const uploadPage = () => {
  const [publicId, setPublicId] = useState("");

  // Code to upload and display/render images. All using cloudinary components

  return (
    <>
      { publicId && <CldImage src={publicId} width={270} height={180} alt="upped image"/>}

      <CldUploadWidget uploadPreset="nutw9ny1"
                      // Customizing widget

                      options={{
                        sources: ["local"],
                        multiple: false,
                        maxFiles: 5,
                      }}
                      onUpload={(result, widget) => {
                        if(result.event != "success") return;

                        // If uploaded properly we get the returned public id

                        const info = result.info as CloudinaryResult;
                        setPublicId(info.public_id);
                      }}>

          { ( { open }) => <button className="btn btn-primary" onClick={() => open()}> Upload </button> }
      </CldUploadWidget>
    </>
  )
}

export default uploadPage; 