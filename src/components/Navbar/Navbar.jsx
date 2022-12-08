// import React, { useState } from "react";
// import { images } from "../../constants/index";
// import { HiOutlineMenu, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

// //Styles
// import "./Navbar.scss";

// const Navbar = () => {
//   const [toggle, settoggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt="logo" />
//       </div>
//       <ul className="app__navbar-links">
//         {[
//           "home",
//           "kinship",
//           "support",
//           "missions",
//           "allies",
//           "events",
//           "contact",
//           "sign In",
//         ].map((item) => (
//           <li key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>
//       <div className="app__navbar-menu">
//         <HiOutlineMenu onClick={() => settoggle(true)} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: "easeOut" }}
//           >
//             <HiX onClick={() => settoggle(false)} />
//             <ul>
//               {[
//                 // "home",
//                 // "kinship",
//                 // "support",
//                 // "allies",
//                 // "missions",
//                 // "allies",
//                 // "events",
//                 // "contact",
//               ].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={() => settoggle(false)}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
