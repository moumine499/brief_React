export const dashboard = () => {
    return (

   <div className="flex h-screen bg-gray-50">
  {/* Sidebar */}
  <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
    {/* Logo */}
    <div className="flex items-center px-6 py-6 border-b border-gray-200">
      <div className="w-9 h-9 bg-cyan-700 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
          </path>
        </svg>
      </div>
      <span className="ml-3 text-xl font-bold text-gray-900">Dashboard</span>
    </div>

    {/* Navigation */}
    <nav className="flex-1 px-6 py-6 space-y-3">
      {/* Main Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
        <a href="#" className="flex items-center px-3 py-3 text-sm font-medium text-white bg-cyan-700 rounded-lg">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
          </svg>
          Overview
        </a>
        <a href="#"
          className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-cyan-700 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
            </path>
          </svg>
          Analytics
        </a>
        <a href="#"
          className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-cyan-700 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
            </path>
          </svg>
          Customers
        </a>
      </div>

      {/* Management Section */}
      <div className="space-y-3 pt-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Management</h3>
        <a href="#"
          className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-cyan-700 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
          </svg>
          Products
        </a>
        <a href="#"
          className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-cyan-700 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
          Orders
        </a>
        <a href="#"
          className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 hover:text-cyan-700 hover:bg-gray-50 rounded-lg transition-colors">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
            </path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
            </path>
          </svg>
          Settings
        </a>
      </div>
    </nav>

    {/* User Profile */}
    <div className="px-6 py-6 border-t border-gray-200">
      <div className="flex items-center">
        <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500">john@example.com</p>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col overflow-hidden">
    {/* Top Bar */}
    <header className="bg-white border-b border-gray-200 px-6 py-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
    </header>

    {/* Content Area */}
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-3">Welcome to your dashboard</h2>
          <p className="text-gray-600">This is your main content area. Add your dashboard content here.</p>
        </div>
      </div>
    </main>
  </div>
</div> );
};

