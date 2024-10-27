'use server';

import { sql } from '@vercel/postgres';

import { tUser } from './data_definition';


export async function fetchUsers() {
    try {
  
      const data = await sql<tUser>`SELECT * FROM lfb_users`;
    
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch user data.');
    }
  }