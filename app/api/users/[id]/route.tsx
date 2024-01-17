import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// Route to get objects by id

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(params.id)}});

    if(!user) {
        return NextResponse.json({ error: "User doesn't exit"}, { status: 404});
    }

    return NextResponse.json(user);
}


// Edit a specific user

interface Props {
    params: { id: string}
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    // Validate the request by checking if there's a name and an id and if the user exists by the id

    if(!validation.success) return NextResponse.json(validation.error.errors, { status: 400});

    const user = await prisma.user.findUnique({ where: { id:parseInt(params.id) }});

    if(!user) return NextResponse.json({error: "User does not exist"}, { status: 404});

    // Updating user

    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(params.id)
        },

        data: {
            name: body.name,
            email: body.email
        }
    }
    );

    return NextResponse.json(updatedUser);
}


// Delete a specific user

interface Props {
    params: { id: string}
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });
    
    if(!user) return NextResponse.json({ error: "User doesn't exist" }, { status: 400});

    // If everything goes right we delete user

    const deletedUser = await prisma.user.delete({ where: {
        id: user.id
    }});

    return NextResponse.json(deletedUser);
}