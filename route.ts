import { NextRequest, NextResponse } from 'next/server';
import { getByStatus } from '@/lib/store';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'your-secret-token';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.includes(ADMIN_TOKEN)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const status = req.nextUrl.searchParams.get('status') || 'pending';
    const apps = getByStatus(status as 'pending' | 'approved' | 'rejected');

    return NextResponse.json(apps);
  } catch (error) {
    console.error('Get applications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}