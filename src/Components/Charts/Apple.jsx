import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Reusable PieChart component
const PieChart = ({ title, labels, dataValues, backgroundColors, borderColors }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${title} Leaf Conditions`,
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
      <h2 className='uinck_heading'>{title} Leaf Disease Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

// Reusable BarChart component
const BarChart = ({ title, labels, dataValues, backgroundColors, borderColors }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${title} Leaf Conditions`,
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
      <h2 className='uinck_heading'>{title} Leaf Disease Distribution</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

// Main component to display all charts
const PlantDiseases = () => {
  // Data for different plants
  const appleData = {
    labels: ['Healthy', 'Apple Scab', 'Black Rot', 'Cedar Apple Rust'],
    dataValues: [800, 200, 150, 100],
    backgroundColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
    borderColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
  };

  const grapeData = {
    labels: ['Healthy', 'Esca (Black Measles)', 'Black Rot', 'Leaf Blight'],
    dataValues: [600, 100, 150, 80],
    backgroundColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
    borderColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
  };

  const potatoData = {
    labels: ['Healthy', 'Early Blight', 'Late Blight'],
    dataValues: [900, 250, 100],
    backgroundColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
    ],
    borderColors: [
      'rgba(102, 179, 255, 1)',
      'rgba(153, 255, 153, 1)',
      'rgba(255, 204, 153, 1)',
    ],
  };

  const tomatoData = {
    labels: ['Healthy', 'Bacterial Spot', 'Late Blight', 'Leaf Mold'],
    dataValues: [700, 120, 180, 100],
    backgroundColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
    borderColors: [
      'rgba(102, 179, 255)',
      'rgba(153, 255, 153)',
      'rgba(255, 204, 153)',
      'rgba(255, 102, 102)',
    ],
  };

  return (
    <div>
      <br />
      <PieChart title="Apple" {...appleData} />
      <br /><br /><br /><hr />
      {/* Display Grape data in a Bar Chart */}
       <div className='Barchart'>
       <BarChart title="Grape" {...grapeData} />
       </div>
      <br /><br /><br /><hr />
      <PieChart title="Potato" {...potatoData} />
      <br /><br /><br /><hr />
      <PieChart title="Tomato" {...tomatoData} />
      <br /><br /><hr /><br />
    </div>
  );
};

export default PlantDiseases;
