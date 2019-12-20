import { readFile } from 'fs-extra'
import { endent } from '@dword-design/functions'
import expect from 'expect'

export default async () => {
  const code = await readFile(require.resolve('@dword-design/reset-sass/../dist/index.css'), 'utf8')
  expect(code).toEqual(endent`
    /* http://meyerweb.com/eric/tools/css/reset/
       v4.0 | 20180602
       License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline; }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
      display: block; }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
      display: none; }

    body {
      line-height: 1; }

    ol, ul {
      list-style: none; }

    blockquote, q {
      quotes: none; }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none; }

    table {
      border-collapse: collapse;
      border-spacing: 0; }

    button {
      display: inline-flex;
      border-radius: 0;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      color: inherit; }
      button:focus {
        outline: none; }

    input {
      background: transparent;
      border: none; }

    input[type=submit] {
      -webkit-appearance: none; }

    li {
      list-style-type: none; }

    * {
      box-sizing: border-box; }

    input, button, textarea, select {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: inherit;
      margin: 0;
      padding: 0; }

    input[type=text], textarea {
      -webkit-appearance: none; }
      input[type=text]:disabled, textarea:disabled {
        opacity: 1; }

    input:focus {
      box-shadow: none; }

    textarea {
      background: transparent;
      border-color: transparent; }

    a {
      text-decoration: none;
      color: inherit; }

    img {
      width: 100%;
      height: auto; }

    div, h1, h2, h3, h4, h5, h6 {
      display: flex;
      flex-direction: column; }

  ` + '\n')
}
