import './index.css'

const Project = (props) => {
    const {list, tabsList, isActive} = props 
    const {imageURL, title, description} = list
    
    return(
        <>
        <li className='mainDiv'>
            <img src={imageURL} alt="IMG" className='imageSizing' />
            <div>
                <h1 className='h1'>{title}</h1>
                <p className='p'>{description}</p>
            </div>
        </li>
        </>
    )
}

export default Project