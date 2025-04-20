import axios from "axios";

function ImageUpload({ setIngredients }) {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/predict/", formData);
      setIngredients(res.data.ingredients);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Upload an image of ingredients:</label>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageUpload;
