import React from 'react';
import AdminRouter from './router';

export default function AdminApp({ match }) {
  return (
    <div>
      here is header
      <span>ss</span>
      <AdminRouter url={match.url} />
    </div>
  );
}