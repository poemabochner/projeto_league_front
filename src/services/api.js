const baseUrl = "http://localhost:8080/api";

export const getListaCampeoes = async (token) => {
  console.log(`token: ${token}`)
    try {
        const response = await fetch('http://localhost:8080/api/campeao/todos', {
          method: 'GET',
          headers: {
            Authorization: `${token}`, 
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          
          throw new Error('Erro ao obter os dados do campeão');
        }
    return response.json();
  } catch (error) {
    throw new Error("Erro ao obter os dados do campeão");
  }
};
