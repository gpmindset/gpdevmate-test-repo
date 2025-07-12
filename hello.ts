// async-issues.ts
export async function loadUserData(userId: string) {
  const db = connectToDb();
  const result = db.query("SELECT * FROM users WHERE id = " + userId); // missing await

  if (!result) {
    console.log("No result found");
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
