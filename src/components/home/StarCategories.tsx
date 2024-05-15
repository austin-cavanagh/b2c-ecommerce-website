export default function StarCategories() {
  return (
    <div className="flex items-center justify-center space-x-24">
      <h2 className="text-5xl font-semibold text-gray-900">Favorites</h2>

      <div className="flex items-center justify-center space-x-6">
        <div className="space-y-6">
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
        </div>
        <div className="space-y-6">
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
        </div>
        <div className="space-y-6">
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
          <div className="h-40 w-40 rounded-[40px] bg-indigo-600"></div>
        </div>
      </div>
    </div>
  );
}
