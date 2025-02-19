export const estateQueries = {
    readEstates: `
        SELECT 
          id, type, ownerId, costOfRent, pictureLocation, address
        FROM estates
      `,
  
    readEstateById: `
        SELECT 
          id, type, ownerId, costOfRent, pictureLocation, address
        FROM estates
        WHERE id = ?
      `,
  
    readEstatesByOwner: `
        SELECT 
          id, type, ownerId, costOfRent, pictureLocation, address
        FROM estates
        WHERE ownerId = ?
      `,
  
    createEstate: `
        INSERT INTO estates 
          (type, ownerId, costOfRent, pictureLocation, address) 
        VALUES (?, ?, ?, ?, ?)
      `,
  
    updateEstate: `
        UPDATE estates
        SET type = ?, ownerId = ?, costOfRent = ?, pictureLocation = ?, address = ?
        WHERE id = ?
      `,
  
    deleteEstate: `
        DELETE FROM estates
        WHERE id = ?
      `,
  };
  