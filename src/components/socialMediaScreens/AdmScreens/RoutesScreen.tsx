const routesData = [
  {
    route: '/profile',
    status: 'Defeito',
    lastAccess: '2024-11-01 12:00',
    errorCount: 5,
  },
  {
    route: '/admin',
    status: 'Ativo',
    lastAccess: '2024-11-01 10:30',
    errorCount: 3,
  },
  {
    route: '/home',
    status: 'Bloqueado',
    lastAccess: '2024-11-01 10:30',
    errorCount: 3,
  },
  {
    route: '/chat',
    status: 'Defeito',
    lastAccess: '2024-11-01 11:30',
    errorCount: 30,
  },
];

const RouteManagement = () => {
  return (
    <div className='flex max-h-auto w-full'>
      <div className='flex-1 p-2 max-lg:p-2'>
        <h2 className="bg-purple-700 text-white text-center py-4 max-lg:py-1 font-bold text-lg w-full max-lg:text-[.5rem]">Listagem de Rotas com Problemas</h2>
        
        <table className='w-full bg-white border border-gray-400'>
          <thead>
            <tr className='bg-gray-200 text-left border-b border-gray-400 *:max-lg:text-[.5rem]'>
              <th className='py-2 px-2 border-r border-gray-400'>Nome da Rota</th>
              <th className='py-2 px-2 border-r border-gray-400'>Status</th>
              <th className='py-2 px-2 border-r border-gray-400'>Último Acesso</th>
              <th className='py-2 px-2'>Contagem de Erros</th>
            </tr>
          </thead>
          <tbody>
            {routesData.map((route, index) => (
              <tr key={index} className='border-b border-gray-400 max-lg:text-[.5rem]'>
                <td className='py-2 px-2 border-r border-gray-400'>{route.route}</td>
                <td className='py-2 px-2 border-r border-gray-400'>{route.status}</td>
                <td className='py-2 px-2 border-r border-gray-400'>{route.lastAccess}</td>
                <td className='py-2 px-2'>{route.errorCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteManagement;
