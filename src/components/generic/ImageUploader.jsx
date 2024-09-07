import { useState, useRef } from "react";
import { useFieldArray } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function ImageUploader({
  id,
  label,
  register,
  control,
  errors,
  maxImagesUpload = 15,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: id,
  });

  const [previews, setPreviews] = useState([]);

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (fields.length + files.length > maxImagesUpload) {
      toast.error(`You can only upload up to ${maxImagesUpload} images`, {
        autoClose: 2000,
      });
      return;
    }

    if (files.length > 0) {
      // Update the previews for the uploaded images
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);

      // Append each file to the field array and manually set the value using setValue
      files.forEach((file) => {
        const newField = { file };
        append(newField);
      });
    }
  };

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = (index) => {
    remove(index);

    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        {label && (
          <label htmlFor={id} className="block font-bold">
            {label}
          </label>
        )}
        <button type="button" onClick={handleAddClick}>
          + Add Image
        </button>
      </div>

      <input
        id={id}
        className="hidden"
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative w-[180px] h-[210px] ">
            <img
              src={previews[index]}
              alt={`Uploaded preview ${index + 1}`}
              className="w-full h-full object-cover rounded-md border border-darkGray"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-danger p-1 rounded text-l"
            >
              <FontAwesomeIcon
                icon={faTrash}
                className="fa-fw w-full cursor-pointer"
              />
            </button>
            <input type="hidden" {...register(`${id}.${index}.file`)} />
          </div>
        ))}
      </div>

      {errors[id]?.message && (
        <p className="error text-sm">{errors[id]?.message}</p>
      )}

      {previews.length === 0 && (
        <h2 className="my-4 text-secondary text-center">
          NO images uploaded yet.
        </h2>
      )}

      <ToastContainer />
    </div>
  );
}
