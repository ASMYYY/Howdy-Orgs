export const getSBERTOrgs = async (userId) => {
    const response = await fetch("http://0.0.0.0:8000/backend/sbert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });
  
    return await response.json();
  };
  