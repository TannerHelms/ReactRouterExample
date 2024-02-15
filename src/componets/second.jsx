import { useNavigate } from "react-router-dom";

function Second() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Second Page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Navigate back to home page
      </button>
    </div>
  );
}

export default Second;
