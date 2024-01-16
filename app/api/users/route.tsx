import { NextRequest, NextResponse } from "next/server";


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