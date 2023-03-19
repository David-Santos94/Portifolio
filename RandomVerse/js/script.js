
let dateToday = new Date();
let d = dateToday.getDate();
let m = dateToday.getMonth();
let a = dateToday.getFullYear();

switch (m){
    case 0:
        document.getElementById('today').textContent = d + ' de ' + 'Janeiro' + ' de ' + a;
        break;
    case 1:
        document.getElementById('today').textContent = d + ' de ' + 'Fevereiro' + ' de ' + a;
        break;
    case 2:
        document.getElementById('today').textContent = d + ' de ' + 'Março' + ' de ' + a;
        break;
    case 3:
        document.getElementById('today').textContent = d + ' de ' + 'Abril' + ' de ' + a;
        break;
    case 4:
        document.getElementById('today').textContent = d + ' de ' + 'Maio' + ' de ' + a;
        break;
    case 5:
        document.getElementById('today').textContent = d + ' de ' + 'Junho' + ' de ' + a;
        break;
    case 6:
        document.getElementById('today').textContent = d + ' de ' + 'Julho' + ' de ' + a;
        break;
    case 7:
        document.getElementById('today').textContent = d + ' de ' + 'Agosto' + ' de ' + a;
        break;
    case 8:
        document.getElementById('today').textContent = d + ' de ' + 'Setembro' + ' de ' + a;
        break;
    case 9:
        document.getElementById('today').textContent = d + ' de ' + 'Outubro' + ' de ' + a;
        break;
    case 10:
        document.getElementById('today').textContent = d + ' de ' + 'Novembro' + ' de ' + a;
        break;
    case 11:
        document.getElementById('today').textContent = d + ' de ' + 'Dezembro' + ' de ' + a;
        break;
}


let verso = [
    'Escondi a tua palavra no meu coração, para eu não pecar contra ti. Salmos 119:11',
    'Alegrem-se sempre. 1 Tessalonicenses 5:16',
    'O SENHOR é o meu pastor, nada me faltará. Salmos 23:1',
    'O Senhor te abençoe e te guarde... Números 6:24',
    'Celebrai com júbilo ao Senhor, todos os moradores da terra. Salmos 100:1',
    'Quem não ama não conhece a Deus, porque Deus é amor. 1 João 4:8',
    'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna. João 3:16',
    'O ódio provoca brigas, mas o amor cobre todas as ofensas. Provérbios 10:12',
    'Este é meu mandamento: Amem uns aos outros. João 15:17',
    'Ame o Senhor, seu Deus, de todo o seu coração, de toda a sua alma, de toda a sua força e de toda a sua mente e Ame o seu próximo como a si mesmo. Lucas 10:27b',
    'Filhos, obedeçam a seus pais no Senhor, porque isso é o certo a fazer. Efésios 6:1',
    'Amar a Deus significa obedecer a seus mandamentos. E seus mandamentos não são difíceis. 1 João 5:3',
    'Vocês serão meus amigos se fizerem o que eu ordeno. João 15:14',
    'Honre seu pai e sua mãe. Esse é o primeiro mandamento com promessa. Se honrar pai e mãe, tudo lhe irá bem e terá vida longa na terra. Efésios 6:2-3',
    '"Se vocês me amam, obedecerão aos meus mandamentos." João 14:15',
    'Entregue o seu caminho ao Senhor, confie nele, e o mais ele fará. Salmos 37:5',
    'Pois nada é impossível para Deus. Lucas 1:37',
    'O Senhor é quem te guarda; o Senhor é a tua sombra à tua direita. Salmos 121:5',
    'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. Hebreus 11:1',
    'Confie no Senhor e faça o bem; assim você habitará na terra e desfrutará segurança. Salmos 37:3',
    'Nunca deixem de orar. 1 Tessalonicenses 5:17',
    'Em tudo, deem graças, porque esta é a vontade de Deus para vocês em Cristo Jesus. 1 Tessalonicenses 5:18',
    'Agrade-se do Senhor, e ele satisfará os desejos do seu coração. Salmos 37:4',
    'Lâmpada para os meus pés é a tua palavra, e luz para os meus caminhos. Salmos 119:105',
    'O amigo ama em todo tempo, e na angústia nasce o irmão. Provérbios 17:17',
    'Esta é minha ordem: Seja forte e corajoso! Não tenha medo nem desanime, pois o Senhor, seu Deus, estará com você por onde você andar. Josué 1:9',
    'Sobretudo, amem-se sinceramente uns aos outros, porque o amor perdoa muitíssimos pecados. 1 Pedro 4:8',
    'Façam tudo sem queixas nem discussões, de modo que ninguém possa acusá-los. Filipenses 2:14',
    'Disse Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. João 14:6',
    'Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida. Provérbios 4:23',
    'Eis que venho sem demora; guarda o que tens, para que ninguém tome a tua coroa. Apocalipse 3:11',];

    var random = Math.floor(Math.random()*verso.length);
    document.getElementById('verse').textContent = verso[random];