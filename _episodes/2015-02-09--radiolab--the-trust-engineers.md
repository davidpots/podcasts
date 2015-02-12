---
date:          "2015-02-09"
podcast:       "Radiolab"
title:         "The Trust Engineers"
summary:       "A fascinating glimpse under the hood of Facebook's research lab, where various facets of our online experience are carefully crafted and refined. Discussion of the various platform experiments we're all a part of, the ethics of doing such research, and the promise (or danger) of performing social science on a scale previously thought impossible."
url-audio:     "http://audio.wnyc.org/radiolab_podcast/radiolab_podcast15trustengineers.mp3"
url-web:       "http://www.radiolab.org/story/trust-engineers/"
timestamps:
 - time:       "0:00"
   notes:      "First segment, where we meet Facebook 'trust engineer' Arturo Bejar (and a team of other researchers) who are tweaking our online experience bit by bit. Awesome look into the tests they run (using the 'report this' feature as an example), specifically focusing on the unimaginably large sample sizes they're able to utilize."
 - time:       "17:24"
   notes:      "Second segment, which dives into the public's reaction to the breaking story that Facebook was tinkering with the balance of positive/negative posts in users' news feeds (to guage how users responded). Also, talk about the ethical implications of social engineering at this scale."
---

{% assign podcast_data = site.data.podcasts | where:"title", page.podcast_title %}
{% assign podcast = podcast_data | first %}