<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Tinta</title>
    <link rel="stylesheet" href="AV1.css">
    
</head>
<body>
    <header>
        <h1>Calculadora de Tinta</h1>
        <h4>Calcule aqui a quantidade de tinta necessária para sua obra</h3>
    </header>
    <main>
        <div>
            <p>Qual tipo de tinta será utilizada?</p>
            
            <ol class="listaCentro">
                <li> <abbr title="Tinta à base de água para interiores">Látex ou PVA</abbr> </li>
                <li> <abbr title="Tinta resistente para ambientes internos e externos">Acrílica</abbr> </li>
                <li> <abbr title="Proteção durável para superfícies metálicas e de madeira">Esmalte</abbr> </li>
                <li> <abbr title="Revestimento resistente e impermeável para ambientes internos e externos">Epóxi</abbr> </li>
                <li> <abbr title="Revestimento durável e de secagem lenta para superfícies variadas">Óleo</abbr> </li>
                <li> <abbr title="Proteção e acabamento transparente para madeiras e metais">Verniz</abbr> </li>
                <li> <abbr title="Acabamento resistente e sofisticado com baixo brilho">Acrílica fosca premium</abbr> </li>
                <li> <abbr title="Revestimento durável e de fácil aplicação, com base aquosa">Epóxi à base de água</abbr> </li>
            </ol>
                <p>
                    <label for="tipoTinta">Digite um número: </label><input type="number" name="entrada" id="txtTinta" class="entradaDados">  <!-- Entrada de dados -->
                    <input type="button" value="OK" name="tin" id="tin" class="botão" onclick="tinta()"> <!-- Botão -->
                    <div id="txtTipotinta" class="saidaDados">Seleção:</div>    <!-- Saída de dados -->
                </p>
        </div>
        <div>
            <h2>Cálculo de área das paredes</h2>
            <p class="atenção">É importante que todas as dimensões sejam inseridas em metro</p>
            <p>Digite a altura da parede:
                <input type="number" name="entrada" id="hParede" class="entradaDados">   <!-- Entrada de dados -->
            </p>
            <p>Digite a largura da parede:
                <input type="number" name="entrada" id="lParede" class="entradaDados">   <!-- Entrada de dados -->
                <input type="button" value="OK" name="par" id="par" class="botão" onclick="paredes()">  <!-- Botão que chama a função paredes -->
            </p>
            <p>
                <div id="txtParede" class="saidaDados">Paredes:</div>   <!-- Saída de dados -->
            </p>
        </div>
        <div>
            <h2>Cálculo de área das aberturas</h2>
            <p>Digite a altura da porta/janela:
                <input type="number" name="entrada" id="hAberturas" class="entradaDados">
            </p>
            <p>Digite a largura da porta/janela:
                <input type="number" name="entrada" id="lAberturas" class="entradaDados">
                <input type="button" value="OK" name="aberturas" id="aberturas" class="botão" onclick="aberturas()">    <!-- Botão que chama a função aberturas -->
            </p>
            <p>
                <div id="txtAbert" class="saidaDados">Aberturas:</div>  <!-- Saída de dados -->
            </p>
        </div>
        <div>
            <h2>Cálculo de tinta</h2>
            <input type="button" value="Calculadora" name="resultado" id="resultado" class="botão" onclick="calcular()">    <!-- Botão que chama a função calcular -->
        </div>
        <div id="txtCalculo2" class="saidaDados">Total de Tinta</div>
        <div> 
            <h2>Novo Cálculo</h2>
            <input type="button" value="Reiniciar" id="botão" class="botão" onclick="resetForm()">  <!-- Botão que reseta a página -->
        </div>
    </main>
    <footer>Calculadora desenvolvida por Patricia Grings</footer>
</body>
<script src="AV1.js"></script>
</html>
 
