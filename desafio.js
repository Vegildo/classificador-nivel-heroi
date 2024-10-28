// Criação de variáveis

const heroi = {
    name: 'Leonardo',
    xp: 1000,
    level: null,
};

const heroi2 = {
    nome: 'Laura',
    xp: 2000,
    level: null,
};

const heroi3 = {
    nome: 'Kayke',
    xp: 5000,
    level: null,
};

const heroi4 = {
    nome: 'Enzo',
    xp: 10000,
    level: null,
};


// Criação de estrutura de decisão com if else de acordo com a quantidade de XP e exibibindo a menasagem correspondente.

const nameAndLevel = (heroi) => {
    if (heroi.xp <= 1000) {
        heroi.level = 'Ferro';
    } else if (heroi.xp > 1000 && heroi.xp <= 2000) {
        heroi.level = 'Bronze';
    } else if (heroi.xp > 2000 && heroi.xp <= 5000) {
        heroi.level = 'Prata';
    } else if (heroi.xp > 5000 && heroi.xp <= 7000) {
        heroi.level = 'Ouro';
    } else if (heroi.xp > 7000 && heroi.xp <= 8000) {
        heroi.level = 'Platina';
    } else if (heroi.xp > 8000 && heroi.xp <= 9000) {
        heroi.level = 'Ascendente';
    } else if (heroi.xp > 9000 && heroi.xp <= 10000) {
        heroi.level = 'Imortal';
    } else if (heroi.xp > 10000) {
        heroi.level = 'Radiante';
    }
    return `O Herói de nome ${heroi.name} está no nível de ${heroi.level}`    
}

console.log(nameAndLevel(heroi));
console.log(nameAndLevel(heroi2));
console.log(nameAndLevel(heroi3));
console.log(nameAndLevel(heroi4));




