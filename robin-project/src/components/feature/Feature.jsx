
import './feature.css'

// eslint-disable-next-line react/prop-types
const Feature = ({title, text}) => {
  return (
    <section className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p>{text}</p>
      </div>
      
    </section>
  )
}

export default Feature
