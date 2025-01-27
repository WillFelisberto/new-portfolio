import React from 'react';
import { Payload } from 'payload';
import DashboardHomeClient from './DashboardHomeClient';

interface Props {
  payload: Payload;
}

const DashboardHome = async ({ payload }: Props) => {
  const { docs } = await payload.find({
    collection: 'jobs',
    limit: 300,
  });

  // Passar os dados processados para o Client Component
  return <DashboardHomeClient jobs={docs} />;
};

export default DashboardHome;
