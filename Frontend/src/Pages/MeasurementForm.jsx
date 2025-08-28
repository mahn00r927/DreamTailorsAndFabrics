import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Importing pics
import shirtLengthPic from "../assets/Pic/shirt length.png";
import waistPic from "../assets/Pic/chest waist and shoulder.png";
import chestPic from "../assets/Pic/chest.png";
import shoulderPic from "../assets/Pic/shoulder.jpeg";
import neckPic from "../assets/Pic/neck.png";
import sleevePic from "../assets/Pic/sleeve.png";
import trouserLengthPic from "../assets/Pic/trouserlength.png";
import bottomHemPic from "../assets/Pic/bottom hem.png";

export default function MeasurementForm() {
  const [unit, setUnit] = useState("cm");
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    shirtLength: "",
    waist: "",
    chest: "",
    shoulder: "",
    neck: "",
    sleeve: "",
    trouserLength: "",
    bottomHem: "",
  });
  const [message, setMessage] = useState(null);
  const [uploadedPic, setUploadedPic] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setUnit(unit === "cm" ? "inch" : "cm");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    // if user uploaded pic directly, just save it
    if (uploadedPic) {
      const newProfile = { name: form.name || "Uploaded Pic Profile", uploadedPic };
      setProfiles([...profiles, newProfile]);
      setMessage({ type: "success", text: "✅ Profile saved with uploaded picture!" });
      setUploadedPic(null);
      setForm({
        name: "",
        shirtLength: "",
        waist: "",
        chest: "",
        shoulder: "",
        neck: "",
        sleeve: "",
        trouserLength: "",
        bottomHem: "",
      });
      return;
    }

    if (form.waist && form.chest && Number(form.waist) > Number(form.chest)) {
      setMessage({
        type: "error",
        text: "⚠️ Waist cannot be greater than Chest!",
      });
      return;
    }

    if (!form.name) {
      setMessage({ type: "error", text: "⚠️ Please provide a profile name!" });
      return;
    }

    const newProfile = { ...form, unit };
    setProfiles([...profiles, newProfile]);

    setMessage({ type: "success", text: "✅ Measurement profile saved!" });

    setForm({
      name: "",
      shirtLength: "",
      waist: "",
      chest: "",
      shoulder: "",
      neck: "",
      sleeve: "",
      trouserLength: "",
      bottomHem: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Measurement Form
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={handleToggle}
            className="px-6 py-2 rounded-full bg-orange-600 text-white text-sm shadow-md hover:bg-orange-500 transition"
          >
            Switch to {unit === "cm" ? "Inch" : "CM"}
          </button>
        </div>

        {/* Validation Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
              message.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message.type === "error" ? (
              <AlertCircle size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* File Upload Option */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
             Upload Measurement Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full border p-2 rounded-lg"
          />
          {uploadedPic && (
            <div className="mt-3">
              <p className="text-sm text-gray-600">Preview:</p>
              <img
                src={uploadedPic}
                alt="Uploaded Measurement"
                className="w-40 h-auto mt-2 border rounded-lg shadow"
              />
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Profile Name */}
          <div>
            <label className="block text-gray-700 font-medium">
              Profile Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter profile name"
            />
          </div>

          {/* Measurements */}
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Measurements (Optional if you upload pic)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shirt Length */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={shirtLengthPic} alt="Shirt Length" className="w-12 h-12" />
                Shirt Length ({unit})
              </label>
              <input
                type="number"
                name="shirtLength"
                value={form.shirtLength}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter shirt length in ${unit}`}
              />
            </div>

            {/* Waist */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={waistPic} alt="Waist" className="w-12 h-12" />
                Waist ({unit})
              </label>
              <input
                type="number"
                name="waist"
                value={form.waist}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter waist in ${unit}`}
              />
            </div>

            {/* Chest */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={chestPic} alt="Chest" className="w-12 h-12" />
                Chest ({unit})
              </label>
              <input
                type="number"
                name="chest"
                value={form.chest}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter chest in ${unit}`}
              />
            </div>

            {/* Shoulder */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={shoulderPic} alt="Shoulder" className="w-12 h-12" />
                Shoulder Width ({unit})
              </label>
              <input
                type="number"
                name="shoulder"
                value={form.shoulder}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter shoulder width in ${unit}`}
              />
            </div>

            {/* Neck */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={neckPic} alt="Neck" className="w-12 h-12" />
                Neck Circumference ({unit})
              </label>
              <input
                type="number"
                name="neck"
                value={form.neck}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter neck in ${unit}`}
              />
            </div>

            {/* Sleeve */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={sleevePic} alt="Sleeve" className="w-12 h-12" />
                Sleeve Length ({unit})
              </label>
              <input
                type="number"
                name="sleeve"
                value={form.sleeve}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter sleeve length in ${unit}`}
              />
            </div>

            {/* Trouser Length */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={trouserLengthPic} alt="Trouser Length" className="w-12 h-12" />
                Trouser Length ({unit})
              </label>
              <input
                type="number"
                name="trouserLength"
                value={form.trouserLength}
                onChange={handleChange}
                className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter trouser length in ${unit}`}
              />
            </div>

            {/* Bottom Hem */}
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-2">
                <img src={bottomHemPic} alt="Bottom Hem" className="w-12 h-12" />
                Bottom Hem ({unit})
              </label>
              <input
                type="number"
                name="bottomHem"
                value={form.bottomHem}
                onChange={handleChange}
                className=" mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter bottom hem in ${unit}`}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-500 transition mt-4"
          >
            Save Profile
          </button>
        </form>

        {/* Saved Profiles */}
        {profiles.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Saved Profiles
            </h3>
            <ul className="space-y-3">
              {profiles.map((profile, idx) => (
                <li
                  key={idx}
                  className="p-4 border rounded-lg bg-gray-50 shadow-sm"
                >
                  <p className="font-medium text-gray-800">{profile.name}</p>
                  {profile.uploadedPic ? (
                    <img
                      src={profile.uploadedPic}
                      alt="Uploaded Measurement"
                      className="w-40 h-auto mt-2 border rounded-lg shadow"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">
                      Shirt: {profile.shirtLength}
                      {profile.unit}, Waist: {profile.waist}
                      {profile.unit}, Chest: {profile.chest}
                      {profile.unit}, Shoulder: {profile.shoulder}
                      {profile.unit}, Neck: {profile.neck}
                      {profile.unit}, Sleeve: {profile.sleeve}
                      {profile.unit}, Trouser: {profile.trouserLength}
                      {profile.unit}, Bottom Hem: {profile.bottomHem}
                      {profile.unit}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
