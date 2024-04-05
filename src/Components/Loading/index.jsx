export default function LoadingCard() {
  return (
    <div className="bg-white w-56 h-60 rounded-lg animate-pulse">
      <div className="h-4/5 bg-gray-200 rounded-lg"></div>
      <div className="h-16 flex flex-col justify-between p-4">
        <div className="bg-gray-200 h-4 w-1/2 rounded-full"></div>
        <div className="bg-gray-200 h-4 w-3/4 rounded-full"></div>
      </div>
    </div>
  );
}
