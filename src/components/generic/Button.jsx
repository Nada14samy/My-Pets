export default function Button({
  children,
  isLoading,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`bg-primary text-white px-4 py-2 rounded-md w-full flex justify-center items-center ${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <div className="loader"></div>}
      {children}
    </button>
  );
}
