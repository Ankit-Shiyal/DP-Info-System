import { NextResponse } from 'next/server';
import { knowledgeBase } from '@/lib/knowledgeBase';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const lowerMessage = message.toLowerCase();

    // Find the best matching response
    let bestMatch = null;
    let maxMatches = 0;

    for (const entry of knowledgeBase) {
      let matches = 0;
      for (const keyword of entry.keywords) {
        if (lowerMessage.includes(keyword)) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = entry;
      }
    }

    if (bestMatch) {
      return NextResponse.json({ response: bestMatch.response });
    } else {
      return NextResponse.json({ 
        response: "I'm not exactly sure about that. Our sales and support team would be happy to help though! You can switch to the 'Contact Sales' tab to send them a direct message." 
      });
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
