import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
export default function PieChart({ dataChart }) {
  const totalUsers = dataChart.totalCustomer + dataChart.totalSeller;

  // Tính phần trăm của totalCustomer
  const percentCustomer = (
    (dataChart?.totalCustomer / totalUsers) *
    100
  ).toFixed(2);
  const percentSeller = ((dataChart?.totalSeller / totalUsers) * 100).toFixed(
    2
  );

  const data = {
    labels: ["Customer", "Seller"],
    datasets: [
      {
        data: [percentCustomer, percentSeller],
        backgroundColor: ["#3F4E4F", "#DCD7C9"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className=" border border-solid border-1 border-[#c8c2c224] rounded-lg p-4 shadow-boxAnalycs">
      <p className="mb-3 text-[1.2rem] font-semibold">Seller - Customer</p>
      <Pie data={data} />
    </div>
  );
}
PieChart.propTypes = {
  dataChart: PropTypes.string.isRequired,
};
