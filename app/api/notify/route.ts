import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        'Authorization': process.env.FONNTE_TOKEN!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target: process.env.WA_TARGET,
        message: '💖 Kezia sudah klik YA! Selamat, kamu dimaafkan 🎉',
      }),
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
