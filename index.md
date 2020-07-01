
<section class="projects" id="projects">

## Current Projects

* ### [How to Sell Drugs Online (Fast)](https://www.netflix.com/de/title/80218448) <p class="sub-head">Netflix Series <br> Technical Consultant, since 2018 </p>

  I am consulting [Bildundtonfabrik](https://btf.de) on technical questions concerning information security, software development, and nerd culture.

  If you see any code or a terminal on screen, chances are that I
  was involved.

  [more](https://www.netflix.com/de/title/80218448)


* ### [planlos.in Deiner Stadt](https://www.planlos.in) <p class="sub-head">City Adventure Experience<br> co-Founder, since 2016</p>

  Together with a ton of creative people including two friends from high school (my co-founders),
  I am developing and running [planlos.in](https://www.planlos.in).
  Since our launch in late 2016, tens of thousands of people have been enjoying our tours.

  This escape-game-style city adventure allows people
  to experience new places in a unique way, and to discover their
  own city with new eyes.

  Players find clues, solve riddles, and generally have a good time.

  Throughout the last couple of years,
  I have been supporting our tour authors in creating great experiences,
  while taking part in evolving our a [Django](https://docs.djangoproject.com) based game platform,
  and in occasionally checking the [Ansible](https://docs.ansible.com/) based [AWS](https://aws.amazon.com/) ops.

  [more](https://www.planlos.in)


* ### [Aachen Vue.js Meetup](https://www.meetup.com/aachen-vue-js-meetup/) <p class="sub-head">co-organizer<br>since 2018</p>

  Recently on the backburner (thanks to COVID-19),
  [Alexander Stoffers](https://next-audit.de/) and I managed to gather the [Vue.js](https://vuejs.org/)
  Community in [Aachen](https://en.wikipedia.org/wiki/Aachen) for seven meetups so far
  enjoying great talks as well as sponsored Pizza.

  Sign Up and join us for our next event!

  [more](https://www.meetup.com/aachen-vue-js-meetup/)


* ### [LaxarJS](http://laxarjs.org) <p class="sub-head">middleware for the web client (stable)<br> contributor/maintainer, since 2013</p>

  It is a privilege to be [employed](http://www.aixigo.de) as participant in an open source effort.
  LaxarJS can be considered a _middleware_ that helps to decouple and structure your application components
  through a publish/subscribe-system.

  Initially, LaxarJS was mainly geared towards AngularJS developers,
  but can now be used as a bridging technology in a
  [micro-frontend](https://martinfowler.com/articles/micro-frontends.html) architecture.
  I favor using it in combination with [Vue.js](https://vuejs.org).
  For the LaxarJS team, [Alex](https://twitter.com/alex3683) and I presented the project at
  [enterJS 2015](http://www.enterjs.de/abstracts/#laxarjs),
  [goto;amsterdam](http://gotocon.com/amsterdam-2016/presentations/show_presentation.jsp?oid=7800)
  [(W-)JAX Munich](https://jaxenter.de/ein-wenig-streiterei-auf-kindergartenniveau-wird-es-zwischen-java-und-javascript-verfechtern-wohl-immer-geben-34846).

  [more](http://laxarjs.org)


* ### [This Site](#top) <p class="sub-head">_the escape sequence,_<br /> personal site, 2017-2020</p>

  Playing around with all the great libraries, frameworks and other tools out there, it becomes easy to get carried away and forget about the capabilities of the underlying web platform that powers it all.
  So for quite some time I took a certain joy in writing the JavaScript, (S)CSS and HTML on this site by hand.

  However, _static site generators_ are just too compelling,
  so recently I took the opportunity to recreate the site using [vitepress](https://github.com/vuejs/vitepress),
  a bleeding edge generator based on the upcoming [Vue 3](https://v3.vuejs.org/) and [vite](https://github.com/vitejs/vite).
  In that process I picked up custom properties and dropped the SCSS in favor of plain standard CSS.
  This combination makes for a lightning fast editing experience, where Vite hot-reloads my content much faster than I
  can even start telling my browser to refresh.

  [more](https://github.com/x1B/x1b.github.io/)


## Previous Projects

* ### [NBE](https://github.com/x1B/nbe) and [Wireflow](https://github.com/x1B/wireflow) <p class="sub-head">node-based editing library<br> various web technologies, 2016-2017</p>

  A personal project of mine, [NBE](https://github.com/x1B/nbe) is a user interface to display and manipulate directed hypergraphs.
  In such graphs, each edge may connect _from_ any number of nodes _to_ any number of nodes.
  Check out a [toy example](/projects/nbe/examples/logic/) where NBE is used to implement a simple circuit simulator.

  The AngularJS (later: React) module is aimed specifically at node-based editing applications such as
  _digital compositing, visual programming, data integration/mining_ and _project planning_.
  The hypergraph-model also lends itself to composing and visualizing _publish/subscribe_-systems,
  where topics are modeled as edges in the hyper-graph.
  Automatic graph layout calculation is provided through [dagre](https://github.com/cpettitt/dagre).

  Later, I <a href="https://github.com/x1B/wireflow">recreated</a> the UI in <a href="https://reactjs.org/">React</a>.
  This version was used to implement the [LaxarJS Developer Tools](https://chrome.google.com/webstore/detail/laxarjs-developer-tools/leidhppnemgdhcjfagmjdkfjpejibinp) for Google Chrome.

  [more](https://github.com/x1B/nbe)


* ### [Paperdart](https://github.com/x1B/paperdart) <p class="sub-head">simple pastebin<br> for hosting from Elasticsearch (2015)</p>

  Pastebin sites are quite useful, especially in conjunction with a messaging app.
  However I found that the information I need to share is often not something to put out on the internet.
  If you have an [Elasticsearch](https://www.elastic.co/elasticsearch/) instance running on your intranet,
  you can simply put _paperdart_ into your plugins folder, and there is your pastebin.
  Paperdart also offers preview for markdown and HTML,
  so for a time I used it to compose any substantial amount of markdown.

  I created the application using [LaxarJS](http://laxarjs.org) and [Codemirror](http://codemirror.net).
  It however does not use any of the more powerful Elasticsearch capabilities (like, say, _search_),
  merely treating it as a glorified key/value-store.

  [more](https://github.com/x1B/paperdart)


* ### [Firefox Input](https://input.mozilla.org) <p class="sub-head">Sentiment analysis<br> internships 2010/2011</p>

  During my 2010 internship with the
  [mozilla data team](https://blog.mozilla.org/data) in Mountain View,
  I built a [sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis)
  tool for the original version of the [Firefox Input](http://input.mozilla.org)
  site.

  Sadly, the Python/Django-solution of that time is no longer with us
  ([the code](https://github.com/mozilla/input.mozilla.org/commit/2864110dd2b1375924021e75fe1f7e62050a491a) is, though).
  My Contribution was used to identify website breakage in advance of the _Firefox 4_ release (the first "evergreen" version of Firefox).

  Together with a good deal of
  [ETL work](https://en.wikipedia.org/wiki/Extract,_transform,_load),
  this actually got
  [my name](https://kyoshino.github.io/mozument-finder/#Michael%20Kurze) on
  [the "Monument"](https://wiki.mozilla.org/Monument) ;)

</section>

<section class="x1B" id="x1B">

## About x1B

This x1B is me, _Michael Kurze_, 2013 CS grad from RWTH Aachen,
and this is my _personal_ website.
I am a software developer and product architect with [aixigo AG](http://www.aixigo.de/) in Aachen (Germany).
Among other things, I take a part in the development of [LaxarJS](http://www.laxarjs.org) a runtime for the construction of large web-apps from small, manageable parts.

Professionally, my focus is and always has been on web technologies,
a field that will probably never get boring.
I am also interested in software and service architecture,
machine learning and data mining topics ([my master's thesis](https://www.researchgate.net/publication/271436091_Adaptive_Model_Tree_for_Streaming_Data)).

#### Contact

To get in touch, send an E-Mail to `michael.codes__pm.me` (insert `@`).

You can also find me as [x1B on GitHub](https://github.com/x1B)
and (infrequently) as [@0b11011 on twitter](https://twitter.com/0b11011).

</section>
