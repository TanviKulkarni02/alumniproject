

import React from "react";

function SearchUI({ searchData, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-300 to-lavender-200 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-purple-700">
          Search Alumni
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={searchData.firstName}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition shadow-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={searchData.lastName}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={searchData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition shadow-sm"
            />
          </div>

          {/* Passing Year */}
          <div>
            <label
              htmlFor="passingYear"
              className="block text-sm font-medium text-gray-700"
            >
              Passing Year
            </label>
            <input
              type="number"
              name="passingYear"
              id="passingYear"
              placeholder="Enter passing year"
              value={searchData.passingYear}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchUI;



















// import React from "react";

// function SearchUI({ searchData, handleChange, handleSubmit }) {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-200 px-4">
//       <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
//           Search Alumni
//         </h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           {/* First Name */}
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
//               First Name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter first name"
//               value={searchData.firstName}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               placeholder="Enter last name"
//               value={searchData.lastName}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter email"
//               value={searchData.email}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Passing Year */}
//           <div>
//             <label htmlFor="passingYear" className="block text-sm font-medium text-gray-600">
//               Passing Year
//             </label>
//             <input
//               type="number"
//               name="passingYear"
//               id="passingYear"
//               placeholder="Enter passing year"
//               value={searchData.passingYear}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//   );
// }

// export default SearchUI;
