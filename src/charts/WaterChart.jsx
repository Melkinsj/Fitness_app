import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Consumed", value: 2.4 },
  { name: "Remaining", value: 0.6 },
];

const COLORS = [
  "#2563eb",
  "#dbeafe",
];

export default function WaterChart() {
  return (
    <div className="chart-card">
      <h2>💧 Water Intake</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}