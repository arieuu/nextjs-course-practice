import { NextRequest, NextResponse } from "next/server";

// Route to get objects by id

interface Props {
    params: { id: number }
}

export function GET(request: NextRequest, { params }: Props) {

    if(params.id > 10) {
        return NextResponse.json({ error: "User doesn't exit"}, { status: 404});
    }

    return NextResponse.json({ id: 1, name: "ariel"});
}