export default function SearchBar() {
    return (
        <div className="h-[16%] rounded-t-lg bg-[#202020] shadow-lg">
            <div className="flex flex-col items-center justify-center h-2/5 w-fit px-3 ml-3 rounded-t-lg bg-[#353535] text-stone-50 text-lg max-md:text-[0.5rem]">
                <p className="">Rede Social</p>
            </div>
            <div className="bg-[#353535] text-stone-50 h-3/5 flex items-center pl-3 ">
                <div className="flex items-center text-lg max-md:text-[0.5rem] h-4/6 w-fit pl-3 rounded-3xl bg-[#202020] border-2 border-transparent ease-in-out duration-300 hover:bg-[#262626] focus-within:border-blue-500">
                    <p>https://www.redesocial.com/</p>
                    <input type="text" className="h-full pl-1 max-w-16 py-3 flex-1 bg-transparent text-stone-400 focus:outline-none" />
                </div>
            </div>
        </div>
    )
}
