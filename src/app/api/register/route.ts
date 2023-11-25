import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import prisma from '@/db/client';

export async function POST(request: Request) {
    const body = await request.json();
    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                name
            }
        });
        return NextResponse.json(user);
    } catch (err) {
        console.log(err);
        return NextResponse.json(err);
    }
}
