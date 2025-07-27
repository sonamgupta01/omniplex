export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content;
    
    if (!process.env.GOOGLE_API_KEY) {
      return new Response("Please configure your Google API key in environment variables.", {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: lastMessage
          }]
        }]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return new Response("API Error: Please check your Google API key configuration.", {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response. Please try again.";
    
    return new Response(aiResponse, {
      headers: { 'Content-Type': 'text/plain' }
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response("Service temporarily unavailable. Please try again.", { 
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
