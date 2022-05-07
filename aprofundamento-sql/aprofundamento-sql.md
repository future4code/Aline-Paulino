### **EXERCICIO**

a) ALTER TABLE Actor DROP COLUMN salary
   Altera a tabela Actor, exclui a coluna "salary".

b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
  Altera a tabela Actor, muda a coluna de nome, de "gender" para "sex", limitando a 6 caracteres.

c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
  Altera a tabela Actor, muda o nome para o mesmo, e limita a 255 caracteres.

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### **EXERCICIO 2**
a) UPDATE Actor
   SET 
   name = "Malu Mader",
   birth_date = "1980-05-01"
   WHERE id = "003";

b)UPDATE Actor
  SET name = "JULIANA PAES"
  WHERE id = "005";

  UPDATE Actor
  SET name = "Juliana Paes"
  WHERE id = "005";

c)UPDATE Actor
  SET 
  name = "Ana",
  salary = "5000",
  birth_date = "1945-05-11",
  gender = "female"
  WHERE id = "005";

### **EXERCICIO 3**

a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)DELETE FROM Actor WHERE gender = "male" and salary > "1000000";

### **EXERCICIO 4**

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### **EXERCICIO 5**

a)SELECT COUNT(*), gender
  FROM Actor
  GROUP BY gender;

  contou quantas pessoas presentes em cada grupo de "gender".

b)SELECT id, name FROM Actor ORDER BY name DESC;

c)SELECT * FROM Actor ORDER BY salary ASC;

d)SELECT * FROM Actor ORDER BY salary ASC LIMIT 4;

e)SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### **EXERCICIO 6**

a)ALTER TABLE Filmes ADD playing_limit_date DATE;

b)ALTER TABLE Filmes CHANGE evaluation evaluation FLOAT;

c)UPDATE Filmes
  SET playing_limit_date = "2022-06-06"
  WHERE id = "001";
  
UPDATE Filmes
  SET playing_limit_date = "2022-04-06"
  WHERE id = "002";

d)DELETE FROM Filmes WHERE id = "001";

  UPDATE Filmes
  SET sinopse = "atualizar"
  WHERE id = "001";

  O comando roda sem erros, porem não ocorre atualizações por que o id não existe.