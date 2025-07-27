export async function POST(req: Request) {
  try {
    const messages = await req.json();
    
    // Temporary mock response - replace with real OpenAI once credits added
    return new Response(
      JSON.stringify({ 
        mode: "chat", 
        arg: "",
        response: "Hello! This is a test response from the tools API. OpenAI integration working!"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: "Failed to process the input",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
