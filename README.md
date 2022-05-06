# **Hands on Week #3 - La Vie**

Um grupo de psicólogos se juntaram e criaram a clínica La Vie - Saúde Mental que oferece diversos tipos de terapia.

Para ajudar nos atendimentos, eles precisam de uma API que permita criar registros de psicólogos, pacientes e prontuários. Em uma conversa com os Front-end e os PO foram decididos alguns grupos de endpoints que devem ser criados.

### **Documentação da API: [Click aqui](https://documenter.getpostman.com/view/20576311/Uyxbrq4U)**

<hr>

## **Banco de dados**
Além da criação da API, nossa equipe foi responsável pela criação do banco de dados, desde o DER até o código SQL. 

![DER](https://user-images.githubusercontent.com/83793609/167041366-52a31c5c-24b7-4efa-9b44-1cd6f5b987af.png)


<hr>

## **API**
Foram utilizados Express + Sequelize para construção do projeto e foi divido em 5 partes:
   * Pacientes
   * Psicólogos
   * Login do psicólogo
   * Atendimentos
   * Dashboard
<br>
<br>

### **Pacientes**
Foi feito um CRUD mais simples que pode ser observado da documentação

### **Psicólogos**
O CRUD feito para os psicólocos foi utilizado o pacote [bcrypt](https://www.npmjs.com/package/bcrypt) que é responsável pela encryptação da senha na hora de fazer tanto o cadastro quanto a utilização da senha!

### **Login do psicólogo** 
No login é feito uma autenticação de email e senha que tem como resposta um token gerado pelo [JWT](https://www.npmjs.com/package/jsonwebtoken) com as informações do psicólogo.

### **Atendimentos**
Para criação do atendimento é necessário uma autorização. Essa autorização é feita pelo token.

### **Dashboard**
O Dashboard vai trazer informações mais simples, como número psicólogos, pacientes, atendimentos e a media entre atendimentos e psicólogos.

<hr>
<br>

## **Desenvolvedores**
Esse projeto foi desenvolvido por [Guiherme](https://github.com/jguigo), [Anderson](https://github.com/andersonmsousa), [Talita](https://github.com/tadlana), [Victor](https://github.com/Vilandim) e [Zaida](https://github.com/ZaidaCueto).