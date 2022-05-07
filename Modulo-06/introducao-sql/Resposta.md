### **Exercício 1**
a) VARCHAR: Define uma quantidade variavel de caracteres.
   PRIMARY KEY: id que identica o item da tabela.
   NOT NULL: Não pode ficar em branco, deve ser preenchido.
   DATE: padrão data, yyyy/mm/dd

b) SHOW DATABASES: retorna o schema que esta sendo usado.
   SHOW TABLES: mostra as tabelas presentes no schema.

c) Descreve como deve ser preenchida a tabela Ator.

### **Exercicio 2**

a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
   Erro de codigo: 1062. entrada duplicada '002' para chave 'PRIMARIA'.

   Ocorreu o erro por tentar usar o mesmo id para cadastrar um atriz diferente.

c) Error Code: 1136. Column count doesn't match value count at row 1
   Código de erro: 1136. Contagem de colunas não corresponde à contagem de valor na linha 1

   Esta faltando os itens "birth_date, gender" na declaração de colunas.

d) Error Code: 1364. Field 'name' doesn't have a default value.
   Código de erro: 1364. O 'nome' de campo não tem um valor padrão.

   O nome nao foi informado, esta fora do padrão.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
   Código de erro: 1292. Valor da data incorreta: '1950' para coluna 'birth_date' na linha 1

   Falta as "" na declaração de data.:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Aline Paulino",
  315,
  "1999-11-28", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Carla Peres",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Caio Castro",
  4,
  "1980-03-31", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Maria Joana",
  1294,
  "1985-08-15", 
  "female"
);
```

### **EXERCICIO 3**
```sql
a) SELECT * from Actor WHERE gender = "female"

b)  SELECT salary from Actor WHERE name = "Tony Ramos";

c)o genero "invalid não existe", a query esta correta
SELECT * from Actor WHERE gender = "invalid";

d)SELECT id, name, salary from Actor WHERE salary >= "5000";

e)nome esta escrito errado "name é a forma correta"
SELECT id, nome from Actor WHERE id = "002";
```

### **EXERCICIO 4**
a)SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

Faz uma seleção entre tudo, onde o nome comece com A ou J e tambem tenha o salario maior que 300000.

b)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

C)SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

d)SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
AND salary BETWEEN 350000 AND 900000;

### **EXERCICIO 5**
```SQL
a)CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_data DATE NOT NULL,
    evaluation INT NOT NULL
);
a tabela foi criada onde o id e o nome sera uma string de ate 255 caracteres, sinopse sera um texto que não pode ficar em branco, avaliação esta em numeros inteiros.

b)INSERT INTO Filmes (id, name, sinopse, release_data, evaluation)
VALUES(
  "001", 
  "Se eu fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam 
  a rotina do casamento. Um dia eles são atingidos por um 
  fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);

c)INSERT INTO Filmes (id, name, sinopse, release_data, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa 
  grandes confusões. A vida dela e dos seus quatro filhos sofre
  uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha,
  anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);

d)INSERT INTO Filmes (id, name, sinopse, release_data, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho,
  que só quer saber de farras e jogatina nas boates. A vida de abusos 
  acaba por acarretar sua morte precoce.",
  "2007-11-02", 
  "8"
);

e)INSERT INTO Filmes (id, name, sinopse, release_data, evaluation)
VALUES(
  "005", 
  "Minha mãe é uma peça 1",
  "Minha Mãe É uma Peça (por vezes divulgado como Minha Mãe É uma Peça - o Filme).",
  "2012-11-02", 
  "10"
);
```
### **EXERCICIO 6**

a)SELECT id, name, evaluation from Filmes WHERE id = "001";

b)SELECT * from Filmes WHERE name = "Minha mãe é uma peça 1";

c)SELECT id, name, sinopse from Filmes WHERE evaluation > "7";

### **EXERCICIO 7**
```SQL
a) SELECT * FROM Filmes
WHERE (name LIKE "%Vida%" OR name LIKE "%vida%");

b)SELECT * FROM Filmes
WHERE (name OR sinopse LIKE "%Vida%" OR name LIKE "%vida%");

c)SELECT * FROM Filmes
WHERE release_data < "2022-05-05";

d)SELECT * FROM Filmes
WHERE release_data < "2022-05-05"
and (name OR sinopse LIKE "%Vida%"
OR name LIKE "%vida%") 
and evaluation > "7";
```

