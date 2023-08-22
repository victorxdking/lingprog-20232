function exemplo() {
    let escolha = Number(document.getElementById("opcao").value);
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value); // Corrigido de nro1
    let resultado = null;

    switch (escolha) {
        case 1:
            resultado = (nro1 + nro2) / 2;
            break;
        case 2:
            resultado = Math.abs(nro1 - nro2);
            break;
        case 3:
            resultado = nro1 * nro2;
            break;
        case 4:
            if (nro2 !== 0) {
                resultado = nro1 / nro2;
            } else {
                alert("Divisão por zero não é permitida");
            }
            break;
        default:
            alert('Operação inválida');
    }

    if (resultado !== null) {
        alert(resultado);
    }
}
