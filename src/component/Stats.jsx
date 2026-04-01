const Stats = () => {
  return (
    <div className="grid grid-cols-3 text-center text-white bg-linear-to-r from-purple-600 to-pink-500 py-6">
      <div>
        <h2 className="text-2xl font-bold">50K+</h2>
        <p>Active Users</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">200+</h2>
        <p>Premium Tools</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">4.9</h2>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Stats;