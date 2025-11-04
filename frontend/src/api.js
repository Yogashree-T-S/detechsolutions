const BASE_URL = process.env.REACT_APP_API_URL || 'https://detechsolutions-beta.vercel.app';

export async function fetchServices() {
  const res = await fetch(`${BASE_URL}/api/services`);
  return res.json();
}

export async function fetchProjects() {
  const res = await fetch(`${BASE_URL}/api/projects`);
  return res.json();
}

export async function postContact(data) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}
