import FashionForm from "./components/FashionForm";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>AI Fashion Design Generator</h1>
      <p className="app-subtitle">
        Describe your outfit and let AI design it
      </p>

      <FashionForm />
    </div>
  );
}
