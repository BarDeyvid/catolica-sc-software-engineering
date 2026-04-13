export default function Docs() {
    return  (
        <>
        <main className="flex flex-col p-6 gap-6">
        <h1 className="text-2xl font-bold text-center bg-gray-300 p-2 rounded-md">Documentação</h1>
        <section className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Introdução</h2>
            <p>Zorin OS é uma distribuição Linux baseada em Ubuntu, projetada principalmente para usuários novos que estão acostumados com o sistema Windows. Ele oferece uma interface gráfica familiar, permitindo uma transição mais suave para o Linux. Zorin OS e disponibilizado em várias versões, a versão gratuita Zorin OS Core, versão LITE e a versão PRO. Ele é conhecido pela compatibilidade com os aplicativos Windows por ser otimizado para computadores mais antigos, permitindo algo mais acessível.</p>
        </section>
        <section className="flex flex-col gap-4 p-4 rounded-md border-2 border-gray-300">
            <h2 className="text-xl font-semibold">Redirecionamentos</h2>
            <h3 className="text-lg font-medium w-fit ">Glossário básico</h3>
            <ul className="list-none">
                <li><a href="#linux" className="text-blue-700 font-bold hover:underline">Linux</a></li>
                <li><a href="#kernel" className="text-blue-700 font-bold hover:underline">Kernel</a></li>
                <li><a href="#iso" className="text-blue-700 font-bold hover:underline">ISO</a></li>
                <li><a href="#distro" className="text-blue-700 font-bold hover:underline">Distro</a></li>
                <li><a href="#repository" className="text-blue-700 font-bold hover:underline">Repositório</a></li>
                <li><a href="#vm" className="text-blue-700 font-bold hover:underline">Máquina virtual</a></li>
            </ul>
        </section>
        <section id="linux" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Linux</h2>
            <p>Linux é um sistema operacional de código aberto (open source) e gratuito, baseado no Unix, que gerencia o hardware e softwares de computadores, servidores, nuvem e dispositivos como Android. Criado por Linus Torvalds em 1991 é conhecido pela sua segurança, estabilidade e flexibilidade, sendo distribuído em versões chamadas "distros" (como Ubuntu, Fedora).</p>
        </section>
        <section id="kernel" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Kernel</h2>
            <p>O kernel é o núcleo de um sistema operacional, atuando como a camada essencial entre o hardware do computador e os softwares executados nele. Ele gerencia os recursos essenciais da máquina, como CPU, memória e dispositivos conectados.</p>
        </section>
        <section id="iso" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">ISO</h2>
            <p>Uma ISO Linux é um arquivo único que contém uma cópia exata de todos os dados de um CD/DVD de instalação do sistema operacional. Ela é usada para baixar, distribuir e instalar distribuições Linux via USB ou máquinas virtuais, permitindo a inicialização direta pelo sistema.</p>
        </section>
        <section id="distro" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Distro</h2>
            <p>Distro é uma abreviação de "distribuição" e se refere a uma versão específica de um sistema operacional Linux. Cada distro é composta por um kernel Linux, um conjunto de softwares e ferramentas, e uma interface gráfica personalizada. Exemplos populares incluem Ubuntu, Fedora e Zorin OS.</p>
        </section>
        <section id="repository" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Repositório</h2>
            <p>É um servidor centralizado e online que armazena coleções de pacotes de software, atualizações e bibliotecas para uma distribuição Linux. Funciona como uma loja de aplicativos.</p>
        </section>
        <section id="vm" className="border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-semibold">Máquina virtual</h2>
            <p>É uma camada de Software que oferece um ambiente completo muito similar a uma máquina física. Com isso, cada máquina virtual pode ter seu próprio sistema operacional, bibliotecas e aplicativos. Ex.: “CASA e o quarto” o Windows é um quarto de brinquedos isolado onde você instala o Linux sem meter no resto da casa.</p>
        </section>
        </main>
        </>
    )
}