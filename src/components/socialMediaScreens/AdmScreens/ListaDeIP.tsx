const routesData = [
  {
    route: '/profile',
    status: 'defeito',
    IP: '142.250',
  },
  {
    route: '/admin',
    status: 'ativo',
    IP: '939.459',
  },
  {
    route: '/home',
    status: 'bloqueado',
    IP: '142.250',
  },
  {
    route: '/chat',
    status: 'defeito',
    IP: '140.014',
  },
]
interface Props {
  setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;
}

const ListaDeIP: React.FC<Props> = ({ setDisplaySecondHash }) => {
  const quantRoutes = routesData.length
  const randomIndex = Math.floor(Math.random() * quantRoutes)

  const handleIPClick = (ip: string) => {
    console.log(`IP clicked: ${ip}`);
    setDisplaySecondHash(1)
  }

  return (
    <div className='flex max-h-auto w-full'>
      <div className='flex-1 p-2'>
        <h2 className="bg-purple-700 text-white text-center py-4 font-bold text-lg w-full max-lg:text-[.5rem]">Listagem de Rotas com Problemas</h2>

        <table className='w-full bg-white border border-gray-400'>
          <thead>
            <tr className='bg-gray-200 text-left border-b border-gray-400 *:max-lg:text-[.5rem]'>
              <th className='py-2 px-2 border-r border-gray-400'>Nome da Rota</th>
              <th className='py-2 px-2 border-r border-gray-400'>Status</th>
              <th className='py-2 px-2 border-r border-gray-400'>IP</th>
            </tr>
          </thead>
          <tbody>
            {routesData.map((route, index) => {
              return (
                <tr key={index} className='border-b border-gray-400 *:max-lg:text-[.5rem]'>
                  <td className='py-2 px-2 border-r border-gray-400'>{route.route}</td>
                  <td className={`py-2 px-2 border-r border-gray-400 ${index === randomIndex ? 'uppercase font-semibold' : 'capitalize'}`}>{route.status}</td>
                  <td
                    className={`py-2 px-2 border-r border-gray-400 ${index === randomIndex ? 'cursor-pointer' : ''}`}
                    onClick={index === randomIndex ? () => handleIPClick(route.IP) : undefined}
                  >
                    {route.IP}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaDeIP;