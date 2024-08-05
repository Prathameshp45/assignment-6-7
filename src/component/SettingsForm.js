// src/components/SettingsForm.js

import React, { useState } from 'react';

function SettingsForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    notifications: false,
    theme: 'light',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Settings:', formData);
    alert('Settings updated successfully!');
  };

  return (
    <form id="settings-form" onSubmit={handleSubmit}>
      <h1 id="settings-title">Settings</h1>

      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <input
            id="notifications"
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="theme">Theme:</label>
        <select
          id="theme"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button id="save-settings" type="submit">
        Save Settings
      </button>
    </form>
  );
}

export default SettingsForm;
