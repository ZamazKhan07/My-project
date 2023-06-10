import React, { useContext , useState } from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import fairTrade from '../../assets/fairTrade.png'
import { CgShoppingBag } from 'react-icons/cg'
import { CartCount } from '../FoodListComp/FoodListComp'
import { CartNumber } from './HeaderContext'
import { RiCloseLine } from 'react-icons/ri'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import { motion } from 'framer-motion'

export const Header = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    // const cartCounter = useContext(CartNumber);
    const counter = useContext(CartCount)

    const [dropDown, setdropDown] = useState(false)
    const [litags, setlitags] = useState(false)
    const [litags1, setlitags1] = useState(false)
    const [litags2, setlitags2] = useState(false)
    const [litags3, setlitags3] = useState(false)



    const litag = () => {
        if (litags === false){
            setlitags(true)
        }else{
            setlitags(false)
        }
    }

    const litag1 = () => {
        if (litags1 === false){
            setlitags1(true)
        }else{
            setlitags1(false)
        }
    }

    const litag2 = () => {
        if (litags2 === false){
            setlitags2(true)
        }else{
            setlitags2(false)
        }
    }

    const litag3 = () => {
        if (litags3 === false){
            setlitags3(true)
        }else{
            setlitags3(false)
        }
    }




    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={fairTrade} alt="logo the Anti-hunger" />
                <img src={logo} alt="logo the Anti-hunger" />
            </div>
            <div className={css.dropDown}>
                {dropDown ? <RiCloseLine onClick={()=>{setdropDown(false)}} size={"40px"} /> 
                : <MdOutlineArrowDropDownCircle onClick={()=>{setdropDown(true)}} size={"40px"}  />}
            </div>

            {dropDown && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className={css.dropDownData}
        >
          <ul className={css.data}>
            <li
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <a href="/home">Home</a>
            </li>
            <li onClick={litag}>
              <a>Notification</a>
              {litags && (
                <ul className={css.ul_two}>
                  <li>
                    <a href="#">No Alerts</a>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={litag1}>
              <a>Collection</a>
              {litags1 && (
                <ul>
                  <li>
                    <a href="/humanFood/1"> Human Food</a>
                  </li>
                  <li>
                    <a href="/animalFood/2">Animal Food</a>
                  </li>
                  <li>
                    <a href="/compositeFood/3">Composed Food</a>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={litag2}>
              <a>News</a>
              {litags2 && (
                <ul>
                  <li>
                    <a>News 1</a>
                  </li>
                  <li>
                    <a>News 2</a>
                  </li>
                  <li>
                    <a>News 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={litag3}>
              <a>About</a>
              {litags3 && (
                <ul>
                  <li>
                    <a>Contact-Us</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </motion.div>
      )}
            
            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li style={{
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px"
                        }}><a href='/home'>Home</a></li>
                        <li><a>Notification</a>
                            <ul className={css.ul_two}>
                                <li><a href="#">No Alerts</a></li>
                            </ul>

                        </li>
                        <li>
                            <a>Collection</a>
                            <ul >
                                <li><a href="/humanFood/1"> Human Food</a></li>
                                <li><a href="/animalFood/2">Animal Food</a></li>
                                <li><a href="/compositeFood/3">Composed Food</a></li>
                            </ul>
                        </li>

                        <li><a>News</a>
                            <ul >
                                <li><a >News 1</a></li>
                                <li><a >News 2</a></li>
                                <li><a >News 3</a></li>
                            </ul>
                        </li>
                        <li><a >About</a>
                            <ul >
                                <li><a >Contact-Us</a></li>
                            </ul>
                        </li>
                        {/* This p take will fit in front of li tag */}
                        {/* <p>{user.firstName} {user.lastName}</p> */}
                        {/* <li>
                            <ul >
                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/addpost">Add Food</a></li>
                                <li><a href='/' onClick={() => {
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('user')
                                }}>Log-Out</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <input type="text" className={css.search} placeholder="Search" />
                <a href="/cart"><CgShoppingBag className={css.cart} /></a>
                {counter}
            </div>
        </div>
    )
}

export default Header;