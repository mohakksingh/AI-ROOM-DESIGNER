import { drizzle } from 'drizzle-orm/neon-http';
// import { drizzle } from "drizzle-orm/node-postgres";
// import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
