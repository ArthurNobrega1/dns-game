import Message from "../Message";

export default function Chat() {
    return (
        <div className="flex flex-col relative justify-center items-center h-full *:text-white mb-24">
            <div className="flex items-center absolute top-2 left-2 max-md:top-0 max-md:left-0">
                <div className="py-2 px-4 max-md:py-1 max-md:px-2 bg-[#a6aff2] rounded-full border-2 border-white flex items-center justify-center mr-3 max-md:mr-1">
                    <span className="text-gray-600 max-md:text-[.5rem]">J</span>
                </div>
                <div className="text-lg max-md:text-[.5rem] text-gray-200 font-bold">João Equipe de Desenvolvimento</div>
            </div>
            <div className="w-3/4 flex flex-col gap-2 h-3/4 mt-24">
                <Message author="João Equipe de Desenvolvimento" message="Eu estou precisando do acesso ao admin" align="start" />
                <Message message="Ok, irei mandar..." />
                <Message author="João Equipe de Desenvolvimento" message="Mande ela criptografada pra evitar que vaze" align="start" />
                <Message message="Certo, está em MD2" />
                <Message message="4bc67cf5dec22ea66ac330e71336d0f4" />
                <Message message="Fiz por esse site https://md5hashing.net/hash" />
                <Message message="Dá certo?" />
                <Message author="João Equipe de Desenvolvimento" message="Dá sim, valeu" align="start" />
            </div>
        </div>
    )
}
