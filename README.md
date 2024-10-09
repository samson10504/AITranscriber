# Whisper Pal

Whisper Pal is a local audio transcription application that leverages the OpenAI Whisper model. It provides an easy-to-use interface for managing audio files and transcribing them using state-of-the-art machine learning technology.

## Features
- **Audio File Management**: 
  - Drag-and-drop interface for easy file import
  - Display of file information including name, creation date, and duration
- **Transcription**:
  - One-click transcription using the OpenAI Whisper model
  - Support for multiple audio formats

## Tech Stack
- Frontend: React.js
- Backend: Node.js with Electron
- Machine Learning: Python with OpenAI Whisper model
- Database: SQLite

## Prerequisites
- Node.js (v14.0.0 or later)
- Python (v3.7 or later)
- npm (v6.0.0 or later)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/samson10504/Whisper_Pal.git
   cd Whisper_Pal
   ```

2. Install Node.js dependencies:
   ```
   npm install
   ```

3. Set up the Python environment:
   ```
   cd python_scripts
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   pip install whisper torch
   ```

## Running the Application
1. Start the Electron app:
   ```
   npm start
   ```

## Development
- The main Electron process is in `src/main.js`
- The React frontend is in `src/App.js` and `src/components/`
- The Python transcription script is in `python_scripts/transcribe.py`

## Future Plans
- Implement FFmpeg integration for advanced audio format support
- Add a visual waveform editor for audio trimming
- Implement a search functionality
- Add project management features

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
