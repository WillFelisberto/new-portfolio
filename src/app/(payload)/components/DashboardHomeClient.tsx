/* eslint-disable @typescript-eslint/consistent-type-assertions */
'use client';

import React from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
} from 'chart.js';
import './dashboard.css';
import { Job } from '../payload-types';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
);

interface DashboardProps {
  jobs: Job[];
}

const STATUS = [
  'applied',
  'interviewed',
  'offer',
  'hired',
  'rejected',
  'freezed',
];

const STATUS_COLORS: Record<string, string> = {
  applied: '#36A2EB',
  interviewed: '#FFCE56',
  offer: '#4BC0C0',
  hired: '#9966FF',
  rejected: '#FF6384',
  freezed: '#FF9F40',
};

const DashboardHomeClient: React.FC<DashboardProps> = ({ jobs }) => {
  // Normalize os dados
  const statusCounts = STATUS.reduce(
    (acc, status) => {
      acc[status] = jobs.filter((job) => job.status === status).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  const applicationsByDate = jobs.reduce(
    (acc, job) => {
      const date = new Date(job.date).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const normalizedStatusCounts = STATUS.reduce(
    (acc, status) => {
      acc[status] = statusCounts[status] || 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Gráficos
  const barStatusData = {
    labels: STATUS,
    datasets: [
      {
        label: 'Jobs by Status',
        data: STATUS.map((status) => statusCounts[status]),
        backgroundColor: STATUS.map((status) => STATUS_COLORS[status]),
      },
    ],
  };

  const lineDateData = {
    labels: Object.keys(applicationsByDate).sort(),
    datasets: [
      {
        label: 'Applications Over Time',
        data: Object.values(applicationsByDate),
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.4,
      },
    ],
  };

  const radarStatusData = {
    labels: STATUS,
    datasets: [
      {
        label: 'Job Status Distribution',
        data: STATUS.map((status) => statusCounts[status]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Data</h2>
      {/* Seção de cartões */}
      <div className="dashboard-cards-container">
        {STATUS.map((status) => (
          <div
            key={status}
            style={{
              backgroundColor: STATUS_COLORS[status],
            }}
            className="dashboard-card"
          >
            <h3 className="dashboard-card-title">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </h3>
            <p className="dashboard-card-value">
              {normalizedStatusCounts[status]} Jobs
            </p>
          </div>
        ))}
      </div>

      <div className="dashboard-charts-container">
        <div className="dashboard-chart">
          <h2 className="dashboard-chart-title">Jobs by Status</h2>
          <Bar data={barStatusData} />
        </div>

        <div className="dashboard-chart">
          <h2 className="dashboard-chart-title">Applications Over Time</h2>
          <Line data={lineDateData} />
        </div>

        <div className="dashboard-chart">
          <h2 className="dashboard-chart-title">Job Status Comparison</h2>
          <Radar data={radarStatusData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeClient;
