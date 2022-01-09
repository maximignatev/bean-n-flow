export const exportWav = (buffer) => {
  // I use recorderWorker.js to save the WAV file
  // https://webaudiodemos.appspot.com/AudioRecorder/js/recorderjs/recorderWorker.js
  // Included it in html, because couldn't find out how to do it any other way
  const workerBlob = new Blob([document.getElementById('worker').textContent])
  const worker = new Worker(window.URL.createObjectURL(workerBlob))

  worker.postMessage({
    command: 'init',
    config: {
      sampleRate: 44100,
    },
  })
  worker.postMessage({
    command: 'record',
    buffer: [buffer.getChannelData(0), buffer.getChannelData(1)],
  })
  worker.postMessage({
    command: 'exportWAV',
    type: 'audio/wav',
  })
  worker.onmessage = (event) => {
    console.log(event)
    const blob = event.data
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'test.wav')
    document.body.appendChild(link)
    link.click()
  }
}
