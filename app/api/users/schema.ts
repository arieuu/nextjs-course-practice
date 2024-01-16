import { z } from "zod";


// Our object shape

const schema = z.object({
    name: z.string().min(3),
});

export default schema;