const routesData = [
  {
    route: '/profile',
    status: 'Defeito',
    IP: '142.250',
  },
  {
    route: '/admin',
    status: 'Ativo',
    IP: '939.459',
  },
  {
    route: '/home',
    status: 'Bloqueado',
    IP: '142.250',
  },
  {
    route: '/chat',
    status: 'defeito',
    IP: '140.014',
  },
];
interface Props {
    setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;

}

const ListaDeIP : React.FC<Props> = ({ setDisplaySecondHash }) => {
  const handleIPClick = (ip: string) => {
    console.log(`IP clicked: ${ip}`);
    setDisplaySecondHash(1)  };

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
            {routesData.map((route, index) => (
              <tr key={index} className='border-b border-gray-400 *:max-lg:text-[.5rem]'>
                <td className='py-2 px-2 border-r border-gray-400'>{route.route}</td>
                <td className='py-2 px-2 border-r border-gray-400'>{route.status}</td>
                <td
                  className={`py-2 px-2 border-r border-gray-400 ${route.route === '/profile' ? 'cursor-pointer' : ''}`}
                  onClick={route.route === '/profile' ? () => handleIPClick(route.IP) : undefined}
                >
                  {route.IP}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaDeIP;