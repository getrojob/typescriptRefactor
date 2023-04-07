# typescriptRefactor

Uma forma de refatorar esse código é dividir as responsabilidades em funções separadas para melhorar a legibilidade e a manutenibilidade do código.

Por exemplo, podemos criar uma função para ler o arquivo JSON, outra função para converter os dados em um formato mais adequado e uma terceira função para processar os dados e gerar a saída em JSON. Além disso, podemos usar recursos do ES6, como a sintaxe de desestruturação e a função map, para tornar o código mais conciso e expressivo.

Observe que agora temos três funções separadas com responsabilidades distintas:

- readJsonFile: lê o arquivo JSON e retorna o seu conteúdo;
- convertData: converte os dados do formato original para um formato mais adequado;
- generateOutput: gera a saída em JSON a partir dos dados processados.

Também fiz algumas alterações nos tipos e na nomenclatura de algumas propriedades para deixar o código mais consistente e semântico.

Para deixar um pouco mais complexo, fiz a alteração de valores de duas propriedades utilizando a desestruturação e findIndex capturando atraves da key o value e fazendo a troca de valores e assim gerando como resultado uma nova lista.json

