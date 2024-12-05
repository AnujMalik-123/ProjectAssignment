import { Table } from "@mantine/core";

interface AverageData {
  crop: string;
  avgYield: number;
  avgArea: number;
}

export const AverageTable = ({ data }: { data: AverageData[] }) => {
  const rows = data.map((row, idx) => (
    <tr key={idx}>
      <td>{row.crop}</td>
      <td>{row.avgYield}</td>
      <td>{row.avgArea}</td>
    </tr>
  ));

  return (
    <Table>
      <thead style={{ backgroundColor: "#f4f4f4", textAlign: "center" }}>
        <tr>
          <th>Crop</th>
          <th>Average Yield (Kg/Ha)</th>
          <th>Average Area (Ha)</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
