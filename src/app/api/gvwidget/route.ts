import { NextResponse } from 'next/server';

// Configuration - Add these to your .env.local file
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n.saarthigreentech.com/webhook/fleet-impact';
const N8N_WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET || 'Saarthi@2025';

export const dynamic = 'force-dynamic';

interface N8NFleetData {
  reportMonth: string;
  vehicles: Array<{
    name: string;
    id: string;
    distance_km: string;
    diesel_used: string;
    current_fuel_avg: string;
    baseline_fuel_avg: string;
    fuel_improvement_pct: string;
    fuel_saved_liters: string;
    cost_saved_rs: string;
    co2_saved_kg: string;
    engine_hours: string;
  }>;
  totals: {
    total_distance: string;
    total_fuel_saved: string;
    total_cost_saved: string;
    total_co2_saved: string;
  };
  fuelCostPerLiter: number;
  generatedAt: string;
}

interface TransformedCO2Data {
  totalCO2SavedKg: number;
  totalFuelSavedLiters: number;
  totalDistanceKm: number;
  treesEquivalent: number;
  carsOffRoad: number;
  lastUpdated: string;
}

export async function GET(request: Request) {
  try {
    // Validate configuration
    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        { error: 'N8N webhook URL not configured' },
        { status: 500 }
      );
    }

    // Call n8n webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(N8N_WEBHOOK_SECRET && { 'Authorization': `Bearer ${N8N_WEBHOOK_SECRET}` }),
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`N8N webhook returned status ${response.status}`);
    }

    const fleetData: N8NFleetData = await response.json();

    // Transform the data for the widget
    const totalCO2SavedKg = parseFloat(fleetData.totals.total_co2_saved);
    const totalFuelSavedLiters = parseFloat(fleetData.totals.total_fuel_saved);
    const totalDistanceKm = parseFloat(fleetData.totals.total_distance);

    // Calculate trees equivalent
    // 1 tree absorbs approximately 21 kg of CO2 per year
    const treesEquivalent = totalCO2SavedKg / 21;

    // Calculate cars off road equivalent
    // Average car emits ~4.6 metric tons (4600 kg) of CO2 per year
    const carsOffRoad = totalCO2SavedKg / 4600;

    const transformedData: TransformedCO2Data = {
      totalCO2SavedKg: Math.round(totalCO2SavedKg * 100) / 100,
      totalFuelSavedLiters: Math.round(totalFuelSavedLiters * 100) / 100,
      totalDistanceKm: Math.round(totalDistanceKm * 100) / 100,
      treesEquivalent: Math.round(treesEquivalent * 10) / 10,
      carsOffRoad: Math.round(carsOffRoad * 10) / 10,
      lastUpdated: fleetData.generatedAt || new Date().toISOString(),
    };

    // Validate the transformed data
    if (
      typeof transformedData.totalCO2SavedKg !== 'number' ||
      typeof transformedData.totalFuelSavedLiters !== 'number' ||
      typeof transformedData.totalDistanceKm !== 'number'
    ) {
      throw new Error('Invalid data structure from n8n webhook');
    }

    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error fetching CO2 data:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch CO2 data',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Optional: POST endpoint for manual refresh triggers
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Verify request is from authorized source
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${N8N_WEBHOOK_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('Manual CO2 data update received:', body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}