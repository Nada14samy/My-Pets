import { useState } from "react";
import ImageUploader from "../../components/generic/ImageUploader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/generic/Input";
import Button from "../../components/generic/Button";
import axios from "axios";
import upperBackground from "../../images/add-pet/upperBackground.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const schema = yup
  .object({
    images: yup
      .array()
      .of(
        yup.object().shape({
          file: yup
            .mixed()
            .required("File is required")
            .test(
              "fileType",
              "Only image files are allowed",
              (value) =>
                value &&
                ["image/jpeg", "image/png", "image/gif"].includes(value.type)
            )
            .test(
              "fileSize",
              "File size must be less than 2MB",
              (value) => value && value.size <= 2000000
            ),
        })
      )
      .min(1, "At least one image is required"),
  })
  .required();

export default function App() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  function onSubmitHandler(data) {
    console.log(data);

    setIsLoading(true);
    axios
      .post("customers/login", data)
      .then(() => {
        toast.success("Login Success", {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message, {
          autoClose: 2000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="mx-auto w-[450px] px-8 py-4">
      <div className="flex selection:mb-8 justify-between items-center mb-4">
        <a
          className="font-bold text-lg flex items-center gap-2 bg-[#b2b2b2] p-1 rounded-md text-white"
          type="button"
        >
          <FontAwesomeIcon
            icon={faBackward}
            className="fa-fw w-full cursor-pointer"
          />
          <Link to="/">Back</Link>
        </a>
        <div className="">
          <img src={upperBackground} alt="login-background" className="" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ImageUploader
          id="images"
          label="Attached Photos"
          register={register}
          errors={errors}
          control={control}
          maxImagesUpload={3}
        />

        <Input
          id="animalInfo"
          label="Write about your animal"
          register={register}
          errors={errors}
          placeholder="ex.  my animal is looking for home"
          type="textarea"
          rows={6}
        />

        <Input id="name" label="Name" register={register} errors={errors} />

        <Input id="age" label="Age" register={register} errors={errors} />

        <label>Gender</label>

        <div className="flex mt-2">
          <Input
            type="radio"
            id="male"
            name="gender"
            register={register}
            errors={errors}
            className="mr-2"
          />

          <label htmlFor="male" className="cursor-pointer font-semibold">
            Male
          </label>
        </div>

        <div className="flex">
          <Input
            type="radio"
            id="female"
            name="gender"
            register={register}
            errors={errors}
            className="mr-2"
          />
          <label htmlFor="female" className="cursor-pointer font-semibold">
            Female
          </label>
        </div>

        <div className="flex justify-center">
          <Button type="submit" isLoading={isLoading}>
            <span> Login </span>
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
