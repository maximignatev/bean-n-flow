import * as Tone from 'tone'

// pitch shift
// frequency shift
// distortion
// reverb
// delay
const effects = [
  {
    name: 'PitchShift',
    params: [
      {
        name: 'Pitch',
        key: 'pitch',
        defaultValue: 0,
        min: -12,
        max: 12,
        step: 0.5,
      },
    ],
  },
  {
    name: 'FrequencyShifter',
    params: [
      {
        name: 'Frequency',
        key: 'frequency',
        label: 'frequency',
        defaultValue: 0,
        min: -500,
        max: 500,
        step: 10,
      },
    ],
  },
  {
    name: 'FeedbackDelay',
    params: [
      {
        name: 'Time',
        key: 'delayTime',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
      },
      {
        name: 'Feedback',
        key: 'feedback',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
  },
  {
    name: 'JCReverb',
    params: [
      {
        name: 'roomSize',
        key: 'roomSize',
        defaultValue: 0.0001,
        min: 0,
        max: 1,
        step: 0.1,
      },
    ],
  },
  {
    name: 'Distortion',
    params: [
      {
        name: 'Distortion',
        key: 'distortion',
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
  },
]
// {
//   name: 'AutoFilter',
//   params: [
//     {
//       name: 'Frequency',
//       key: 'frequency',
//       label: 'frequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//     {
//       name: 'Base frequency',
//       key: 'baseFrequency',
//       label: 'baseFrequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 1,
//     },
//     {
//       name: 'Octaves',
//       key: 'octaves',
//       label: 'octaves',
//       defaultValue: 0,
//       min: -12,
//       max: 12,
//       step: 0.5,
//     },
//   ],
// },
// {
//   name: 'FeedbackDelay',
//   params: [
//     {
//       name: 'Time',
//       key: 'delayTime',
//       defaultValue: 0,
//       min: 0,
//       max: 1,
//       step: 0.05,
//     },
//     {
//       name: 'Feedback',
//       key: 'feedback',
//       defaultValue: 0,
//       min: 0,
//       max: 1,
//       step: 0.05,
//     },
//   ],
// },
// {
//   name: 'Vibrato',
//   params: [
//     {
//       name: 'Frequency',
//       key: 'frequency',
//       label: 'frequency',
//       defaultValue: 99,
//       min: 0,
//       max: 1600000,
//       step: 100,
//     },
//     {
//       name: 'Depth',
//       key: 'depth',
//       label: 'depth',
//       defaultValue: 0,
//       min: 0,
//       max: 1,
//       step: 0.05,
//     },
//   ],
// },
// {
//   name: 'Chorus',
//   params: [
//     {
//       name: 'Frequency',
//       key: 'frequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//     {
//       name: 'Delay time',
//       key: 'delayTime',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//     {
//       name: 'Depth',
//       key: 'depth',
//       defaultValue: 0,
//       min: 0,
//       max: 1,
//       step: 1,
//     },
//   ],
// },

export default effects
