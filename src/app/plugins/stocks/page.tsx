"use client";
import { useState } from 'react';

interface StockData {
  companyName: string;
  ticker: string;
  exchange: string;
  currentPrice: number;
  change: {
    amount: number;
    percentage: number;
  };
  open: number;
  high: number;
  low: number;
  marketCap: number;
  peRatio: number;
  dividendYield: string;
  high52Week: number;
  low52Week: number;
}

export default function StocksPage() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchStock = async () => {
    if (!symbol) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/stock?symbol=${symbol}`);
      const data = await response.json();
      setStockData(data);
    } catch (error) {
      console.error('Error:', error);
      setStockData(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white p-6 transition-all duration-300 ml-0 md:ml-[326px]">
      <h1 className="text-3xl font-bold mb-6 text-white">Stock Prices</h1>
      
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          onKeyPress={(e) => e.key === 'Enter' && fetchStock()}
          className="flex-1 px-4 py-3 bg-[#232323] border border-[#ffffff14] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={fetchStock}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          {loading ? 'Loading...' : 'Get Stock'}
        </button>
      </div>

      {stockData && (
        <div className="bg-[#232323] border border-[#ffffff14] rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{stockData.ticker}</h2>
          {stockData.companyName && (
            <p className="text-gray-300 mb-4">{stockData.companyName}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Price:</span> ${stockData.currentPrice?.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Change:</span> 
                <span className={stockData.change.amount >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {stockData.change.amount >= 0 ? '+' : ''}{stockData.change.amount?.toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Change %:</span> 
                <span className={stockData.change.percentage >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {stockData.change.percentage >= 0 ? '+' : ''}{stockData.change.percentage?.toFixed(2)}%
                </span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Open:</span> ${stockData.open?.toFixed(2)}
              </p>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">High:</span> ${stockData.high?.toFixed(2)}
              </p>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Low:</span> ${stockData.low?.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Market Cap:</span> ${(stockData.marketCap / 1000000000).toFixed(2)}B
              </p>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">P/E Ratio:</span> {stockData.peRatio?.toFixed(2)}
              </p>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">Dividend Yield:</span> {stockData.dividendYield}
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">52W High:</span> ${stockData.high52Week?.toFixed(2)}
              </p>
              <p className="text-gray-200 mb-2">
                <span className="text-green-400">52W Low:</span> ${stockData.low52Week?.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





