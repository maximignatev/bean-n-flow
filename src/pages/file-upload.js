import React, { useState } from 'react'
import * as Tone from 'tone'

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = async (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
    console.log(event.target.files[0])

    const url = URL.createObjectURL(file)
    setIsSelected(true)

    const audio = document.createElement('audio')
    audio.src = url
    audio.controls = true
    document.body.append(audio)

    const player = new Tone.Player().toDestination()
    await player.load(url)
    player.start()
  }

  const handleSubmission = () => {}

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default FileUploadPage
