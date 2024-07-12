// import React from 'react'
// import '../../Style/categoryCards.css'


// const data = [
//   { id: 9177, image: "", name: 'Pizza', slug: 'yummy-pizza' },
//   { id: 9178, image: "", name: 'Sendvic', slug: 'sendvic' },
//   { id: 9177, image: "", name: 'Fries', slug: 'fries' },
//   { id: 9177, image: "", name: 'Pizza', slug: 'yummy-pizza' },
//   { id: 9178, image: "", name: 'Sendvic', slug: 'sendvic' },
//   { id: 9177, image: "", name: 'Fries', slug: 'fries' },
//   { id: 9177, image: "", name: 'Pizza', slug: 'yummy-pizza' },
//   { id: 9178, image: "", name: 'Sendvic', slug: 'sendvic' },
//   { id: 9177, image: "", name: 'Fries', slug: 'fries' },
// ];

// function Category() {
//   return (
//     <div className='container'>
//       <table className="table">
//     <thead>
//       <tr>
//         <th className="th">ID</th>
//         <th className="th">Image</th>
//         <th className="th">Name</th>
//         <th className="th">Slug</th>
//         <th className="th th-short"></th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((item, index) => (
//         <tr key={index}>
//           <td className="td">{item.id}</td>
//           <td className="td"><img src={item.image} alt="" /></td>
//           <td className="td">{item.name}</td>
//           <td className="td">{item.slug}</td>
//           <td className="buttons">
//           <button className="editButton"><img src="" alt="" /></button>
//           <button className="deleteButton"><img src="" alt="" /></button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   </div>
//   )
// }

// export default Category