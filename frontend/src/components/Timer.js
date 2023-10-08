import React, { Component } from "react";
import sound from '../book_pdfs/audio_file.mp3';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0, // in seconds
      running: false,
      inputValue: "", // To store user input
      audio: new Audio(sound), // Replace with your music file path
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  startTimer = () => {
    const { inputValue } = this.state;
    const duration = parseInt(inputValue, 10); // Parse user input to an integer
    if (duration > 0 && !this.state.running) {
      this.setState({
        duration,
        running: true,
      });

      this.timerInterval = setInterval(() => {
        if (this.state.duration > 0) {
          this.setState((prevState) => ({
            duration: prevState.duration - 1,
          }));
        } else {
          this.stopTimer();
        }
      }, 1000);

      // Start playing the audio
      this.state.audio.play();
    }
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ duration: 0, running: false });

    // Pause the audio when the timer stops
    this.state.audio.pause();
    this.state.audio.currentTime = 0;
  };

  stopBoth = () => {
    this.stopTimer();
    this.state.audio.pause();
    this.state.audio.currentTime = 0;
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center square-form">
          <div className="card" style={{"border":"none"}}>
            <div className="card-body timerBody">
              <h2 className="mb-4">Countdown Timer</h2>
              <p>Duration: {this.state.duration} seconds</p>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control timerDuration"
                  placeholder="Enter duration (seconds)"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                />
              </div>
              {!this.state.running ? (
                <button
                  className="btn btn-md btn-dark  fs-18 fw-900"
                  onClick={() => this.startTimer()}
                >
                  Start Timer
                </button>
              ) : (
                <div>
                  <button
                    className="btn btn-outline-dark fs-18 fw-900" style={{"margin-top":"0"}}
                    onClick={() => this.stopTimer()}
                  >
                    Stop Timer
                  </button>
                  <button
                    className="btn btn-dark ml-2 fs-18 fw-900"
                    onClick={() => this.stopBoth()}
                  >
                    Stop Both
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
