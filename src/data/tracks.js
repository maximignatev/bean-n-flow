import a from 'sounds/Cool Breeze - Assimilation.mp3'
import b from 'sounds/Lord Finesse - Master Ya High (Instrumental).mp3'
import c from 'sounds/Old Future Fox Gang - Chicks Is Cool.mp3'
import d from 'sounds/Old Future Fox Gang - Guided Meditation (Hotline Miami 2 Wrong Number OST).mp3'
import e from 'sounds/TYRIS WHITe - THEN HUNT HER DREAMS.mp3'
import f from 'sounds/Cool Breeze - Down by Law.mp3'
import g from 'sounds/Dang_Free(beatmakerTV).mp3'
import h from 'sounds/gettin ignorant.mp3'
import aa from 'sounds/I feel you bae.mp3'
import bb from 'sounds/kali yuga.mp3'
import cc from 'sounds/Old Future Fox Gang - Java.mp3'
import dd from 'sounds/Old Future Fox Gang - Solstice.mp3'
import ee from 'sounds/quick(beatmakerTV).mp3'
import ff from 'sounds/sad__warm_song(beatmakerTV).mp3'
import gg from 'sounds/SHAWTYARMOUR - Cabbage.mp3'
import hh from 'sounds/Sun Araw - Deep Cover (Hotline Miami OST).mp3'
import aaa from 'sounds/tyris white - urban gateway.mp3'
import bbb from 'sounds/Wpcwe - kajdoe utro.mp3'

const getTrackName = (track) => track.split('/')[3].split('.')[0]

const tracks = [
  {
    url: a,
    name: getTrackName(a),
  },
  {
    url: b,
    name: getTrackName(b),
  },
  {
    url: c,
    name: getTrackName(c),
  },
  {
    url: d,
    name: getTrackName(d),
  },
  {
    url: e,
    name: getTrackName(e),
  },
  {
    url: f,
    name: getTrackName(f),
  },
  {
    url: g,
    name: getTrackName(g),
  },
  {
    url: h,
    name: getTrackName(h),
  },
  {
    url: aa,
    name: getTrackName(aa),
  },
  {
    url: bb,
    name: getTrackName(bb),
  },
  {
    url: cc,
    name: getTrackName(cc),
  },
  {
    url: dd,
    name: getTrackName(dd),
  },
  {
    url: ee,
    name: getTrackName(ee),
  },
  {
    url: ff,
    name: getTrackName(ff),
  },
  {
    url: gg,
    name: getTrackName(gg),
  },
  {
    url: hh,
    name: getTrackName(hh),
  },
  {
    url: aaa,
    name: getTrackName(aaa),
  },
  {
    url: bbb,
    name: getTrackName(bbb),
  },
]

export default tracks
