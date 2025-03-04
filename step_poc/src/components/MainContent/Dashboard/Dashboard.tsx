import React, { useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import StarIcon from "../../../assets/Icons/star-icon-round.svg";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { generateLayouts } from "../../../layouts/generateLayouts";
import { breakpoints, cols } from "../../../layouts/dashboardLayout";
import ReusableCard from "../../ReusableComponents/Card/CustomCard";
import ChartComponent from "../../ReusableComponents/Charts/ChartComponent";
import { useChartData } from "../../../customHooks/useChartData";
import { useGlobalAlert } from "../../../Contexts/GlobalAlertContext";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardGrid: React.FC = () => {
  const { charts, loading: isLoading, error } = useChartData();
  const layouts = generateLayouts(charts);
  const { setMessage } = useGlobalAlert();

  useEffect(() => {
    if (isLoading) {
      setMessage("Loading...");
    } else {
      setMessage("Loaded");
      // Optionally clear the message after a delay
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, setMessage]);

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        // margin={[10, 10]}
        rowHeight={35} // Adjust rowHeight as needed.
        // isDraggable={true}
        isResizable={true}
        draggableHandle=".card-header" // Only the header is draggable.
      >
        {charts.map((chart) => (
          <div key={chart.id}>
            <ReusableCard
              icon={
                <img
                  src={StarIcon}
                  alt="Dashboard Icon"
                  style={{ width: 18, height: 18 }}
                />
              }
              title={chart.title}
            >
              <ChartComponent chartData={chart.chartData} height={250} />
            </ReusableCard>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DashboardGrid;
