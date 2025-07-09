import { useState } from "react";

const logo = "/Edge Logo_1 line_White.png"; // Make sure it's in /public folder

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
    <div className="min-h-screen font-[baikal] bg-white">
      {/* Top Section - Red with Logo and Title */}
      <div className="bg-[#e50C00] text-white flex flex-col justify-center items-center py-32 px-4">
        <img src={logo} alt="Havas Edge Logo" className="max-w-xs mb-6" />
        <h1 className="text-4xl font-bold text-center">Positive Proforma Estimates</h1>
      </div>

      {/* Bottom Section - Calculator Layout */}
      <div className="relative bg-white -mt-20 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:py-16">
          {/* Input Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium">Budget (6 Weeks)</label>
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

            <div className="mb-4">
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

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Impressions to Visits CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr1}
                  onChange={(e) => setCr1(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr1.toFixed(2)}%</div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Visits to Orders CR %</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded"
                  value={cr2}
                  onChange={(e) => setCr2(Number(e.target.value))}
                />
                <div className="text-sm text-gray-700 mt-1">{cr2.toFixed(2)}%</div>
              </div>
            </div>
          </div>

          {/* Output Box */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6">Estimated Results</h2>
            <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
}
