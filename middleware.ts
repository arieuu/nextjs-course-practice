import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";


export default middleware; 

/** 
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/new-page", request.url));
}
*/

export const config = {
    // This middleware will only be executed if we hit these endpoints

    // * Zero or more parameters after the endpoint
    // + oner or more
    // ? zero or one

    matcher: [ "/users/:id*"]
}