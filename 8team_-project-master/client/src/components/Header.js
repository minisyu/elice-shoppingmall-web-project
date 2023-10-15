// import {Link, useNavigate} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";

// const Header = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const token = useSelector(state => state.Auth.token);
//     const [isAuth, setIsAuth] = useState(false);
//     useEffect(() => {
//       if (jwtUtils.isAuth(token)) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//     }, [token]);

//     const logout = () => {
//         await dispatch(actions.logout());
//         alert("로그아웃 되었습니다.");
//         navigate("/Login");
//     };
//     return (
//         <div className="header-wrapper">
//       <div className="header-title">
//         <Link to="/">
//           <span>Shopping Mall</span>
//         </Link>
//       </div>
//       <div className="header-menu">
//         {isAuth ? (
//           <>
//             <Link to="#" onClick={logout}>로그아웃</Link>
//           </>
//         ) : (
//           <>
//             <Link to="/Login">로그인</Link>
//             <Link to="/Sign-up">회원가입</Link>
//           </>
//         )}
//     </div>
//     </div>
//     );
// };

// export default Header;
