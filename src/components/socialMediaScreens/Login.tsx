import { tipAdmin, tipLoginInvalidData, tipLoginWithoutData } from "../../utils/tips";
import Button from "../Button";
import Input from "../Input";
import AdminScreen from "./AdiminScreen";

const inputs = [{ id: 'user', placeholder: 'Usuário' }, { id: 'password', placeholder: 'Senha', type: 'password' }]

interface Props {
    setContentScreen: React.Dispatch<React.SetStateAction<JSX.Element>>
    setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;

}

export default function Login({ setContentScreen, setDisplaySecondHash }: Props) {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        const user = document.getElementById('user') as HTMLInputElement
        const passoword = document.getElementById('password') as HTMLInputElement

        if (user.value === 'chefe@redesocial.com' && passoword.value === 'senhaultradificil') {
            tipAdmin()
            setContentScreen(<AdminScreen setDisplaySecondHash={setDisplaySecondHash} />)
        } else if (!user.value || !passoword.value) {
            tipLoginWithoutData()
        } else {
            tipLoginInvalidData()
        }
    }

    return (
        <div className="flex flex-col gap-5 max-md:gap-2 justify-center items-center h-full">
            <img
                src="image/logo.png"
                className="h-16 max-md:h-5"
                alt="Logo Rede Social"
            />
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-4/6 max-w-[40rem] text-white">
                {inputs.map((input, index) => {
                    return <Input key={index} id={input.id} placeholder={input.placeholder} type={input.type} />
                })}
                <Button name="Entrar" />
            </form>
        </div>
    )
}
