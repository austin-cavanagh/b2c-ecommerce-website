export default function NewCategories() {
  return (
    <div className="flex items-center justify-center space-x-24">
      <div className="flex items-start justify-center">
        <div className="flex flex-col items-end space-y-6">
          <div className="mr-10 h-48 w-48 rounded-[60px] bg-indigo-800"></div>
          <div className="mr-8 h-40 w-40 rounded-[60px] bg-indigo-600"></div>
          <div className="mr-12 h-52 w-52 rounded-[60px] bg-indigo-300"></div>
        </div>
        <div className="space-y-6">
          <div className="ml-2 h-80 w-80 rounded-[60px] bg-indigo-400"></div>
          <div className="h-64 w-64 rounded-[60px] bg-indigo-600"></div>
        </div>
      </div>
      <div className="text-5xl font-semibold">Categories</div>
    </div>
  );
}
