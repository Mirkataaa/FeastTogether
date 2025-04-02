export default function About () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black-800 mb-4">About Us</h1>
        <p className="text-black-600 text-lg mb-6">
          We believe food is more than just sustenance—it's a way to connect, to explore, 
          and to bring people together. Whether you're a seasoned chef or just starting out, 
          our recipe collection is here to inspire and delight.
        </p>
        <div className="shadow-lg rounded-2xl overflow-hidden bg-white p-4">
          <img
            src="https://i.etsystatic.com/9684337/r/il/5c0f82/726795730/il_570xN.726795730_km9q.jpg"
            alt="Delicious food"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    );
};