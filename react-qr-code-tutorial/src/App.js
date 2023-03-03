import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";

function App() {
  const URL = "https://www.augustana.edu/"
  return (
    <div className="App">
      <h1> QR Code </h1>
      <br />
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "30%", width: "30%" }}
          value={URL}
          viewBox={`0 0 256 256`}
        />
    </div>
  );
}

export default App;
