import { useState } from "react";
import { generateFashion } from "../api";
import "./FashionForm.css";

export default function FashionForm() {
  const [form, setForm] = useState({
    gender: "women",
    category: "",
    season: "",
    fabric: "",
    colors: "",
    style: "",
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    setLoading(true);
    setImage(null);

    try {
      const res = await generateFashion(form);

      const img = `data:image/png;base64,${res.image}`;
      setImage(img);
    } catch {
      alert("Generation failed");
    }

    setLoading(false);
  };

  return (
    <div className="generator">
      {/* FORM */}
      <div className="card">
        <h2>Design Input</h2>

        <div className="grid">
          <select name="gender" onChange={handleChange}>
            <option value="women">Women</option>
            <option value="men">Men</option>
          </select>

          <input name="category" placeholder="Outfit (kurta, saree)" onChange={handleChange} />
          <input name="season" placeholder="Season (summer)" onChange={handleChange} />
          <input name="fabric" placeholder="Fabric (silk)" onChange={handleChange} />
          <input name="colors" placeholder="Colors (red, gold)" onChange={handleChange} />
          <input name="style" placeholder="Style (realistic, runway)" onChange={handleChange} />
        </div>

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Design"}
        </button>
      </div>

      {/* IMAGE PREVIEW */}
      {loading || image ? (
        <div className="card image-card">
          {loading && <p className="loading">Designing your outfit…</p>}

          {image && <img src={image} alt="Generated Fashion" />}
        </div>
      ) : null}
    </div>
  );
}
