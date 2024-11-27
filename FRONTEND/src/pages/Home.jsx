
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-300 to-lavender-200 px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center mt-7"> {/* Increased margin top here */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700 text-center tracking-wide drop-shadow-lg">
          Alumni Portal
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/search"
          className="px-8 py-4 bg-purple-600 text-white text-xl rounded-full hover:bg-purple-700 transition shadow-md transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50"
        >
          Search Alumni
        </Link>
      </div>

      {/* Greetings Section */}
      <div className="text-center mt-20"> {/* Increased margin-top here */}
        <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 tracking-tight">
          Welcome to the Alumni Portal!
        </h5>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          Connect with fellow alumni, stay informed about events, and explore resources to grow together.
        </p>
        {/* Decorative Divider */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mt-8 mx-auto"></div>
      </div>


      {/* Footer Section */}
      <footer className="mt-20 text-center text-gray-600 text-sm">
  <p>
    © {new Date().getFullYear()} Alumni Portal. Crafted with{" "}
    <span className="text-red-500">❤</span> for our community.
  </p>
</footer>

    </div>
  );
}

export default Home;

// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-lavender-200 px-6 py-8">
//       {/* Header Section */}
//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-700 text-center tracking-wide drop-shadow-lg">
//         Alumni Portal
//       </h1>
      
//       {/* Action Buttons */}
//       <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
//         <Link
//           to="/search"
//           className="px-8 py-4 bg-purple-600 text-white text-xl rounded-full hover:bg-purple-700 transition shadow-md transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50"
//         >
//           Search Alumni
//         </Link>
        
//       </div>

//       {/* Greetings Section */}
//       <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mt-16 text-center tracking-tight">
//         Welcome to the Alumni Portal!
//       </h5>
//       <p className="text-lg sm:text-xl text-center text-gray-700 mt-4 max-w-2xl">
//         Connect with fellow alumni, stay informed about events, and explore resources to grow together.
//       </p>

//       {/* Decorative Divider */}
//       <div className="w-20 h-1 bg-purple-600 rounded-full mt-8"></div>

//       {/* Footer Section */}
//       <footer className="text-center text-gray-600 text-sm mt-auto">
//     <p>
//       © {new Date().getFullYear()} Alumni Portal. Crafted with <span className="text-red-500">❤</span> for our community.
//     </p>
//   </footer>
//     </div>
//   );
// }

// export default Home;









// // import { Link } from "react-router-dom";

// // function Home() {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-4">
// //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 text-center">Alumni Portal</h1>   
// //       <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
// //         <Link
// //           to="/search"
// //           className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
// //         >
// //           Search Alumni
// //         </Link>
// //       </div>   
// //       <h5 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mt-10 text-center"> Greetings from the Alumni Portal!  </h5>
// //       <p className="text-lg sm:text-xl text-center text-gray-600 mt-4">  Connect with peers and discover new possibilities. </p>
      
// //     </div>
// //   );
// // }

// // export default Home;
