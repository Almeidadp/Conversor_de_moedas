function exibirConversor() {
    document.getElementById("conversor").style.display = "block";
}

async function converter() {
    const valor = document.getElementById("valor").value;
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;

    if (!valor) {
        alert("Digite um valor!");
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${de}`);
        const data = await response.json();
        
        const taxa = data.rates[para];
        const convertido = valor * taxa;
        
        // Formatando no padrão brasileiro (1.000.000,00)
        const formatado = convertido.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        document.getElementById("resultado").innerText = `Resultado: ${formatado} ${para}`;
    } catch (error) {
        document.getElementById("resultado").innerText = "Erro ao obter taxas de câmbio.";
        console.error(error);
    }
}
