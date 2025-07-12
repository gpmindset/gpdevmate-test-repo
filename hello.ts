// async-issues.ts
export async function loadUserData(userId: string) {
  const db = connectToDb();
  const result = await db.query("SELECT * FROM users WHERE id = " + userId);

  if (!result) {
    console.log("No result found");
    return null;
  }

  return result.rows[0];
}

function connectToDb() {
  return {
    async query(sql: string) {
      return { rows: [{ id: 1, name: "Jane" }] };
    }
  };
}
