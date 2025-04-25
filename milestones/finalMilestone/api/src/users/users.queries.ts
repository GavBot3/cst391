export const userQueries = {
  readUsers: `
      SELECT 
        id, firstName, lastName, email, phoneNumber, 
        status, creationDate, lastLoginDate
      FROM users
    `,

  readUserById: `
      SELECT 
        id, firstName, lastName, email, phoneNumber, 
        status, creationDate, lastLoginDate
      FROM users
      WHERE id = ?
    `,

  readUserByEmail: `
      SELECT 
        id, firstName, lastName, email, phoneNumber, 
        status, creationDate, lastLoginDate
      FROM users
      WHERE email = ?
    `,

  createUser: `
      INSERT INTO users 
        (firstName, lastName, email, password, phoneNumber, status, creationDate, lastLoginDate) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,

  updateUser: `
      UPDATE users
      SET firstName = ?, lastName = ?, email = ?, phoneNumber = ?, status = ?, lastLoginDate = ?
      WHERE id = ?
    `,

  deleteUser: `
      DELETE FROM users
      WHERE id = ?
    `,
};
