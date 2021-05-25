function Weather() {
  return (
    <div className="w-36 h-44 rounded text-gray-light bg-blue-dark mb-8  flex flex-col items-center justify-between py-4">
      <span>Tomorrow</span>
      <img src="/images/shower.png" alt="shower" className="w-12 h-12" />
      <div className="flex items-center">
        <span className="mr-4">16°C</span>
        <span className="text-gray-dark">11°C</span>
      </div>
    </div>
  );
}

export default Weather;
