import {Component} from 'react'
import Project from './components'
import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {
  state = {
    searchResult : tabsList[0].tabId,
    filterdList : [],
    teaxtStyling : 'displayText'
  }
  tabListUpdate = (Id) =>{
    
    this.state.searchResult = Id
    
    this.getFilterdList()
    
  }
  
  getFilterdList = () => {
    const c = this.tabListUpdate
    const {searchResult} = this.state
    const b = projectsList.filter(each => 
      each.category === searchResult
      
    )
    this.setState({filterdList:b})
    
  }
  
  
  componentDidMount() {
    this.getFilterdList()
  }
  render() {
    
    const {teaxtStyling} = this.state
    return (
      <div className="app-container">
        <div className='Icon-container'>
          <h1 className=''><span className='name'>D</span>aripalli <span className='name'>G</span>anesh</h1>
          <div className='top-container'>
            <a href='https://www.linkedin.com/in/ganesh-daripalli-35188a320/'>
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className='img1' width="45" height="30" />
            </a>
            <a href='https://github.com/GaneshDaripelli'>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className='img1' width="45" height="30" />
            </a>
            <a href='https://x.com/darepally70052G'>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className='img1' width="45" height="30" />
            </a>  
          </div>
        </div>  
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>
        <div className="textDiv">
        {tabsList.map((each)=>{
            return(
                <div style={{cursor: 'pointer'}} onClick={()=>{this.tabListUpdate(each.tabId)}}>
                    <h1 className={teaxtStyling}>{each.displayText}</h1>
                </div>
            )
        })}
        </div>
        <hr className='hr'/>
        <ul className='ul'>
          {this.state.filterdList?.map((eachItem) => (
            <Project list={eachItem} key={eachItem.projectId} tabsList={tabsList} />    
          ))}  
        </ul>
    </div>   
    )
    
  }
}

export default App
