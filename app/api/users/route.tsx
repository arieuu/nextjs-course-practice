import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    const users = [
        {
            id: 1,
            name: "ariel"
        },
        {
            id: 2,
            name: "carvalho"
        }
    ]
    return NextResponse.json(users);
}

// Create a user 

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) return NextResponse.json(validation.error.errors, { status: 400})

    return NextResponse.json(body);
}