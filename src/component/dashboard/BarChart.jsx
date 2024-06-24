import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJS } from "chart.js/auto";
export default function BarChart({ dataChart }) {

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const transformedData = Object.keys(dataChart).map((key, index) => {
    return {
      id: index + 1,
      month: monthNames[index],
      revenue: dataChart[key],
    };
  });
  const data = {
    labels: transformedData.map((data) => data.month),
    datasets: [
      {
        label: "Overview Revenue",
        data: transformedData.map((data) => data.revenue),
        backgroundColor: ["black"],
        borderRadius: ["3"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className=" border border-solid border-1 border-[#c8c2c224] rounded-lg p-4 shadow-boxAnalycs">
      <p className="mb-3 text-[1.2rem] font-semibold">Overview Revenue</p>
      <Bar data={data} options={options} />
    </div>
  );
}
BarChart.propTypes = {
  dataChart: PropTypes.string.isRequired,
};
