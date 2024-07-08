import { FaDownload } from "react-icons/fa";

const DownLoadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1hp5YSLoPiAKV4A44UBdc5o9MOKfTwEzD";

    link.download = "resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto text-center mb-10">
      <button
        onClick={handleDownload}
        className="btn btn-outline  btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        Download my CV{" "}
        <span>
          <FaDownload />
        </span>
      </button>
    </div>
  );
};

export default DownLoadButton;
