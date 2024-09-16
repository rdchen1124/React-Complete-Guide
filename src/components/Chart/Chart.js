import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
  const dataPointsValue = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={Math.random(0, 1000000)+1}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart;