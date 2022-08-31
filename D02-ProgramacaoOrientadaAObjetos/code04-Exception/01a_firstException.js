try {
    throw new Error('Gerando um erro genérico!');
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}