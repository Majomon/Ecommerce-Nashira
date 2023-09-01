"use client";
import React, { useState } from "react";
import { storageFirebase } from "../firebase/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NewProduct = () => {
  const [fileUpload, setFileUpload] = useState(null);

  const handleFileInputChange = (e) => {
    setFileUpload(e.target.files);
  };

  const upload = async () => {
    if (fileUpload !== null) {
      const fileref = ref(storageFirebase, `Sandalias/${fileUpload[0].name}`);
      const upBytes = await uploadBytes(fileref, fileUpload[0]);
      const downUrl = await getDownloadURL(upBytes.ref);
      console.log(downUrl);
    } else {
      alert("Elige una imagen");
    }
  };
  return (
    <div className="flex justify-center items-center my-4">
      <label
        htmlFor="file-upload"
        className="w-32 h-11 mx-4  bg-blue-500 text-white rounded-md flex items-center justify-center cursor-pointer"
      >
        Subir imagen
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileInputChange}
        className="hidden"
        accept="image/*"
      />
      {fileUpload ? (
        <div className="mt-2">Archivo seleccionado: {fileUpload[0].name}</div>
      ) : (
        <div className="mt-2">Ningún archivo seleccionado</div>
      )}
      <button
        onClick={upload}
        className="w-32 h-11 mx-4  bg-slate-400 text-white p-2 rounded-md cursor-pointer"
      >
        Subir
      </button>
    </div>
  );
};

export default NewProduct;

/* "use client";
import React, { useState } from "react";
import { storageFirebase } from "../firebase/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NewProduct = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const upload = async () => {
    //     console.log(fileUpload); 
    if (fileUpload !== null) {
    //Opcion 1
        const fileref = ref(storageFirebase, `Sandalias/${fileUpload[0].name}`);
        uploadBytes(fileref, fileUpload[0]).then((data) => {
        getDownloadURL(data.ref).then((url) => {
          console.log("Url", url);
        });
      }); 
    // Opcion 2
      const upBytes = await uploadBytes(fileref, fileUpload[0]);
      const downUrl = await getDownloadURL(upBytes.ref);
      console.log(downUrl);
    } else {
      alert("Elegi una imagen");
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFileUpload(e.target.files)}
        className="w-10/12 bg-red-500"
      />
      <label
        className="p-5 bg-slate-400 border border-l-gray-300"
        onClick={upload}
      >
        Subir imagen
      </label>
    </div>
  );
};

export default NewProduct;
 */
