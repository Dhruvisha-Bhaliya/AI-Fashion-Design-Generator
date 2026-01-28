const API = import.meta.env.VITE_API_URL;

export const generateFashion = async (data) => {
  const res = await fetch(`${API}/generate-fashion`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getHistory = async () => {
  const res = await fetch(`${API}/history`);
  return res.json();
};
