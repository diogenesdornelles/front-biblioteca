/**
 * Renderiza o footer
 *
 * @return {*} 
 */
function Footer(): JSX.Element {
    return (
        <footer className="text-xs md:text-xl w-full mt-auto p-2 md:p-6 backdrop-blur-sm bg-black/70">
            <div className="container mx-auto text-white flex flex-col items-center space-y-2">
                <p>&copy; 2024 Minha Biblioteca. Todos os direitos reservados.</p>
                <p>Rua dos Livros, 123, Bento Gonçalves, RS</p>
                <p>contato@minhabiblioteca.com | (54) 1234-5678</p>
                <ul className="flex space-x-10">
                    <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:underline">Termos de Uso</a></li>
                    <li><a href="#" className="hover:underline">Sobre Nós</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;