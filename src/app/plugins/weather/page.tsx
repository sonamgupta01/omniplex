"use client";
import { useState } from 'react';

// Update interface to match the actual API response from route.ts
interface WeatherData {
  city: string;
  current: {
    temperature: number;
    weather: string;
    description: string;
    icon: string;
  };
  hourly: Array<{
    time: string;
    temperature: number;
    weather: string;
    icon: string;
  }>;
  daily: {
    maxTemp: number;
    minTemp: number;
  };
}

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      console.log('Weather API Response:', data); // Debug log
      setWeatherData(data);
    } catch (error) {
      console.error('Error:', error);
      setWeatherData(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white p-6 transition-all duration-300 ml-0 md:ml-[326px]">
      <h1 className="text-3xl font-bold mb-6 text-white">Weather Forecast</h1>
      
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter city name (e.g., New York)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
          className="flex-1 px-4 py-3 bg-[#232323] border border-[#ffffff14] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      {weatherData && (
        <div className="bg-[#232323] border border-[#ffffff14] rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{weatherData.city}</h2>
          
          {/* Current Weather */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.current.icon}@2x.png`}
                alt="Weather Icon"
                className="w-16 h-16"
              />
              <div>
                <p className="text-3xl font-bold text-white">{weatherData.current.temperature}°C</p>
                <p className="text-gray-300">{weatherData.current.weather}</p>
                <p className="text-gray-400 text-sm">{weatherData.current.description}</p>
              </div>
            </div>
            
            <p className="text-gray-200 mb-2">
              <span className="text-green-400">High:</span> {weatherData.daily.maxTemp}°C
              <span className="text-green-400 ml-4">Low:</span> {weatherData.daily.minTemp}°C
            </p>
          </div>

          {/* Hourly Forecast */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Hourly Forecast</h3>
            <div className="flex gap-4 overflow-x-auto">
              {weatherData.hourly.map((hour, index) => (
                <div key={index} className="flex-shrink-0 text-center bg-[#2a2a2a] rounded-lg p-3">
                  <p className="text-gray-300 text-sm mb-2">{hour.time}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                    alt="Weather Icon"
                    className="w-8 h-8 mx-auto mb-2"
                  />
                  <p className="text-white font-semibold">{hour.temperature}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





