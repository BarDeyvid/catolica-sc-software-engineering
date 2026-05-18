# Tutorial

1. **Glossário Básico:**

**Linux:** Linux é um sistema operacional de código aberto (open source) e gratuito, baseado no Unix, que gerencia o hardware e softwares de computadores, servidores, nuvem e dispositivos como Android. Criado por Linus Torvalds em 1991 é conhecido pela sua segurança, estabilidade e flexibilidade, sendo distribuído em versões chamadas "distros" (como Ubuntu, Fedora).

**Kernel:** O kernel é o núcleo de um sistema operacional, atuando como a camada essencial entre o hardware do computador e os softwares executados nele. Ele gerencia os recursos essenciais da máquina, como [CPU](https://tecnoblog.net/responde/o-que-e-cpu-unidade-central-de-processamento/), memória e dispositivos conectados.

**ISO:** Uma ISO Linux é um arquivo único que contém uma cópia exata de todos os dados de um CD/DVD de instalação do sistema operacional. Ela é usada para baixar, distribuir e instalar distribuições Linux via USB ou máquinas virtuais, permitindo a inicialização direta pelo sistema.

**Distro:** Uma distribuição Linux, conhecida como distro, é uma versão empacotada do sistema operacional baseada no kernel Linux, que inclui ferramentas essenciais GNU, gerenciador de pacotes, interface gráfica e softwares pré-instalados. Ela transforma o núcleo do sistema em um SO funcional e pronto para uso, definindo a "personalidade" do sistema. 

**Repositório:**  É um servidor centralizado e online que armazena coleções de pacotes de software, atualizações e bibliotecas para uma distribuição Linux. Funciona como uma loja de aplicativos.

**Virtual Machine (Vm):** É uma camada de Software que oferece um ambiente completo muito similar a uma máquina física. Com isso, cada máquina virtual pode ter seu próprio sistema operacional, bibliotecas e aplicativos.  
Ex.: “CASA e o quarto” o Windows é um quarto de brinquedos isolado onde você instala o Linux sem meter no resto da casa.

**Empresas que utilizam o SO Linux:** Google, Oracle, Meta, Samsung, Sony, Toyota, AWS, Dell, Honda, Panasonic, entre outras.

 

2. **Zorin OS**

**Zorin:** Zorin OS é uma distribuição Linux baseada em Ubuntu, projetada principalmente para usuários novos que estão acostumados com o sistema Windows. Ele oferece uma interface gráfica familiar, permitindo uma transição mais suave para o Linux. Zorin OS e disponibilizado em várias versões, a versão gratuita Zorin OS Core, versão LITE e a versão PRO. Ele é conhecido pela compatibilidade com os aplicativos Windows por ser otimizado para computadores mais antigos, permitindo algo mais acessível.  

**Utilidades do dia a dia:** O Sistema operacional Linux é utilizado em servidores, plataformas de nuvem e estruturas de TI críticas. É escolhido pela sua flexibilidade e estabilidade, e sua capacidade de personalização, oferecendo soluções de armazenamento de rede eficientes.

**Vantagens de utilizar Linux:** Código aberto e gratuito, estabilidade, segurança, variedade de distribuições, customização, flexibilidade, ferramentas de desenvolvimento e o alto desempenho.

**Primeiros comandos no Terminal Linux:** Após a instalação, os primeiros comandos ajudam o usuário a navegar e administrar o sistema pelo terminal. Alguns dos principais são: **`pwd`** (mostra a pasta atual), **`ls`** (lista arquivos e pastas), **`cd`** (entra em diretórios), **`mkdir`** (cria pastas), **`touch`**(cria arquivos vazios), **`cp`** (copia arquivos), **`mv`** (move ou renomeia), **`rm`** (remove arquivos) e **`clear`** (limpa a tela). Também é importante saber **`sudo`**, usado para executar comandos com permissões de administrador. Esses comandos são a base para o uso eficiente do Linux, especialmente em atividades de suporte, programação e administração de sistemas.

## 

3. ## **Tutorial de Instalação**

**1-** Vá ao site [https://rufus.ie/pt\_BR/](https://rufus.ie/pt_BR/) e baixe a última versão disponível do Rufus. Utilizaremos ele para criar um pen drive com a ISO do sistema, algo essencial para a instalação do sistema operacional.

**2-** Após a instalação do Rufus acesse o site oficial do Zorin OS [https://zorin.com/os/download/](https://zorin.com/os/download/), baixe a ISO nomeada “Zorin OS 18 Core”.

**3-** Agora precisaremos de um pen drive com pelo menos 8GB de armazenamento disponível. Conecte-o ao computador e inicie o Rufus pelo arquivo .exe que foi baixado no passo 1\.

**4-** Ao acessar o Rufus você irá se deparar com uma interface parecida com essa abaixo.

No campo “Device” selecione o seu pen drive. Clique em “SELECT”, procure em seu computador o arquivo ISO que baixamos no passo 2 e clique em “START”.

Quando terminar aparecerá uma mensagem escrita “READY” ou “PRONTO”.

Pronto, agora seu pendrive bootável do Zorin OS foi criado.

**5-** Após a criação do pendrive reinicie seu computador pressione a tecla “DEL”, assim você conseguirá acessar a BIOS do seu computador e verá uma tela parecida com essa abaixo:

Navegue até “Boot”, vá até “Boot Option \#1” e selecione algo como “USB Storage” ou “USB Hard Disk”. Fazendo isso, vá em “salvar e reiniciar” ou aperte F10.  

**Configurações iniciais**

**1-** Ao iniciar o computador, você verá uma tela com algumas opções. Selecione “install Zorin OS”.

## 

 **2-** Escolha o idioma “português do Brasil”. layout de teclado normalmente é o “portuguese (Brazil) \- Portuguese “Brazil, nativo”. 
 **3-** Após, marque “Instalar programas de terceiros para placas de vídeo, dispositivos Wifi e outras marcas de mídia.

 **4-** Em seguida, define que o Linux será gravado no disco selecionando “apagar disco e instalar Zorin OS". Isso apagará tudo do seu HD/SSD para deixar apenas o Zorin OS.

 **Finalização**
 **1-** selecione sua região no mapa para configurar o fuso horário.

 **2-** defina seu nome, nome do computador e senha. lembre se que essa senha será utilizada para comandos sudo no terminal.

 
 **3-** Assim que a barra de progresso terminar, o sistema pedirá para você reiniciar. o computador reiniciará e você já estará em seu novo sistema. E instalação concluída.

 
 **4-** Quando reiniciar selecione seu usuário e coloque sua senha.

 **5-** agora pode utilizar seu novo sistema operacional :)

 
 
 **Referências:**

* https://www.youtube.com/watch?v=K05CssAbQgo  
* https://www.omgubuntu.co.uk/2016/08/25-awesome-unexpected-things-powered-linux  
* https://ubuntu.com/download/desktop  
* https://www.youtube.com/watch?v=qs\_NZXmVUr0\&list=PLHz\_AreHm4dlIXleu20uwPWFOSswqLYbV\&index=3  
* https://www.linuxdescomplicado.com.br/2016/03/1-historia-do-linux-5-minutos.html  
* https://www.infowester.com/historia\_linux.php  
* [https://tecnoblog.net/responde/o-que-e-kernel/](https://tecnoblog.net/responde/o-que-e-kernel/)   
* [http://linuxfoundation.org/about/members](http://linuxfoundation.org/about/members) 

