import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users } from '@/lib/users/seed_data';


const client = await db.connect();

async function seedUsers() {
  await client.sql`DROP TABLE IF EXISTS lfb_users;`
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS lfb_users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

    const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO lfb_users (name, password)
        VALUES (${user.name}, ${hashedPassword});
      `;
    }),
  );

  return insertedUsers;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
      await seedUsers();
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
}