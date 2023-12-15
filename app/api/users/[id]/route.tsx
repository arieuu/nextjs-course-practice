import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
    params: { id: string }
}

// ROUTE TO GET SPECIFIC USER

export async function GET(request: NextRequest, { params }: Props) {

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!user) {
        return NextResponse.json({ error: "user not found"})

    } 

    return NextResponse.json(user)
}

// ROUTE TO EDIT USER

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json()

    if(!body.name) {
        return NextResponse.json({ error: "name is required" }, { status: 400});
    }

    if(parseInt(params.id) > 10) {
        return NextResponse.json({ error: "User does not exist"}, { status: 404})
    }

    return NextResponse.json({ id: 1, "name": body.name })
}