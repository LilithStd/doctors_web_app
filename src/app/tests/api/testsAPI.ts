export const fetchDataTests = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/tests'); // Путь к вашему API
		return response.json()
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
	}
};
