import { useNavigate } from "react-router-dom";

const LiveStreaming = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/live-streaming");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-[#6f2cbd] text-white rounded-lg px-7 py-3 shadow-lg hover:bg-[#5a219b] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      onClick={handleClick}>
        Join LiveSteram
      </button>
    </div>
  );
};

export default LiveStreaming;
