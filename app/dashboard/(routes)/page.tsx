import BarChart from './components/charts/barChart';
import LineChart from './components/charts/lineChart';

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div className=" border shadow-sm rounded-md p-5">
          <BarChart />
        </div>
        <div className="border shadow-sm rounded-md p-5">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
