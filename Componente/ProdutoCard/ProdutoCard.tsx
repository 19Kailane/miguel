import { Card, CardHeader, CardTitle, CardContent } from "@/Componente/CardHeader/CardHeader "
import Image from "next/image"
import { Produto } from "@/models/interfaces"

export default function ProdutoCard(prod: produto) {
    return (
        <Card className="shadow-md hover:shadow-xl transition">
            <CardHeader>
                <CardTitle>{prod.title}</CardTitle>
            </CardHeader>

            <CardContent>

                <Image
                    src={prod.image}
                    width={200}
                    height={200}
                    alt={prod.title}
                    className="mx-auto mb-4 object-contain"
                />

                <p className="font-bold text-lg">{prod.price} €</p>

                {/* NÃO mostrar descrição nem rating */}
            </CardContent>
        </Card>
    )
}
