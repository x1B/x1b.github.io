
<template>
  <nav class="nav-bar">
    <ul>
      <li class="projects"><a href="/#projects">Projects</a></li>
      <li class="x1B"><a href="/#x1B">About</a></li>
      <li class="imprint"><a href="/#imprint">Imprint</a></li>
   </ul>
  </nav>
</template>

<style>
nav, nav ul, nav li, nav a {
  display: block;
  padding: 0;
  margin: 0;
}

nav {
  --navTopFull: calc(5*48px + 26px);
  --navHeight: 30px;
  --navWidth: 120px;
  --thresholdWidth: calc(
    var(--maxContentWidth) +
    2 * var(--navWidth) +
    2 * var(--leftGutterWidth)
  );

  position: fixed;
}

nav li {
  /* navigation resembles the section headings */
  list-style-type: none;
  line-height: var(--sectionHeadHeight);
  font-size: var(--sectionHeadHeight);
  font-family: var(--headlineFontFamily);
  margin-bottom: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px 1px var(--textBgShadowColor);
}

/* MOBILE */
@media (max-width: 999px) {
  nav {
    top: 0;
    right: 0;
  }
  nav li {
    float: left;
    margin-left: 4px;
    font-size: calc(var(--sectionHeadHeight) - 4px);
  }
  nav li:first-child {
    margin: 0;
  }
}

/* DESKTOP */
@media (min-width: 1000px) {
  nav {
    left: 0;
  }
  nav li {
    overflow: hidden;
    max-height: calc(var(--sectionHeadHeight) - 9px);
  }

  @media (min-height: 390px) {
    nav {
      top: var(--navTopFull);
    }
  }

  @media (max-height: 389px) {
    nav {
      bottom: 0;
    }
  }

}

nav a,
nav a:visited {
  position: relative;
  left: 0;
  text-decoration: none;
  background: var(--textColor);
  color: var(--textBgColor);
}

nav a[href="/#projects"],
nav a:visited[href="/#projects"] {
  background: var(--colorProjects);
}

nav a[href="/#x1B"],
nav a:visited[href="/#x1B"] {
  background: var(--colorX1b);
}

nav a[href="/#imprint"],
nav a:visited[href="/#imprint"] {
  background: var(--colorImprint);
}

@media (min-width: 1000px) {
  nav a,
  nav a:visited {
    top: -5px;
    width: var(--navWidth);
    height: calc(var(--sectionHeadHeight) - 4px);
    margin: 0 0 12px;
  }
}

@media ( max-width: 999px) {
  nav a,
  nav a:visited {
    height: calc(var(--navHeight) + 12px);
    line-height: calc(var(--navHeight) + 25px);
    width: calc(var(--navWidth) - 20px);
  }
}

</style>
