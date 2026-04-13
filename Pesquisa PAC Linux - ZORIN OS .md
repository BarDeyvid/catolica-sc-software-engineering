TEMPO DE APRESENTAÇÃO???????  
RECURSOS:  
IMPEDIMENTOS:   
TRELLO:

## **Navegação e arquivos**

São os comandos usados para **se movimentar entre pastas** e **manipular arquivos**.

* **Função:** permite você criar, apagar, mover e visualizar arquivos e diretórios. É como aprender a “andar” dentro do sistema.  
  * **(pwd)** → mostra o caminho da pasta atual.

***Exemplo**:* pwd/home/gabriela

* **(ls)** → lista arquivos e pastas.

***Exemplo**:* ls-l → mostra detalhes (permissões, dono, tamanho).

* **(cd)** → muda de diretório.

***Exemplo**:* cd Documentos → entra na pasta Documentos.

* **(mkdir)** → cria uma nova pasta.

***Exemplo**:* mkdir projetos → cria a pasta “projetos”.

* **(rm)** → remove arquivos/pastas.

***Exemplo**:* rm arquivo.txt → apaga o arquivo. \= Atenção: não vai para a lixeira.

* **(cp)** → copia arquivos/pastas.

***Exemplo**:* cp foto.jpg /home/gabriela/Imagens

* **(mv)** → move ou renomeia arquivos.

***Exemplo**:* mv texto.txt texto\_novo.txt → renomeia.

* **(cat)** → mostra conteúdo de arquivos.

***Exemplo**:* cat notas.txt → imprime o texto no terminal.

## **Administração do sistema**

São comandos para **controlar o funcionamento do computador**.

* **Função:** monitorar processos, desligar/reiniciar, ver uso de memória e disco, executar tarefas como administrador. É o “painel de controle” do Linux via terminal.  
* **(sudo)** → executa como administrador.

**Exemplo:** sudo apt update → atualiza pacotes.

* **(shutdown)** → desliga o sistema.

**Exemplo:** sudo shutdown now

* **(reboot)** → reinicia o sistema.

**Exemplo:** sudo reboot

* **(top)** → mostra processos ativos.

**Exemplo:** top

* **(ps aux)** → lista todos os processos.

**Exemplo:** ps aux

* **(kill)** → encerra processo pelo número (PID).

**Exemplo:** kill 1234

* **(df \-h)** → mostra o uso do disco.

**Exemplo:** df \-h

* **(du \-sh)** → mostra o tamanho de uma pasta.

**Exemplo:** du \-sh Documentos

* **(free \-h)** → mostra memória disponível.

**Exemplo:** free \-h

## **Pacotes (Zorin/Ubuntu)**

São comandos para **instalar, atualizar e remover programas**.

* **Função:** gerenciar softwares e bibliotecas. É como a “loja de aplicativos”, mas controlada pelo terminal.  
* **(apt update)** → atualiza lista de pacotes.

**Exemplo:** sudo apt update

* **(apt upgrade)** → instalar atualizações.

**Exemplo:** sudo apt upgrade

* **(apt install)** → instala programa.

**Exemplo:** sudo apt install vlc

* **(apt remove)** → remove o programa.

**Exemplo:** sudo apt remove vlc

* **(apt search)** → procura pacotes.

**Exemplo:** apt search firefox

## **Rede**

São comandos para **testar e gerenciar conexões de internet e rede local**.

* **Função:** verificar se há conexão, baixar arquivos da web, acessar outros computadores remotamente. É o “kit de ferramentas” para quem precisa lidar com internet e servidores.  
* **(ping)** → testa conexão.

**Exemplo:** ping google.com

* **(curl)** → baixa conteúdo de uma página.

**Exemplo:** curl https://example.com

* **(wget)** → baixa arquivos da internet.

**Exemplo:** wget https://example.com/arquivo.zip

* **(ip addr)** → mostra interfaces de rede.

**Exemplo:** ip addr

* **(ssh)** → conecta em outro computador via SSH.

**Exemplo:** ssh usuario@192.168.0.10

## **Usuários e permissões**

São comandos para **gerenciar contas e controlar quem pode acessar o quê**.

* **Função:** criar usuários, alterar senhas, definir permissões de leitura/escrita/execução em arquivos. É a parte de **segurança e controle de acesso** do sistema.  
  * **(whoami)** → mostra usuário atual.

**Exemplo:** whoami → gabriela

* **(adduser)** → criar novo usuário.

**Exemplo:** sudo adduser maria

* **(passwd)** → altera senha.

**Exemplo:** sudo passwd maria

* **(chmod)** → alterar permissões.

**Exemplo:** chmod 755 script.sh → dá permissão de execução.

* **(chown)** → altera dono de arquivos.

**Exemplo:** sudo chown gabriela arquivo.txt

## **Ferramentas diversas**

São comandos **extras e utilitários** que ajudam em tarefas variadas.

* **Função:** imprimir mensagens, consultar manuais, buscar texto em arquivos, compactar/descompactar, ver histórico de comandos. É como uma “caixa de ferramentas” para resolver problemas do dia a dia.  
    
  * **(echo)** → imprime texto.

**Exemplo:** Echo "Olá, Linux\!"

* **(man)** → abre manual de um comando.

**Exemplo:** man ls

* **(history)** → mostra histórico de comandos usados.

**Exemplo:** history

* **(grep)** → busca texto em arquivos.

**Exemplo:** grep "senha" config.txt

* **(find)** → procura arquivos.

**Exemplo:** find /home \-name "\*.txt"

* **(tar)** → compacta arquivos/pastas.

**Exemplo:** tar \-czf backup.tar.gz Documentos

* **(unzip)** → descompacta arquivos.

**Exemplo:** unzip arquivo.zip

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## 

## **Introdução**

- **Você já ouviu falar do Zorin OS?**

Ele é um sistema operacional baseado no Linux, criado para ser **fácil de usar, seguro e rápido**.

A ideia é simples: oferecer uma experiência parecida com o Windows ou macOS, mas com toda a liberdade e estabilidade do Linux. É perfeito para quem quer mudar sem complicação.

1. **Explicar o que é um sistema operacional**  
   * Usar comparações simples: “É como o cérebro do computador, que organiza tudo e deixa você usar programas.”  
   * Mostrar exemplos: Windows, macOS, Android, após isso deve ser introduzido o Zorin OS como “outro cérebro, mas mais leve e seguro”.

## **Principais destaques**

1**. Performance incrível**

* Roda bem até em computadores antigos.  
* Versões específicas:  
  * **Zorin OS Core** → padrão para uso geral.  
  * **Zorin OS Lite** → otimizado para PCs mais antigos.  
  * **Zorin OS Pro** → versão premium com recursos extras e suporte dedicado.

* **Mostrar a interface**  
  * Abra o Zorin OS e mostre que tem menu, ícones, barra de tarefas, algo que é bem parecido com Windows.  
  * Isso quebra o medo de ser “algo totalmente diferente”.

* **Demonstrar tarefas comuns**  
  * Navegar na internet (abrir navegador).  
  * Escrever um texto (LibreOffice).  
  * Assistir vídeos ou ouvir música.  
  * Instalar um aplicativo pela loja.  
  * **Assim a pessoa vê que tudo que ela já faz é possível.**

* **Falar sobre vantagens**  
  * Gratuito (não precisa pagar licença).  
  * Mais seguro contra vírus.  
  * Funciona bem em computadores antigos.  
  * Dá para rodar muitos programas e jogos do Windows.

* **Prática guiada**  
  * Deixe a pessoa clicar, abrir programas, mudar tema.  
  * Ensine como desligar, reiniciar, conectar Wi-Fi.  
  * Isso dá autonomia e confiança.

* **Mostrar compatibilidade com Windows**  
  * Explique que alguns programas de Windows podem rodar via Wine/Proton.  
  * Mostre exemplos simples (um joguinho ou aplicativo leve).

* **Reforçar que não é “bicho de sete cabeças”**  
  * Use frases como: “É igual ao que você já conhece, só muda o nome.”  
  * Evite jargão técnico no começo.

  ### **4\. Compatibilidade de programas**

* Vem com aplicativos básicos já prontos (navegador, editor de texto, player de música).  
* Faz a instalação de milhares de programas pela loja de software.  
* Permite rodar alguns programas do Windows com o **Wine**.

  ### **5\. Indicado para todos**

* Usuários domésticos que querem rapidez e segurança.  
* Escolas e empresas que precisam de estabilidade.  
* Pessoas que querem se livrar das limitações do Windows sem perder a faISmiliaridade.

CRIAR UM HTML PARA O GITHUB DOS COMANDOS

COMEÇAR A APRESENTAÇÃO: 

* INTRODUÇÃO \-   
* O QUE É \-   
* UTILIDADES \-   
* COMO INSTALAR \- Dayvid, Yann e Mathias.   
  * O NOSSO PESSOAL VAI ENSINAR A INSTALAR  
  * DEPOIS O PESSOAL QUE ESTIVER NA AULA VAI FAZER (pessoal de apoio)  
* COMANDOS \- 