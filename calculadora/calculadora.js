
// REQUISITOS

// 1. Calculadora tendo 4 operações aritméticas básicas;
// 2. Se a soma for => 100: mostrar foto do frizza
// 3. Se a multiplicação for => 1000, mostrar foto do matheuzin
// 4. Se a subtração < 20: mostrar foto da vivian
// 5. Se a divisão = 4: mostrar foto do goku

// RESTRIÇÕES

// 1. HTML deve estar separado do JS e das CSS
// 2. As divisões serão feitas apenas com números reais inteiros


var n1 = 0;
var n2 = 0;
var soma = 0;
var sub = 0;
var multi = 0;
var divi = 0;

function calcular() {

    img_frizza.src = "";
    img_vivian.src = "";
    img_matheuzin.src = "";
    img_goku.src = "";

    n1 = Number(ipt_num1.value);
    n2 = Number(ipt_num2.value);

    soma = n1 + n2;
    sub = n1 - n2;
    multi = n1 * n2;
    divi = n1 / n2;

    resultado.innerHTML = 
    `<br>Resultado das operações:
    <br><br>
    Soma = ${soma}<br>
    Subtração = ${sub}<br>
    Multiplicação = ${multi}<br>
    Divisão = ${Math.round(divi)}<br>`;

    if (soma >= 100) {
        document.getElementById("img_frizza").src = "https://media-exp1.licdn.com/dms/image/C4D03AQGMWoXbGWAxJw/profile-displayphoto-shrink_100_100/0/1637609695130?e=1653523200&v=beta&t=OYofBVnidoNpAceyHVK3hGtsutoZcKx6EnIcFcuOCvM";
    }

    if (sub <= 20 & sub != 0) {
        document.getElementById("img_vivian").src = "https://media-exp1.licdn.com/dms/image/C4D03AQGwhs5CKXttPg/profile-displayphoto-shrink_100_100/0/1637609801117?e=1653523200&v=beta&t=rNEyCtgCxTG7FJxiLVQdcMErVZhnT-EkwtGJbN_eSmE";
    }

    if (multi >= 1000) {
        document.getElementById("img_matheuzin").src = "https://media-exp1.licdn.com/dms/image/C4E03AQHELieXFmh4ZQ/profile-displayphoto-shrink_200_200/0/1647297245689?e=1653523200&v=beta&t=JXF0wE6paRtn5sAGmkeyvCXeZek2llOGlRcabth0jcA";
    }

    if (divi == 4) {
        document.getElementById("img_goku").src = "https://c8.alamy.com/comp/RN87W0/goku-dragon-ball-z-1996-RN87W0.jpg";
    }
}