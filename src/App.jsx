import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png"; // <-- Public folder reference

export default function App() {
  const [budget, setBudget] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [cr1, setCr1] = useState(0);
  const [cr2, setCr2] = useState(0);

  const AOV = 100;
  const impressions = (budget / cpm) * 1000 || 0;
  const visits = impressions * (cr1 / 100) || 0;
  const sales = visits * (cr2 / 100) || 0;
  const roas = (sales * AOV) / budget || 0;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-[baikal]">
      {/* Left Side - Red Background with Logo and Title */}
      <div className="bg-[#e50C00] text-white flex flex-col justify-center items-center p-10">
        <img src={logo} alt="Havas Edge Logo" className="max-w-xs mb-6" />
        <h1 className="text-4xl font-bold text-center">Positive Proforma Estimates</h1>
      </div>

      {/* Right Side - Calculator */}
      <div className="p-6 md:p-10 space-y-6 bg-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📊 Input</h2>

          <div>
            <label className="block text-sm font-medium">Budget</label>
            <input
              type="range"
              min="20000"
              max="1000000"
              step="5000"
              className="w-full mt-1 accent-[#e50C00]"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="text-sm text-gray-700 mt-1">${budget.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-sm font-medium">Blended CPM</label>
            <input
              type="range"
              min="2"
              max="50"
              step="0.5"
              className="w-full mt-1 accent-[#e50C00]"
              value={cpm}
              onChange={(e) => setCpm(Number(e.target.value))}
            />
            <div className="text-sm text-gray-700 mt-1">${cpm.toFixed(2)}</div>
          </div>

          <div>
            <label className="block text-sm font-medium">Impressions to Visits CR</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded"
              value={cr1}
              onChange={(e) => setCr1(Number(e.target.value))}
            />
            <div className="text-sm text-gray-700 mt-1">{cr1.toFixed(2)}%</div>
          </div>

          <div>
            <label className="block text-sm font-medium">Visits to Orders CR</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded"
              value={cr2}
              onChange={(e) => setCr2(Number(e.target.value))}
            />
            <div className="text-sm text-gray-700 mt-1">{cr2.toFixed(2)}%</div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📈 Output</h2>
          <div className="grid gap-6">
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-bold">Impressions</p>
              <p className="text-3xl font-bold text-black">{Math.round(impressions).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-bold">Estimated Visits</p>
              <p className="text-3xl font-bold text-black">{Math.round(visits).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-bold">Estimated Sales</p>
              <p className="text-3xl font-bold text-black">{Math.round(sales).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-[#e50C00] uppercase font-bold">ROAS</p>
              <p className="text-3xl font-bold text-black">{roas.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
