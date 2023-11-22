import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import db from '@/db/client';
import { getSession } from '@/actions/auth/getSession';

export async function PUT(request: Request) {
    const body = await request.json();
    const session = await getSession();
    const { name } = body;

    try {
        const user = await db.user.update({
            data: {
                name
            },
            where: {
                email: session?.user?.email!
            }
        });
        return NextResponse.json(user);
    } catch (err) {
        console.log(err);
        return NextResponse.json(err);
    }
}

export async function GET(reqyest: Request) {
    const session = await getSession();

    if (session) {
        const user = await db.user.findUnique({
            where: {
                email: 'stefan@jakob.bauer'
            }
        });
        return NextResponse.json(user);
    } else {
        return NextResponse.json(
            {
                message: 'Please enter title'
            },
            {
                status: 401
            }
        );
    }
}
