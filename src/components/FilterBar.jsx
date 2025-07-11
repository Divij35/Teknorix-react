import React from 'react';
import './styles/FilterBar.scss';

function FilterBar({ filters, setFilters, lookups }) {
  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    if (value === '') delete updated[key];
    setFilters(updated);
  };

  return (
    <div className="filter-bar">
      <input
        placeholder="Search..."
        onChange={(e) => updateFilter('search', e.target.value)}
      />

      <select onChange={(e) => updateFilter('department', e.target.value)}>
        <option value="">All Departments</option>
        {lookups.departments?.map((d) => (
          <option key={d.id} value={d.title}>{d.title}</option>
        ))}
      </select>

      <select onChange={(e) => updateFilter('location', e.target.value)}>
        <option value="">All Locations</option>
        {lookups.locations?.map((l) => (
          <option key={l.id} value={l.title}>{l.title}</option>
        ))}
      </select>

      <select onChange={(e) => updateFilter('function', e.target.value)}>
        <option value="">All Functions</option>
        {lookups.functions?.map((f) => (
          <option key={f.id} value={f.title}>{f.title}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;