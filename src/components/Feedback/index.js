// Write your React code here.
import {Component} from 'react'

import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const FeedbackPage = props => {
  const {emojiDetails, onDisplayThankyouPage} = props
  const {name, imageUrl} = emojiDetails

  const thankyouPage = () => {
    onDisplayThankyouPage()
  }

  return (
    <li>
      <img
        onClick={thankyouPage}
        className="emoji-img"
        src={imageUrl}
        alt={name}
      />
      <p>{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {displayThankyouPage: false}

  onDisplayThankyouPage = () => {
    this.setState(prevState => ({
      displayThankyouPage: !prevState.displayThankyouPage,
    }))
  }

  render() {
    const {displayThankyouPage} = this.state

    return (
      <div className="bg-container">
        {displayThankyouPage ? (
          <>
            <div className="thankyou-container">
              <img
                className="emoji-img"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1>Thank You!</h1>
              <p>We will use your feedback to improve our customer support</p>
            </div>
          </>
        ) : (
          <>
            <div className="feedback-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div className="emoji-container">
                <ul className="ul-container">
                  {resources.emojis.map(eachImage => (
                    <FeedbackPage
                      emojiDetails={eachImage}
                      key={eachImage.id}
                      onDisplayThankyouPage={this.onDisplayThankyouPage}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Feedback
