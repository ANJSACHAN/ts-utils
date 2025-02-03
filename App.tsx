import React, { useState } from "react";
import Alert from "./src/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Alert
        message="This is an alert!"
        open={showAlert}
        color="#FF5733"
        duration={3000}
        position="top-center"
        onClose={() => setShowAlert(false)} 
      />
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => setShowAlert(true)}
      >
        Show Alert
      </button>
    </div>
  );
}

export default App;
