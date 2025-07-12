// userService.ts
import { DatabaseClient } from './db';

export interface User {
  id: string;
  name: string;
  email: string;
} 

export class UserService {
  constructor(private db: DatabaseClient) {}

  async getUserById(id: string): Promise<User | null> {
    if (!id) throw new Error("User ID is required");

    const result = await this.db.query<User>(
      "SELECT id, name, email FROM users WHERE id = $1",
      [id]
    );

    return result.rows[0] ?? null;
  }

  async createUser(user: User): Promise<void> {
    await this.db.query(
      "INSERT INTO users (id, name, email) VALUES ($1, $2, $3)",
      [user.id, user.name, user.email]
    );
  }
}
