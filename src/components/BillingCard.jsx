function BillingCard(props) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">

      {/* Top section */}
      <div className="flex justify-between items-start">

        {/* Customer information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            {props.name}
          </h2>

          <div className="space-y-2 text-sm">

            <p>
              <span className="text-gray-400 mr-3">
                Company Name:
              </span>

              <span className="text-gray-700 font-medium">
                {props.company}
              </span>
            </p>

            <p>
              <span className="text-gray-400 mr-3">
                Email Address:
              </span>

              <span className="text-gray-700 font-medium">
                {props.email}
              </span>
            </p>

            <p>
              <span className="text-gray-400 mr-3">
                VAT Number:
              </span>

              <span className="text-gray-700 font-medium">
                {props.vat}
              </span>
            </p>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-8">

          <button className="text-red-600 font-semibold text-sm hover:text-red-800">
            ❌ DELETE
          </button>

          <button className="text-slate-600 font-semibold text-sm hover:text-slate-800">
            🖋️ EDIT
          </button>

        </div>

      </div>

    </div>
  );
}

export default BillingCard;


// function BillingCard(props){
//     return(
//         <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">

//             <div className="flex justify-between items-start">

//                 <h2 className="text-lg font-semibold text-gray-700 mb-6"> { props.name}</h2>

//                 <div className="space-y-2 text-sm">

//                     <p>
//                         <span className="text-gray-400 mr-3 ">Company name</span>

//                         <span className="text-gray-700 font-medium ">{props.company}</span>
//                     </p>


//                                 <p>
//               <span className="text-gray-400 mr-3">
//                 Email Address:
//               </span>

//               <span className="text-gray-700 font-medium">
//                 {props.email}
//               </span>
//             </p>

//                         <p>
//               <span className="text-gray-400 mr-3">
//                 VAT Number:
//               </span>

//               <span className="text-gray-700 font-medium">
//                 {props.vat}
//               </span>
//             </p>


//                     <div className="flex gap-8">

//                                   <button className="text-red-600 font-semibold text-sm hover:text-red-800">
//             🗑 DELETE
//           </button>
//                     <button className="text-slate-600 font-semibold text-sm hover:text-slate-800">
//             ✎ EDIT
//           </button>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }
// export default BillingCard;