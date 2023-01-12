import { useState } from 'react'
import './App.css'
import './index.scss'
import logo from './images/logo.svg'
import search from './images/search-fill.svg'
import user from './images/user-outlined.svg'
import shoppingBag from './images/shopping-bag.svg'
import like from './images/heart-outlined.svg'
import rectangle from './images/rectangle_bg.svg'
import just_the_girl from './images/beautiful_woman.png'
import burger from './images/burger_image.svg'
import pagination from './images/pagination.svg'
function App() {

  return (
    <div className="App">
      <div className='recommend-bar-to-sign-in-and-sale'>
        <span>Sign in & get 20% off $100+ or 25% off $150+</span>
      </div>
      <header className='container'>
        <img src={burger} alt="burger" className='burger'/>
        <div className='logo'>
          <img src={logo} alt="logotype" />
          <span>
            BellaFit
          </span>
        </div>
        <nav className='header-nav'>
          <ul>
            <li>About Us</li>
            <li>Sale</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </nav>
        <menu className='personal-menu'>
          <ul>
            <li><img src={search} alt="search" /></li>
            <li><img src={user} alt="user" /></li>
            <li><img src={shoppingBag} alt="shopping-bag" /></li>
            <li><img src={like} alt="like" /></li>
          </ul>
        </menu>

      </header>
      <main>
        <div className='background-red'>
          <div className='container first_main_block'>
            <div className='container-for-title'>
              <div>1/3</div>
              <span></span>
              <div>
                <h2>
                  Inside All-Star, Gameday GOAT & more.
                </h2>
              </div>
              <button>start now</button>
            </div>
            <div className='banner'>
              <img src={rectangle} alt="rectangle" className='rectangle' />
              <img src={just_the_girl} alt="girl" className='girl' />
            </div>
          </div>

        </div>
        <div className='container about-us-title'>
          <h3>
            BellaFit
          </h3>
          <p>
            Unrivaled group fitness classes. Unparalleled personal training. Studios that inspire you to perform and luxury amenities that keep you feeling your best. 10,000+ classes at your fingertips. World-class trainers and fitness brands, all in one place.
          </p>
          <button>
            shop package
          </button>
        </div>
        <div className='background-women-training'>
          <div className='container card-blocks'>
            <div className='card-transparent'>
              <h1>
                stretch &recovery
              </h1>
              <p>
                If your goals are to improve your overall health and wellness, we have everything you need. We have cardio equipment spanning two floors including 8 stepmills.
              </p>
            </div>
            <div className='card-yellow'>
              <h1>
                personal trening
              </h1>
              <p>
                If your goals are to improve your overall health and wellness, we have everything you need. We have cardio equipment spanning two floors including 8 stepmills.
              </p>
              <button>
                start now
              </button>
            </div>
            <img src={pagination} alt="pagination" className='pagination'/>
            <div className='card-transparent'>
              <h1>
                group treniing
              </h1>
              <p>
                If your goals are to improve your overall health and wellness, we have everything you need. We have cardio equipment spanning two floors including 8 stepmills.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
