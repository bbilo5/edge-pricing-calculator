import { useState } from "react";

export default function App() {
  const [budget, setBudget] = useState(1000);
  const [cpm, setCpm] = useState(20);
  const [cr1, setCr1] = useState(2);
  const [cr2, setCr2] = useState(5);

  const AOV = 100;
  const impressions = (budget / cpm) * 1000;
  const visits = impressions * (cr1 / 100);
  const sales = visits * (cr2 / 100);
  const roas = (sales * AOV) / budget;

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">📊 Input</h2>

        <div>
          <label className="block text-sm font-medium">Budget ($)</label>
          <input type="number" className="w-full mt-1 p-2 border rounded" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
        </div>

        <div>
          <label className="block text-sm font-medium">Blended CPM ($)</label>
          <input type="number" className="w-full mt-1 p-2 border rounded" value={cpm} onChange={(e) => setCpm(Number(e.target.value))} />
        </div>

        <div>
          <label className="block text-sm font-medium">Impressions to Visits CR (%)</label>
          <input type="number" className="w-full mt-1 p-2 border rounded" value={cr1} onChange={(e) => setCr1(Number(e.target.value))} />
        </div>

        <div>
          <label className="block text-sm font-medium">Visits to Orders CR (%)</label>
          <input type="number" className="w-full mt-1 p-2 border rounded" value={cr2} onChange={(e) => setCr2(Number(e.target.value))} />
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">📈 Output</h2>
        <div className="text-lg">
          <p><strong>Impressions:</strong> {Math.round(impressions).toLocaleString()}</p>
          <p><strong>Estimated Visits:</strong> {Math.round(visits).toLocaleString()}</p>
          <p><strong>Estimated Sales:</strong> {Math.round(sales).toLocaleString()}</p>
          <p><strong>ROAS:</strong> {roas.toFixed(2)}x</p>
        </div>
      </div>
    </div>
  );
}
