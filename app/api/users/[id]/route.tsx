import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

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


// Edit a specific user

interface Props {
    params: { id: number }
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    // Validate the request by checking if there's a name and an id and if the user exists by the id

    if(!validation.success) return NextResponse.json(validation.error.errors, { status: 400});

    if(params.id > 10) return NextResponse.json({error: "User does not exist"}, { status: 404});

    return NextResponse.json({ id: params.id, name: body.name});
}


// Delete a specific user

interface Props {
    params: { id: number }
}

export async function DELETE(request: NextRequest, { params }: Props) {
    
    if(params.id > 10) return NextResponse.json({ error: "User doesn't exist" }, { status: 400});

    // If everything goes right we delete user

    return NextResponse.json({});
}