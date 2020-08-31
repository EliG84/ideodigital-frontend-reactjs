export const getAllContacts = async () => {
  const url = 'http://localhost:3001/contacts/all';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const getTotalContacts = async () => {
  const url = 'http://localhost:3001/contacts/total';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const getSingleContact = async (id) => {
  const url = `http://localhost:3001/contacts/single/${id}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const addContact = async (contact) => {
  const url = 'http://localhost:3001/contacts/add';
  let resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  let data = await resp.json();
  return data;
};

export const deleteContact = async (id) => {
  const url = `http://localhost:3001/contacts/delete/${id}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const updateContact = async (contact) => {
  const url = 'http://localhost:3001/contacts/update';
  let resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  let data = await resp.json();
  return data;
};
