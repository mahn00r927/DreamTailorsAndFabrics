import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function MeasurementForm() {
  const [unit, setUnit] = useState("cm");
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    shoulder: "",
    sleeve: "",
    jacketLength: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setUnit(unit === "cm" ? "inch" : "cm");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    // Validation
    if (form.waist && form.chest && Number(form.waist) > Number(form.chest)) {
      setMessage({ type: "error", text: "⚠️ Waist cannot be greater than Chest!" });
      return;
    }

    if (!form.name) {
      setMessage({ type: "error", text: "⚠️ Please provide a profile name!" });
      return;
    }

    // Save Profile
    const newProfile = { ...form, unit };
    setProfiles([...profiles, newProfile]);

    setMessage({ type: "success", text: "✅ Measurement profile saved!" });

    // Reset form
    setForm({
      name: "",
      height: "",
      weight: "",
      chest: "",
      waist: "",
      shoulder: "",
      sleeve: "",
      jacketLength: "",
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
              required
            />
          </div>

          {/* Global */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Height ({unit})
              </label>
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter height in ${unit}`}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Enter weight"
              />
            </div>
          </div>

          {/* Garment Measurements */}
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
             Measurements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Chest ({unit})
              </label>
              <input
                type="number"
                name="chest"
                value={form.chest}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter chest in ${unit}`}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Waist ({unit})
              </label>
              <input
                type="number"
                name="waist"
                value={form.waist}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter waist in ${unit}`}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Shoulder ({unit})
              </label>
              <input
                type="number"
                name="shoulder"
                value={form.shoulder}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter shoulder in ${unit}`}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Sleeve ({unit})
              </label>
              <input
                type="number"
                name="sleeve"
                value={form.sleeve}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter sleeve in ${unit}`}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">
                Jacket Length ({unit}) (Optional)
              </label>
              <input
                type="number"
                name="jacketLength"
                value={form.jacketLength}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter jacket length in ${unit}`}
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
                  <p className="text-sm text-gray-600">
                    Height: {profile.height}{profile.unit}, Weight: {profile.weight}kg, 
                    Chest: {profile.chest}{profile.unit}, Waist: {profile.waist}{profile.unit}, 
                    Shoulder: {profile.shoulder}{profile.unit}, Sleeve: {profile.sleeve}{profile.unit}, 
                    Jacket Length: {profile.jacketLength}{profile.unit}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
