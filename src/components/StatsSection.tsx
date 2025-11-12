export function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-black w-full">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Trading Performance
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Real-time statistics showing our trading performance and success metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">12,345</div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Total Trades</p>
            <p className="text-sm text-green-500">+15.2% from last month</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">78.5%</div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Win Rate</p>
            <p className="text-sm text-green-500">+3.2% from last month</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">+24.2%</div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Avg. Return</p>
            <p className="text-sm text-green-500">+0.8% from last month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
