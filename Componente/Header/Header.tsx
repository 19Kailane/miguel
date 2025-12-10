import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1>React ❤️ Next.js</h1>
            <nav className="flex gap-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
                <Link href="/info" className="hover:underline">Info</Link>
                <Link href="/projeto" className="hover:underline">Projetos</Link>
                <Link href="/tecnologia" className="hover:underline">Tecnologias</Link>
                <Link href="/produtos" className="hover:underline">Produtos</Link>
                
            </nav>
        </header>
    )
}
