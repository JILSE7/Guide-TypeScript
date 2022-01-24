"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["acuaman"] = 0] = "acuaman";
        fuerzaHeroes[fuerzaHeroes["batman"] = 1] = "batman";
        fuerzaHeroes[fuerzaHeroes["flash"] = 5] = "flash";
        fuerzaHeroes[fuerzaHeroes["superman"] = 100] = "superman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    const fuerzaFlash = fuerzaHeroes.flash;
    const fuerzaSuperman = fuerzaHeroes.superman;
    const fuerzaBatman = fuerzaHeroes.batman;
    const fuerzaAcuaman = fuerzaHeroes.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map