const cache = {};

export function addUser(id: string, data: any) {
  cache[id] = data; // never expires
}
