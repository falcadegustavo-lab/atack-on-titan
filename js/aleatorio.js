const nomes = ["Eren", "Mikasa", "Armin", "Levi", "Hange", "Jean", "Sasha"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
