"use client";
import { useState } from 'react';

// Add proper TypeScript interfaces
interface Definition {
  definition: string;
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface DictionaryEntry {
  word: string;
  meanings: Meaning[];
}

export default function DictionaryPage() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState<DictionaryEntry[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDefinition = async () => {
    if (!word) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Word not found');
      }
      const data: DictionaryEntry[] = await response.json();
      setDefinition(data);
    } catch (error) {
      console.error('Error:', error);
      setDefinition(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white p-6 transition-all duration-300 ml-0 md:ml-[326px]">
      <h1 className="text-3xl font-bold mb-6 text-white">Dictionary</h1>
      
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter word to define"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchDefinition()}
          className="flex-1 px-4 py-3 bg-[#232323] border border-[#ffffff14] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={fetchDefinition}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          {loading ? 'Loading...' : 'Get Definition'}
        </button>
      </div>

      {definition && (
        <div className="bg-[#232323] border border-[#ffffff14] rounded-lg p-6">
          {Array.isArray(definition) && definition[0] ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{definition[0].word}</h2>
              {definition[0].meanings?.map((meaning, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    {meaning.partOfSpeech}
                  </h3>
                  {meaning.definitions?.slice(0, 3).map((def, defIdx) => (
                    <div key={defIdx} className="mb-3 pl-4 border-l-2 border-gray-600">
                      <p className="text-gray-200 mb-1">{def.definition}</p>
                      {def.example && (
                        <p className="text-gray-400 italic text-sm">
                          {def.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-400">Word not found. Please try another word.</p>
          )}
        </div>
      )}
    </div>
  );
}


































