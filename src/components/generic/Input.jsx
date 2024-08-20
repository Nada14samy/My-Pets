import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function App({
  id,
  label,
  type = "text",
  register,
  errors,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPasswordHandler() {
    setShowPassword((preveType) => !preveType);
  }

  if (type === "textarea") {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="block font-bold">
          {label}
        </label>
        <textarea id={id} {...register(id)} className="w-full" {...props} />
        <p className="error">{errors[id]?.message}</p>
      </div>
    );
  }

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="block font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className="w-full"
          id={id}
          {...register(id)}
          type={showPassword ? "text" : type}
          {...props}
        />
        {type === "password" && !showPassword && (
          <FontAwesomeIcon
            icon={faEye}
            className="fa-fw w-full absolute top-2 right-3 cursor-pointer text-[gray]"
            onClick={toggleShowPasswordHandler}
          />
        )}
        {type === "password" && showPassword && (
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="fa-fw w-full absolute top-2 right-3 cursor-pointer text-[gray]"
            onClick={toggleShowPasswordHandler}
          />
        )}
      </div>

      <p className="error">{errors[id]?.message}</p>
    </div>
  );
}
