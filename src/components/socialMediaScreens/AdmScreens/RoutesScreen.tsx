const routesData = [
  {
    route: '/perfil',
    status: 'Bloqueada',
    errorDetail: '403 - Acesso negado',
    lastAccess: '2024-11-01 12:00',
    errorCount: 5,
  },
  {
    route: '/admin',
    status: 'Defeito',
    errorDetail: '404 - Página não encontrada',
    lastAccess: '2024-11-01 10:30',
    errorCount: 3,
  },
  {
    route: '/home',
    status: 'Defeito',
    errorDetail: '505 - Servidor não Responde',
    lastAccess: '2024-11-01 10:30',
    errorCount: 3,
  },
];

const RouteManagement = () => {
  return (
    <div className='flex max-h-auto w-full'>
      <div className='flex-1 p-2'>
        <h2 className="bg-purple-700 text-white text-center py-4 font-bold text-lg w-full">Listagem de Rotas com Problemas</h2>
        
        <table className='w-full bg-white border border-gray-400'>
          <thead>
            <tr className='bg-gray-200 text-left border-b border-gray-400'>
              <th className='py-2 px-2 border-r border-gray-400'>Nome da Rota</th>
              <th className='py-2 px-2 border-r border-gray-400'>Status</th>
              <th className='py-2 px-2 border-r border-gray-400'>Erro Detalhado</th>
              <th className='py-2 px-2 border-r border-gray-400'>Último Acesso</th>
              <th className='py-2 px-2'>Contagem de Erros</th>
            </tr>
          </thead>
          <tbody>
            {routesData.map((route, index) => (
              <tr key={index} className='border-b border-gray-400'>
                <td className='py-2 px-2 border-r border-gray-400'>{route.route}</td>
                <td className='py-2 px-2 border-r border-gray-400'>{route.status}</td>
                <td className='py-2 px-2 border-r border-gray-400'>{route.errorDetail}</td>
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
