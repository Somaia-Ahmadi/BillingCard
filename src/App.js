import BillingCard from "./components/BillingCard";
import LikeButton from "./likeButton";
function App (){
  return(
    <div className=" bg-gray-100 text-center p-6 m-10">
      <LikeButton/>
    </div>
  )
}

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">

//       <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-sm">

//         {/* Page title */}
//         <h1 className="text-lg font-semibold text-gray-700 mb-8">
//           Billing Information
//         </h1>

//         {/* Billing Card 1 */}
//         <BillingCard
//           name="Oliver Liam"
//           company="Viking Burrito"
//           email="oliver@burrito.com"
//           vat="FRB1235476"
//         />

//         {/* Billing Card 2 */}
//         <BillingCard
//           name="Lucas Harper"
//           company="Stone Tech Zone"
//           email="lucas@stone-tech.com"
//           vat="FRB1235476"
//         />

//         {/* Billing Card 3 */}
//         <BillingCard
//           name="Ethan James"
//           company="Fiber Notion"
//           email="ethan@fiber.com"
//           vat="FRB1235476"
//         />

//       </div>

//     </div>
//   );
// }

export default App;