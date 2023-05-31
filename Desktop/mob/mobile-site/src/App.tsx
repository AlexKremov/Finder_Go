import './index.css';
import './App.css';
import graphics from './image/Graphics.png'
import answer from './image/answer-message.png'
import offer1 from './image/offer1.png'
import offer2 from './image/offer2.png'
import offer3 from './image/offer3.png'
import offer4 from './image/offer4.png'
import offer5 from './image/offer5.png'
import offer6 from './image/offer6.png'
import graphic from './image/graphic-min.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <nav>
            <span className='companyLabel'>team.flow</span>
            <div className='headerNavigation'>
              <ul className="topmenu">
                <li><a href="#" className="submenu-link" >How it Work </a>
                  <ul className="submenu">
                    <li><a href="">Производство</a></li>
                  </ul>
                </li>
                <li><a href="#" className="submenu-link">Product</a>
                  <ul className="submenu">
                    <li><a href="">Производство</a></li>
                  </ul>
                </li>
                <li><a href="#" className="submenu-link">Pricing</a>
                  <ul className="submenu">
                    <li><a href="">Производство</a></li>
                  </ul>
                </li>
                <li><a href="#" className="submenu-link">Resourse</a>
                  <ul className="submenu">
                    <li><a href="">Производство</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <a href='#' className='LogIn'>Log in</a>
            <button className='buttonGetStarted' >Get started free</button>
          </nav>
        </div>
      </header>
      <body>
        <div className='getAccount'>
          <div className='getAccount_buttons'>
            <button className='buttonSave90'>Save 90%</button>
            <button className='buttonGetAccount'>Get account of $59 &gt;</button>
          </div>
          <p className='tagline'>Manage the team
            <br />
            everyone wants to be on
            <p className='tagline_discription'>Simple platform that lets you master what great managers do best,
              <br />
              as develop trust, collaborate, and drive team performance.</p></p>
          <div className='mail'>
            <input type='email' placeholder='name@yourcompany.com' />
            <button className='buttonTryItFree'>Try it free</button>
          </div>
        </div>
        <div className='graphics'>
          <div className='graphics_container'>
            <img className='imageGraphics' src={graphics} alt="Graphics" />
          </div>
        </div>
        <div className='messages'>
          <div className='container'>
            <div className='messages_answer'>
              <img className='answer_image' src={answer} alt='img' />
            </div>
            <div className='messages_advantages'>
              <p className='advantages'>
                <span className='advantages_header'>Survey your team</span>
                <br />
                Powerful questions that get to the heart
                <br />
                of how team members really feel.
              </p>
              <p className='advantages'>
                <span className='advantages_header'>Resolve issues quickly</span>
                <br />
                Anonymous messaging that connects
                <br />
                managers and employees.
              </p>
              <p className='advantages'>
                <span className='advantages_header'>Plan your 1-on-1s</span>
                <br />
                Plan meetings together and give a stake
                <br />
                employees and teams.
              </p>
              <p className='advantages'>
                <span className='advantages_header'>Track your progress</span>
                <br />
                Easy-to-read reports and sharable
                <br />
                results help managers and teams.
              </p>
            </div>
          </div>
        </div>
        <section className='offers'>
          <p className='offers_header'>Make your work easier</p>
          <div className='offers_items'>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer1} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Team Surveys &amp; Reports</span>
                <br />
                Short, anonymous surveys track your
                <br />
                team’s needs weekly so you can focus.
              </p>
            </div>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer2} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Collaborative 1:1</span>
                <br />
                Build relationships by planning 1-on-1s
                <br />
                and start meetings.
              </p>
            </div>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer3} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Learning Center</span>
                <br />
                Quickly get solutions tailored to your
                <br />
                personal challenges from the manager.
              </p>
            </div>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer4} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Anonymous Messaging</span>
                <br />
                Develop trust in a safe channel for
                <br />
                important conversations.
              </p>
            </div>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer5} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Conversation Engine</span>
                <br />
                Communicate confidently with
                <br />
                recommended talking points.
              </p>
            </div>
            <div className='offers_items_container'>
              <img className='offer_image' src={offer6} alt='img' />
              <p className='advantages'>
                <span className='advantages_header'>Exclusives Managers</span>
                <br />
                Access manager tips, activities and
                <br />
                best practices from our team of experts.
              </p>
            </div>
          </div>
        </section>
        <div className='get_started'>
          <div className='container'>
            <div>
              <p className='advantages'>
                <span className='get_started_title'>We work how you<br />work everyday</span>
                <br />
                Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.
              </p>
              <button className='buttonGetStarted'>Get started free</button>
            </div>
            <div className='graphicm'>
              <div className='graphic_min'>
                <img className='graphic' src={graphic} />
              </div>
            </div>
          </div>
        </div>
        <div className='reviews'>
          <div className='container'>
            <p className='advantages'>
              <span className='get_started_title'>Why customers love<br />working with us</span>
              <br />
              “It's amazing what has helped me learn about my team.
              <br />
              I don't worry about blindspots anymore, and 1-on-1s have never
              <br />
              been more productive. The team loves it.”
            </p>
          </div>
        </div>
        <div className='developers'>
          <div className='container'>
            <div className='developer_container'>
              <div className='avatar_jorge' />
              <p className='developer_name'>
                Jorge Robertson
                <span className='developer_profession'>
                  CS at Google
                </span>
              </p>
            </div>
            <div className='developer_container'>
              <div className='avatar_franco' />
              <p className='developer_name'>
                Francisco Bell
                <span className='developer_profession'>
                  Designer at Microsoft
                </span>
              </p>
            </div>
            <div className='developer_container'>
              <div className='avatar_beth' />
              <p className='developer_name'>
                Beth Fox
                <span className='developer_profession'>
                  Developer at Airbnb
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='get_app'>
          <div className='container'>
            <p className='get_app_discription'>84% of employees who use<br />trust their direct manager</p>
            <div className='buttons_to_download'>
              <button className='button_android'>

              </button>
              <button className='button_ios'>

              </button>
            </div>

          </div>
        </div>
      </body>
      <footer>
        <div className='container'>

          <ul>
            Company
            <li><a href=''>About Us</a></li>
            <li><a href=''>Blog</a></li>
            <li><a href=''>Careers</a></li>
            <li><a href=''>Contact Us</a></li>
          </ul>
          <ul>
            Support
            <li><a href=''>Help Center</a></li>
            <li><a href=''>Safety Center</a></li>
            <li><a href=''>Community</a></li>
          </ul>
          <ul>
            Legal
            <li><a href=''>Cookies Policy</a></li>
            <li><a href=''>Privacy Policy</a></li>
            <li><a href=''>Terms of Service</a></li>
          </ul>
          <ul>
            Install App
            <li><button className='footer_button'>

            </button>
            </li>
            <li>
              <button className='footer_button'>

              </button>
            </li>
          </ul>

        </div>
      </footer>
    </div>
  );
}

export default App;
