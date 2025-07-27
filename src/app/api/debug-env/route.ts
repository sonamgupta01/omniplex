export async function POST() {
  return new Response(
    JSON.stringify({
      hasOpenAIKey: !!process.env.OPENAI_API_KEY,
      keyLength: process.env.OPENAI_API_KEY?.length || 0,
      keyPrefix: process.env.OPENAI_API_KEY?.substring(0, 7) || 'none'
    }),
    { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}