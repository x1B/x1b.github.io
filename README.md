x1b.org
=======

> personal website of Michael Kurze

Built using [vitepress](http://vitepress.vuejs.org/).


# Directories

As a reminder for myself:

* `docs/` build output, picked up by GitHub pages
  As described in the [GitHub Pages docs], other folders are not supported
  as publishing sources.

* `.vitepress/` contains vitepress config an theme components.
  During the build, a subfolder `dist/` is generated here by vitepress,
  which is then moved to `docs/`.

* `src/` markdown page contents to be deployed as HTML.

* `public/` contains static assets (favicons, fonts).
  This folder is picked up by vitepress automatically.

[GitHub Pages docs]: https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source
