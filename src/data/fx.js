import * as Tone from 'tone'

const effects = [
  // {
  //   name: 'Filter',
  //   parameters: [
  //     {
  //       name: 'Frequency',
  //       type: 'frequency-highpass',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Frequency',
  //       type: 'frequency-lowpass',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'Chorus',
  //   parameters: [
  //     {
  //       name: 'Frequency',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Delay time',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Depth',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'Distortion',
  //   parameters: [
  //     {
  //       name: 'Distortion',
  //       defaultValue: 0,
  //       min: 0,
  //       max: 1,
  //       step: 0.05,
  //     },
  //   ],
  // },
  // {
  //   name: 'FeedbackDelay',
  //   parameters: [
  //     {
  //       name: 'Time',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Feedback',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'PitchShift',
  //   parameters: [
  //     {
  //       name: 'Pitch',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'Phaser',
  //   parameters: [
  //     {
  //       name: 'Frequency',
  //       label: 'frequency',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Octaves',
  //       label: 'octaves',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Base frequency',
  //       label: 'baseFrequency',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'FrequencyShifter',
  //   parameters: [
  //     {
  //       name: 'Frequency',
  //       label: 'frequency',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  // {
  //   name: 'Tremolo',
  //   parameters: [
  //     {
  //       name: 'Frequency',
  //       label: 'frequency',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //     {
  //       name: 'Depth',
  //       label: 'depth',
  //       defaultValue: 100,
  //       min: 0,
  //       max: 1600,
  //       step: 100,
  //     },
  //   ],
  // },
  {
    name: 'Vibrato',
    params: [
      {
        name: 'Frequency',
        label: 'frequency',
        defaultValue: 99,
        min: 0,
        max: 1600,
        step: 1,
      },
      {
        name: 'Depth',
        label: 'depth',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
  },
]

export default effects
