import { useState } from "react";

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
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">📊 Input</h2>

        <div>
          <label className="block text-sm font-medium">Budget</label>
          <input
            type="range"
            min="20000"
            max="100000000"
            step="5000"
            className="w-full mt-1"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <div className="text-sm text-gray-700 mt-1">${budget.toLocaleString()}</div>
        </div>

        <div>
          <label className="block text-sm font-medium">Blended CPM</label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.5"
            className="w-full mt-1"
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

      <div className="bg-gray-100 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">📈 Output</h2>
        <div className="text-lg">
          <p><strong>Impressions:</strong> {Math.round(impressions).toLocaleString()}</p>
          <p><strong>Estimated Visits:</strong> {Math.round(visits).toLocaleString()}</p>
          <p><strong>Estimated Sales:</strong> {Math.round(sales).toLocaleString()}</p>
          <p><strong>ROAS:</strong> {roas.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
